export function closeMenu(): void {
    const menuElement = document.querySelector('.menu-user');
    if (menuElement) {
        menuElement.classList.add('hidden');
    }
}
