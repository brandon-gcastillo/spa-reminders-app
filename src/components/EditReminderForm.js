import { FormControlWrapper, Input, Label, TextArea, FormReminderActionButtons } from "./index.js";

export function EditReminderForm(props) {
    let { id, title, description, dueDate } = props;

    if (id === undefined || id === "") {
        throw new Error("No ID provided to the component call.");
    }

    const $d = document;
    const $section = $d.createElement("section");
    const $editForm = $d.createElement("form");
    const $formTitle = $d.createElement("h4");
    const $formActionButtons = FormReminderActionButtons(id, title);

    // Generates the HTML Code for the Reminder Title Field
    const $titleLabel = Label({
        forInput: "reminder_title-event-" + id,
        labelTitle: "Reminder Title:",
        required: true
    });
    const $titleInput = Input({
        type: "text",
        name: "reminder_title-event-" + id,
        id: "reminder_title-event-" + id,
        required: true,
        value: title.trim()
    });
    const $titleWrapper = FormControlWrapper($titleLabel, $titleInput, "form-group mb-2");

    // Generates the HTML Code for the Reminder Description Field
    const $descLabel = Label({
        forInput: "reminder_description-event-" + id,
        labelTitle: "Reminder Description:",
        required: true
    });
    const $descInput = TextArea({
        name: "reminder_description-event-" + id,
        id: "reminder_description-event-" + id,
        required: true,
        rows: "5",
        maxlength: "255",
        value: description.trim()
    });
    const $descWrapper = FormControlWrapper($descLabel, $descInput, "form-group mb-2");

    // Generates the HTML Code for the Reminder Due Date Field
    const $dueDateLabel = Label({
        forInput: "reminder_dueDate-event-" + id,
        labelTitle: "Due Date:",
        required: true
    });
    const $dueDateInput = Input({
        type: "date",
        name: "reminder_dueDate-event-" + id,
        id: "reminder_dueDate-event-" + id,
        required: true,
        value: dueDate
    });
    const $dueDateWrapper = FormControlWrapper($dueDateLabel, $dueDateInput, "form-group mb-2");

    // Styling elements
    $formTitle.className = "form-title";
    $section.className = "reminder_form_section";

    // Giving properties to elements
    $formTitle.textContent = "Edit Reminder Information";
    $editForm.setAttribute("action", "#");
    $editForm.setAttribute("name", "edit_reminder_form");
    $editForm.novalidate = true;

    // Form component creation
    $editForm.appendChild($formTitle);
    $editForm.appendChild($titleWrapper);
    $editForm.appendChild($descWrapper);
    $editForm.appendChild($dueDateWrapper);
    $section.appendChild($editForm);
    $section.appendChild($formActionButtons);

    return $section;
}