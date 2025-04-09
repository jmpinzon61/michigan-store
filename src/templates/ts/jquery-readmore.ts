import $ from "jquery";

export const initReadMore = () => {
    $(document).off("click", "a[id^='read-more']");

    $(document).on("click", "a[id^='read-more']", function (e) {
        e.preventDefault();

        const id = $(this).attr("id")?.split("-")[2];
        if (!id) return;

        const description = $(`#description-${id}`);

        if (description.hasClass("expanded")) {
            description.removeClass("expanded")
            $(this).html("Seguir leyendo");
        } else {
            description.addClass("expanded");
            $(this).html("Leer menos");
        }

        });
    };
