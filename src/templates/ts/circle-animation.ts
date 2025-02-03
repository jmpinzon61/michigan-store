export const setupCircle = () => {
    const circle = document.getElementById('circle');

    if (circle) {
        const circleArray = circle.textContent?.split('') || [];
        circle.textContent = '';

        for (let i = 0; i < circleArray.length; i++) {
            circle.innerHTML += `<span class="animate__animated animate__heartBeat" style="transform:rotate(${(i + 4) * 10}deg);">${circleArray[i]}</span>`;
        }

        circle.innerHTML += `<i class="fa-solid fa-plus animate__animated animate__pulse" style="font-size: 45px; position: relative; border-radius: 50%; background-color: #110059; border: 7px solid #ffffff; color: #ffffff; padding: 27px; margin-left: 2px"></i>`;
    }
};