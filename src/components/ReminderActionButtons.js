import { Icon } from './index.js';

export function ReminderActionButtons(id, title) {

    if (id === undefined) {
        throw new Error("No ID provided. Missing arguments in constructor.");
    }

    const $d = document;
    const $actionButtonsDiv = $d.createElement("div");
    const $editBtn = $d.createElement("button");
    const $deleteBtn = $d.createElement("button");
    const $editIcon = Icon("editIcon");
    const $deleteIcon = Icon("deleteIcon");

    // Styling elements
    $editBtn.className = "btn btn-secondary my-1 me-1";
    $deleteBtn.className = "btn btn-danger my-1";

    // Giving properties to elements
    $editBtn.setAttribute("type", "button");
    $editBtn.setAttribute("name", "edit_reminder_btn");
    $editBtn.setAttribute("id", `edit_reminder_btn-${id}`);
    $editBtn.setAttribute("data-key", id);

    $deleteBtn.setAttribute("type", "button");
    $deleteBtn.setAttribute("name", "edit_reminder_btn");
    $deleteBtn.setAttribute("id", `delete_reminder_btn-${id}`);
    $deleteBtn.setAttribute("data-key", id);

    // Assigning texts and icons to elements
    $editBtn.appendChild($editIcon);
    $editBtn.append("Edit Reminder");
    $deleteBtn.appendChild($deleteIcon);
    $deleteBtn.append("Delete Reminder");
    $actionButtonsDiv.appendChild($editBtn);
    $actionButtonsDiv.appendChild($deleteBtn);

    return $actionButtonsDiv;
}