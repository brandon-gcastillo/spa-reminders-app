export function Label(props) {
    let { forInput, labelTitle, required } = props;

    if (
        (forInput === "" || forInput === undefined) ||
        (labelTitle === "" || labelTitle === undefined) ||
        (typeof required !== "boolean" || required === undefined)
    ) throw new Error("Missing arguments in the constructor. Please verify the Label call.");

    const $d = document;
    const $label = $d.createElement("label");
    const $labelWrapper = $d.createElement("strong");

    $label.className = "form-label";
    $labelWrapper.textContent = labelTitle;

    if (required) {
        const $spanStar = $d.createElement("span");
        $spanStar.textContent = " *";
        $spanStar.className = "text-danger";
        $labelWrapper.appendChild($spanStar);
    }

    $label.setAttribute("for", forInput);
    $label.appendChild($labelWrapper);

    return $label;
}