export function toggleVideo(): void {
    const video = document.getElementById('myVideo') as HTMLVideoElement | null;
    const playButton = document.querySelector('.play-button') as HTMLElement | null;
    const placeholder = document.querySelector('.video-placeholder') as HTMLElement | null;

    if (!video || !playButton || !placeholder) {
        console.error('No se encontraron los elementos necesarios');
        return;
    }

    video.removeAttribute('controls'); // Quita los controles nativos

    if (video.paused) {
        video.classList.add('show');
        video.setAttribute('controls', 'true');
        video.play();
        placeholder.style.display = 'none';
        playButton.style.display = 'none';
    } else {
        video.pause();
        video.classList.remove('show');
        video.removeAttribute('controls'); 
        placeholder.style.display = 'flex';
        playButton.style.display = 'block';
    }
}
