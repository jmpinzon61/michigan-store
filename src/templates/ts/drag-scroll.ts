export const initDragScroll = (containerId: string) => {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }

    let isDragging = false;
    let startX : number;
    let scrollLeft: number;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mousemove', (e) => {
        if(!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x -startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    })
}