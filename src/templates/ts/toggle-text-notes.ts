export const toggleText = (contentId: string, buttonId: string) => {
    const textContent = document.getElementById(contentId);
    const toggleButton = document.getElementById(buttonId);

    if(!textContent || !toggleButton){
        console.error("Elementos no encontrados");
        return;
    }

    if (textContent.style.height === '72px') {
        textContent.style.height = 'auto';
        toggleButton.textContent = 'Ver menos';
    } else {
        textContent.style.height = '72px';
        toggleButton.textContent = 'Ver todo';
    }
};