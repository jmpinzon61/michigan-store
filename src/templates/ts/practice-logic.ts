export class PracticeManager {
    private currentPracticeIndex: number = 0;
    private practiceAreas: NodeListOf<Element>;
    private nextButton: HTMLElement | null;

    constructor() {
        this.practiceAreas = document.querySelectorAll('.practice-area');
        this.nextButton = document.querySelector('.next');
        this.initialize();
    }

    private initialize() {
        this.practiceAreas.forEach((area, index) => {
            if (index !== this.currentPracticeIndex) area.setAttribute('style', 'display: none;');
        });
        this.updateNextButton();
    }

    private closePracticeArea(index: number) {
        const practiceArea = document.getElementById(`practice-area-${index}`);
        if (practiceArea) {
            practiceArea.style.display = 'none';
        }
    }

    // public closeCurrentPracticeArea() {
    //     this.closePracticeArea(this.currentPracticeIndex + 1); 
    // }

    private showPracticeArea(index: number) {
        const practiceArea = document.getElementById(`practice-area-${index}`);
        if (practiceArea) {
            practiceArea.style.display = 'block';
        }
    }

    private updateNextButton() {
        if (this.currentPracticeIndex === this.practiceAreas.length - 1) {
            if (this.nextButton) {
                this.nextButton.textContent = 'Finalizar';
                this.nextButton.style.backgroundColor = '#6ae4cb';
                this.nextButton.style.color = '#ffffff';
                this.nextButton.onclick = () => alert('Práctica completada');
            }
        } else {
            if (this.nextButton) {
                this.nextButton.textContent = 'Siguiente';
                this.nextButton.style.backgroundColor = '';
                this.nextButton.style.color = '';
                this.nextButton.onclick = () => this.showNextPracticeArea();
            }
        }
    }

    public showNextPracticeArea() {
        if (this.currentPracticeIndex < this.practiceAreas.length - 1) {
            this.closePracticeArea(this.currentPracticeIndex + 1);
            this.currentPracticeIndex++;
            this.showPracticeArea(this.currentPracticeIndex + 1);
            this.updateNextButton();
        }
    }

    public showPreviousPracticeArea() {
        if (this.currentPracticeIndex > 0) {
            this.closePracticeArea(this.currentPracticeIndex + 1);
            this.currentPracticeIndex--;
            this.showPracticeArea(this.currentPracticeIndex + 1);
            this.updateNextButton();
        }
    }

    public closePracticeAreaByIndex(index: number) {
        this.closePracticeArea(index);
    }
}