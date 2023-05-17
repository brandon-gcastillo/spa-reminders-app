export function FormControlWrapper($label, $input, classes) {
    if (
        ($label === null || $label === undefined) ||
        ($input === null || $input === undefined) ||
        (classes === "" || classes === null)
    ) throw new Error("Missing arguments in the constructor. Please verify the Form wrapper call.")

    const $d = document;
    const $wrapper = $d.createElement("div");

    $wrapper.className = classes;
    $wrapper.appendChild($label);
    $wrapper.appendChild($input);

    return $wrapper;
}