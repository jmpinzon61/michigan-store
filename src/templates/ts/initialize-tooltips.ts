import { Tooltip } from 'bootstrap';

export function initializeTooltips(): void {
    const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new Tooltip(tooltipTriggerEl); 
    });
}
