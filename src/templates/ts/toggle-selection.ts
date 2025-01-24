export function toggleSelection(element: HTMLElement): void {
    const isSelected = element.classList.contains("selected");

    if (isSelected) {
        element.classList.remove("selected");
        const img = element.querySelector<HTMLImageElement>(".toggle-image");
        if (img) {
            img.src = "/images/ring.png";
        }
    } else {
        element.classList.add("selected");
        const img = element.querySelector<HTMLImageElement>(".toggle-image");
        if (img) {
            img.src = "/images/check.png";
        }
    }
}
