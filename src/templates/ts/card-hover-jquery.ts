import $ from 'jquery';

export const initializeCourseCardHover = ()=> {
    $(document).ready(function () {
        $('.course-card').hover(
            function () {
                $(this).find('.overlay').stop().css('display', 'flex').animate({ height: '100%', opacity: 1}, 500);
            },
            function () {
                $(this).find('.overlay').stop().animate({ height: '0', opacity: 0}, 500, function() {
                    $(this).css('display', 'none');
                });
            }
        );
    });
};