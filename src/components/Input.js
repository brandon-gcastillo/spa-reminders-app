export function Input(props) {
    let { type, name, id, required, value } = props;

    const supportedTypes = Object.freeze({
        text: {
            type: "text",
            class: "form-control"
        },
        email: {
            type: "email",
            class: "form-control"
        },
        phone: {
            type: "phone",
            class: "form-control"
        },
        date: {
            type: "date",
            class: "form-control w-50"
        }
    });

    if (!(type in supportedTypes)) {
        throw new Error("Input is not a supported type. Please use verify the Input type.");
    } else if (
        (name === "" || name === undefined) ||
        (id === "" || id === undefined) ||
        (typeof required !== "boolean" || required === undefined)
    ) {
        throw new Error("Missing arguments in the constructor. Please verify the Input call.");
    }

    const $input = document.createElement("input");
    $input.setAttribute("type", supportedTypes[type].type);
    $input.setAttribute("name", name);
    $input.setAttribute("id", id);
    $input.className = supportedTypes[type].class;
    $input.required = required;
    
    // Setting a default value if available
    if (value !== undefined && value !== "") $input.value = value;

    return $input;
}