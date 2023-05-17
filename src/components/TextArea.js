export function TextArea(props) {
    const {
        name,
        id,
        required,
        rows,
        cols,
        minlength,
        maxlength,
        value
    } = props;

    if (
        (name === "" || name === undefined) ||
        (id === "" || id === undefined) ||
        (typeof required !== "boolean" || required === undefined)
    ) throw new Error("Missing arguments in the constructor call. Please verify the TextArea call.");

    const $textArea = document.createElement("textarea");

    // Styling element
    $textArea.className = "form-control";

    // Giving properties to the element
    $textArea.setAttribute("name", name);
    $textArea.setAttribute("id", id);
    $textArea.required = required;

    if (rows !== undefined && rows !== "") $textArea.setAttribute("rows", rows);
    if (cols !== undefined && cols !== "") $textArea.setAttribute("cols", cols);
    if (minlength !== undefined && minlength !== "") $textArea.setAttribute("minlength", minlength);
    if (maxlength !== undefined && maxlength !== "") $textArea.setAttribute("maxlength", maxlength);
    if (value !== undefined && value !== "") $textArea.value = value;

    return $textArea;
}