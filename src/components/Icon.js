export function Icon(type) {
    const iconTypes = Object.freeze({
        editIcon: "fa-regular fa-pen-to-square me-1",
        deleteIcon: "fa-regular fa-trash-can me-1",
        saveIcon: "fa-regular fa-floppy-disk me-1",
        cancelIcon: "fa-solid fa-ban mr-1"
    })

    const $icon = document.createElement("i");

    if (type === undefined || !(type in iconTypes)) {
        throw new Error("Icon type does not exists. Please use a valid Icon type.");
    }

    $icon.className = iconTypes[type];

    return $icon;
}