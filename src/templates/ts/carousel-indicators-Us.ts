export const initTestimonios = ():void => {
    interface Testimonio {
        titulo: string;
        descripcion: string;
        referencia: string;
    }

    const testimonios: Testimonio[] = [
        {
          titulo: "Titulo Testimonio 1",
          descripcion:
            "Uno de mis mayores deseos era asegurar que Samu, mi nieto de 8 años, recibiera una excelente educación. Con la ayuda de Upgrade, ahora puedo brindarle la oportunidad de construir una base sólida en inglés desde temprana edad, lo que le abrirá puertas a innumerables oportunidades en el futuro. Estudiar desde casa le permite a Samu aprender y, al mismo tiempo, interactuar con niños de diferentes culturas, lo que enriquece su experiencia mientras se divierte. Me complace decir que Upgrade logra captar la atención del niño a través de programas lúdicos, lo que facilita su compromiso y entusiasmo por aprender. ¡Lo recomiendo ampliamente!",
          referencia: "Dra. Jimena Franco | Barcelona - España | Doctora Jefe Biobus",
        },
        {
          titulo: "Titulo Testimonio 2",
          descripcion:
            "Uno de mis mayores deseos era asegurar que Samu, mi nieto de 8 años, recibiera una excelente educación. Con la ayuda de Upgrade, ahora puedo brindarle la oportunidad de construir una base sólida en inglés desde temprana edad, lo que le abrirá puertas a innumerables oportunidades en el futuro. Estudiar desde casa le permite a Samu aprender y, al mismo tiempo, interactuar con niños de diferentes culturas, lo que enriquece su experiencia mientras se divierte. Me complace decir que Upgrade logra captar la atención del niño a través de programas lúdicos, lo que facilita su compromiso y entusiasmo por aprender. ¡Lo recomiendo ampliamente!",
          referencia: "María González | Ciudad de México - México | Ingeniera de Software",
        },
        {
          titulo: "Titulo Testimonio 3",
          descripcion:
            "Uno de mis mayores deseos era asegurar que Samu, mi nieto de 8 años, recibiera una excelente educación. Con la ayuda de Upgrade, ahora puedo brindarle la oportunidad de construir una base sólida en inglés desde temprana edad, lo que le abrirá puertas a innumerables oportunidades en el futuro. Estudiar desde casa le permite a Samu aprender y, al mismo tiempo, interactuar con niños de diferentes culturas, lo que enriquece su experiencia mientras se divierte. Me complace decir que Upgrade logra captar la atención del niño a través de programas lúdicos, lo que facilita su compromiso y entusiasmo por aprender. ¡Lo recomiendo ampliamente!",
          referencia: "Carlos Ramírez | Buenos Aires - Argentina | Empresario",
        },
    ];

    const botones = document.querySelectorAll<HTMLButtonElement>(".carousel-indicators button");

    function updateTestimonio(index: number): void {
        const tituloElement = document.querySelector<HTMLElement>(".testimonio-titulo");
        const descripcionElement = document.querySelector<HTMLElement>(".testimonio-descripcion");
        const referenciaElement = document.querySelector<HTMLElement>(".testimonio-referencia .gradient-text");

        if(tituloElement) tituloElement.textContent = testimonios[index].titulo;
        if(descripcionElement) descripcionElement.textContent = testimonios[index].descripcion;
        if(referenciaElement) referenciaElement.textContent = testimonios[index].referencia;
    }

    botones.forEach((button, index) => {
        button.addEventListener("click", () => {
            updateTestimonio(index)
        });
    });    
};