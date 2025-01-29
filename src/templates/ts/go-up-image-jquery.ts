import $ from 'jquery';

export const setupImageClickAnimation = () => {
    $('.card-home img').off('click').on('click', function  () {
        $(this).animate(
            {
                marginTop: '-=95px',
                opacity: 1,
            },
            400,
            'linear',
            function () {
                $(this).animate({ marginTop: '+=95px'}, 400)
            }
        )
    });
};