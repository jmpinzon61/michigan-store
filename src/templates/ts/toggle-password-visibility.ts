export function togglePasswordVisibility():void {
    const passwordInput = document.getElementById("passsword") as HTMLInputElement | null;
    const eyeIcon = document.getElementById("eye-icon") as HTMLElement| null;

    if (!passwordInput || !eyeIcon) return;

    if (passwordInput.type === "text") {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
    } else {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}