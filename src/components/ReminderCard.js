import { ReminderDetails, EditReminderForm } from './index.js';

export function ReminderCard(reminder) {

    if (
        (reminder.title === undefined || reminder.title === "") ||
        (reminder.description === undefined || reminder.description === "") ||
        (reminder.dueDate === undefined || reminder.dueDate === "") ||
        (reminder.status === undefined || typeof reminder.status !== 'boolean')
    ) throw new Error('Missing arguments in the costructor call. Please verify the ReminderCard component call.');

    const $d = document;
    const $cardMain = $d.createElement("div");
    const $cardBody = $d.createElement("div");
    const $reminderDetailSection = ReminderDetails(reminder);
    const $reminderFormSection = EditReminderForm(reminder);

    // Styling elements
    $cardMain.className = "card my-3";
    $cardBody.className = "card-body";

    // Giving properties to elements
    $cardMain.setAttribute("data-card-key", `${reminder.id}`);

    // Creating component
    $cardBody.appendChild($reminderDetailSection);
    $cardBody.appendChild($reminderFormSection);
    $cardMain.appendChild($cardBody);

    return $cardMain;
}