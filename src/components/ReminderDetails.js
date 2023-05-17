import { Divider, ReminderActionButtons } from "./index.js";
import { formatDate } from "../helpers/index.js";

export function ReminderDetails(props) {
    let { id, title, description, dueDate, status } = props;

    if (
        (id === undefined) ||
        (title === undefined) ||
        (description === undefined) ||
        (dueDate === undefined) ||
        (status === undefined)
    ) throw new Error('Missing arguments in the constructor call. Please verify the ReminderDetails component call.');

    const $d = document;
    const $cardSection = $d.createElement("section"); // Details section
    const $cardTitleDiv = $d.createElement("div"); // Title info container
    const $cardTitle = $d.createElement("h5");
    const $badge = $d.createElement("span");
    const $cardSubtitle = $d.createElement("h6");
    const $cardDesc = $d.createElement("p");
    const $divider = Divider();
    const $cardActionButtons = ReminderActionButtons(id, title);

    // Styling elements
    $cardTitleDiv.className = "mb-2";
    $cardTitle.className = "card-title";
    $badge.className = status
        ? "badge rounded-pill text-bg-success"
        : "badge rounded-pill text-bg-dark";
    $cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
    $cardDesc.className = "card-text";

    // Giving properties to elements
    $cardTitle.textContent = `${title.trim()}`;
    $badge.textContent = `Status: ${status ? "Active" : "Inactive"}`;
    $cardSubtitle.textContent = `Date: ${formatDate(dueDate)}`;
    $cardDesc.textContent = description.trim();

    // Creating Component
    $cardTitleDiv.appendChild($cardTitle);
    $cardTitleDiv.appendChild($badge);
    $cardSection.appendChild($cardTitleDiv);
    $cardSection.appendChild($cardSubtitle);
    $cardSection.appendChild($cardDesc);
    $cardSection.appendChild($divider);
    $cardSection.appendChild($cardActionButtons);

    return $cardSection;
}