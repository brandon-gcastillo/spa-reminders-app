import { Icon } from './index.js';

export function FormReminderActionButtons(id, title) {

    if (id === undefined) {
        throw new Error("No ID provided. Missing arguments in constructor.");
    }

    const $d = document;
    const $actionButtonsDiv = $d.createElement("div");
    const $saveBtn = $d.createElement("button");
    const $cancelBtn = $d.createElement("button");
    const $saveIcon = Icon("saveIcon");
    const $cancelIcon = Icon("cancelIcon");

    // Styling elements
    $saveBtn.className = "btn btn-secondary my-1 me-1";
    $cancelBtn.className = "btn btn-danger my-1";

    // Giving properties to elements
    $saveBtn.setAttribute("type", "button");
    $saveBtn.setAttribute("name", "save_reminder_btn");
    $saveBtn.setAttribute("id", `save_reminder_btn-${id}`);
    $saveBtn.setAttribute("data-key", id);

    $cancelBtn.setAttribute("type", "button");
    $cancelBtn.setAttribute("name", "cancel_reminder_btn");
    $cancelBtn.setAttribute("id", `cancel_reminder_btn-${id}`);
    $cancelBtn.setAttribute("data-key", id);
    $actionButtonsDiv.className = "form_action_buttons";

    // Assigning texts and icons to elements
    $saveBtn.appendChild($saveIcon);
    $saveBtn.append(" Save Changes");
    $cancelBtn.appendChild($cancelIcon);
    $cancelBtn.append(" Cancel Changes");
    $actionButtonsDiv.appendChild($saveBtn);
    $actionButtonsDiv.appendChild($cancelBtn);

    return $actionButtonsDiv;
}