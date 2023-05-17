import { App } from "./App.js";
import { loadFunction } from "./helpers/index.js";

const current_reminders = [
    {
        id: 1,
        title: "BBConnect Exam 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus ut nibh efficitur mollis eu at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        dueDate: "2023-05-11",
        status: true
    },
    {
        id: 2,
        title: "CMS Site Manager Training Quest 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus ut nibh efficitur mollis eu at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        dueDate: "2023-05-11",
        status: true
    },
    {
        id: 3,
        title: "CMS Site Contributor Training Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus ut nibh efficitur mollis eu at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        dueDate: "2023-05-11",
        status: true
    },
    {
        id: 4,
        title: "Opinio Exam 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed metus ut nibh efficitur mollis eu at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        dueDate: "2023-05-11",
        status: false
    }
];

export default current_reminders;

function addReminder(props) {
    let { title, description, dueDate } = props;

    if (
        (title === undefined || title === "") ||
        (description === undefined || description === "") ||
        (dueDate === undefined || dueDate === "")
    ) throw new Error('Missing arguments in the AddReminder function call.');

    const remindersLength = current_reminders.length;
    current_reminders.push({
        id: (remindersLength + 1),
        title: title,
        description: description,
        dueDate: dueDate,
        status: true
    });
    App();
}

function showEditForm(e) {
    const actionButtonsContainer = document.getElementById("edit_form_actions_btns");
    const editFormSection = document.getElementById("edit_form_section");
    const deleteReminderBtn = document.getElementById("delete_reminder_btn");
    const editReminderForm = document.querySelector("form[name='edit_reminder_form']");
    const editReminderBtn = document.getElementById("edit_reminder_btn");
    // const saveReminderBtn = document.querySelector("button#save_reminder");
    // const cancelReminderBtn = document.querySelector("button#cancel_reminder_changes");

    editFormSection.classList.remove("d-none");
    actionButtonsContainer.classList.add("d-none");
    editReminderBtn.disabled = true;
    deleteReminderBtn.disabled = true;

    editReminderForm.elements.reminder_title.focus();
}

function saveEditForm(e) {
    const actionButtonsContainer = document.getElementById("edit_form_actions_btns");
    const editFormSection = document.getElementById("edit_form_section");
    const deleteReminderBtn = document.getElementById("delete_reminder_btn");
    const editReminderBtn = document.getElementById("edit_reminder_btn");

    e.preventDefault();
    editFormSection.classList.add("d-none");
    actionButtonsContainer.classList.remove("d-none");
    editReminderBtn.disabled = false;
    deleteReminderBtn.disabled = false;
}

// App initialization
App();

window.addEventListener("load", loadFunction);

window.addEventListener("DOMContentLoaded", () => {

    const addReminderDialogBtn = document.getElementById("addReminder_dialog");
    const addReminderDialog = document.getElementById("add-reminders-dialog");
    const addReminderBtn = document.getElementById("addReminderBtn");
    const reminderCloseBtnDialog = document.getElementById("reminderCloseBtnDialog");

    const formAddReminders = document.querySelector("form[name='addReminders_form']");

    reminderCloseBtnDialog.onclick = () => addReminderDialog.close();

    addReminderDialogBtn.onclick = () => {
        addReminderDialog.showModal();
    }

    addReminderBtn.onclick = (e) => {
        e.preventDefault();
        addReminder({
            title: formAddReminders.elements['reminder_title-dialog'].value,
            description: formAddReminders.elements['reminder_description-dialog'].value,
            dueDate: formAddReminders.elements['reminder_dueDate-dialog'].value
        });
        formAddReminders.elements['reminder_title-dialog'].value = "";
        formAddReminders.elements['reminder_description-dialog'].value = "";
        formAddReminders.elements['reminder_dueDate-dialog'].value = "";
        addReminderDialog.close();
    };

    // Edit Reminder Form Animations
    const editReminderBtn = document.getElementById("edit_reminder_btn");
    const saveReminderBtn = document.querySelector("button#save_reminder");

    editReminderBtn.addEventListener("click", showEditForm);
    saveReminderBtn.addEventListener("click", saveEditForm);
});