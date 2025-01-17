import $ from "jquery";


export const initReadMore = () => {
    $(document).ready(function () {
        $("a[id^='read-more']").click(function (e) {
            e.preventDefault();

            const id = $(this).attr("id")?.split("-")[2];
            if (!id) return;

            const description = $(`#description-${id}`);

            if (description.hasClass("expanded")) {
                description.removeClass("expanded");
                $(this).text("Seguir leyendo");
            } else {
                description.addClass("expanded");
                $(this).text("Leer menos");

            }
        });
    });
}