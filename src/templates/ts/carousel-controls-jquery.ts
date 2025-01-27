import $ from 'jquery';

export const initializeCarouselControls = () => {
    $(document).ready(function () {
        $('.left.carousel-control, .right.carousel-control').hover(
            function () {
                $(this).css('transform', 'rotateY(360deg) scale(1.2)');
            },
            function () {
                $(this).css('transform', 'rotateY(0deg) scale(1)');
            }
        );
    });
};