
export const setupButtonToggle = () => {
    const button = document.getElementById('toggleButton') as HTMLButtonElement;
    const iconPlane = button.querySelector('.fa-paper-plane') as HTMLElement;
    const iconCheck = button.querySelector('.fa-check') as HTMLElement;

    button.addEventListener('click', function () {
        // Cambiar estado
        const currentState = button.getAttribute('data-state');

        if (currentState === 'plane') {
            // Cambia a estado de verificación
            button.classList.remove('btn-email');
            button.classList.add('btn-cliked');
            iconPlane.classList.add('icon-clicked');
            iconCheck.classList.remove('icon-clicked');
            button.setAttribute('data-state', 'check');
        } else {
            // Volver al estado de envío
            button.classList.remove('btn-cliked');
            button.classList.add('btn-email');
            iconPlane.classList.remove('icon-clicked');
            iconCheck.classList.add('icon-clicked');
            button.setAttribute('data-state', 'plane');
        }
    });
};