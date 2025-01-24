
export const initializeScrollContainers = () => {
    const scrollContainers = document.querySelectorAll('.scroll-container');

    scrollContainers.forEach((scrollContainer) => {
        let isDragging = false;
        let startX: number;
        let scrollStart: number;

        const onPointerDown = (e: PointerEvent) => {
            isDragging = true;
            (scrollContainer as HTMLElement).setPointerCapture(e.pointerId);
            startX = e.clientX;
            scrollStart = (scrollContainer as HTMLElement).scrollLeft;
            (scrollContainer as HTMLElement).style.cursor = 'grabbing';
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            (scrollContainer as HTMLElement).scrollLeft = scrollStart - dx;
        };

        const onPointerUp = () => {
            isDragging = false;
            (scrollContainer as HTMLElement).style.cursor = 'grab'; 
        };

        const onPointerCancel = () => {
            isDragging = false;
            (scrollContainer as HTMLElement).style.cursor = 'grab';
        };

        scrollContainer.addEventListener('pointerdown', onPointerDown as EventListener);
        scrollContainer.addEventListener('pointermove', onPointerMove as EventListener);
        scrollContainer.addEventListener('pointerup', onPointerUp as EventListener);
        scrollContainer.addEventListener('pointercancel', onPointerCancel as EventListener);
    });
};