export const initEnlaceHandler = () => {
    document.querySelectorAll<HTMLAnchorElement>(".enlace").forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
          event.preventDefault();
          
          document.querySelectorAll(".enlace").forEach((e) => e.classList.remove("activo"));
          enlace.classList.add("activo");

          setTimeout(() => {
            window.location.href = enlace.href
          }, 999);
        });
    });
};