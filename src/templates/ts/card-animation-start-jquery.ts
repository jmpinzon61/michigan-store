import $ from 'jquery';

export const setupCardHoverAnimation = () => {
    $(".card-body").hover(
        function () {
            $(this).find(".name-img").stop().animate({ bottom: "50px", opacity: 1 }, 500);
            $(this).find(".overlay").stop().css("display", "flex").animate({ height: "100%", opacity: 1 }, 500);
        },
        function () {
            $(this).find(".name-img").stop().animate({ bottom: "-80px", opacity: 0 }, 500);
            $(this).find(".overlay").stop().animate({ height: "0px", opacity: 0 }, 500, function () {
                $(this).css("display", "none");
            });
        }
    );
};