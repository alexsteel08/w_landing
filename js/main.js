jQuery(document).ready(function($){
    $('.testimonials_list_block').slick({
        // lazyLoad: 'ondemand',
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
        touchThreshold: 10,
        centerMode: true,
        centerPadding: '330px',
        speed: 500,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '490px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '390px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
jQuery(document).ready(function($){
    if ($(window).width() < 960) {
        $('.steps_list').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            arrows: true,
            touchThreshold: 10,
            // verticalSwiping: true,
            speed: 500,
            dots:true,
            // autoplay: true,
            // autoplaySpeed: 2000,
        });
    }
});

jQuery(document).ready(function($){
    // $('.vertical_slider_list').slick({
    //     // lazyLoad: 'ondemand',
    //     slidesToShow:2,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     touchThreshold: 10,
    //     vertical: true,
    //     verticalSwiping: true,
    //     speed: 500,
    //     dots:false,
    //     infinite: false,
    // });
    //
    // const slider = $(".vertical_slider_list");
    //
    // slider.on('wheel', (function(e) {
    //     e.preventDefault();
    //
    //     if (e.originalEvent.deltaY < 0) {
    //         $(this).slick('slickNext');
    //     } else {
    //         $(this).slick('slickPrev');
    //     }
    // }));
    // const slider = $('.vertical_slider_list');
    //
    // function onSliderAfterChange(event, slick, currentSlide) {
    //     $(event.target).data('current-slide', currentSlide);
    // }
    //
    // function onSliderWheel(e) {
    //     var deltaY = e.originalEvent.deltaY,
    //         $currentSlider = $(e.currentTarget),
    //         currentSlickIndex = $currentSlider.data('current-slide') || 0;
    //
    //     if (
    //         // check when you scroll up
    //         (deltaY < 0 && currentSlickIndex == 0) ||
    //         // check when you scroll down
    //         (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
    //     ) {
    //         return;
    //     }
    //
    //     e.preventDefault();
    //
    //     if (e.originalEvent.deltaY < 0) {
    //         $currentSlider.slick('slickPrev');
    //     } else {
    //         $currentSlider.slick('slickNext');
    //     }
    // }
    //
    // slider.each(function(index, element) {
    //     var $element = $(element);
    //     // set the length of children in each loop
    //     // but the better way for performance is to set this data attribute on the div.slider in the markup
    //     $element.data('slider-length', $element.children().length);
    // })
    //     .slick({
    //         infinite: false,
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         vertical: true,
    //         verticalSwiping: true,
    //         dots: false,
    //         arrows: false
    //     })
    //     .on('afterChange', onSliderAfterChange)
    //     .on('wheel', onSliderWheel);

// debounce from underscore.js
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

// use x and y mousewheel event data to navigate flickity
    function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
        // do not trigger a slide change if another is being animated
        if (!slick_is_animating) {
            // pick the larger of the two delta magnitudes (x or y) to determine nav direction
            var direction =
                Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

            console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

            if (direction > 0) {
                // next slide
                slick_instance.slick("slickNext");
            } else {
                // prev slide
                slick_instance.slick("slickPrev");
            }
        }
    }

// debounce the wheel event handling since trackpads can have a lot of inertia
    var slick_handle_wheel_event_debounced = debounce(
        slick_handle_wheel_event
        , 100, true
    );

// init slider
    const slick_2 = $(".vertical_slider_list");
    slick_2.slick({
        dots: true,
        slidesToShow:2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        arrows: false
    });
    var slick_2_is_animating = false;

    slick_2.on("afterChange", function(index) {
        console.log("Slide after change " + index);
        slick_2_is_animating = false;
    });

    slick_2.on("beforeChange", function(index) {
        console.log("Slide before change " + index);
        slick_2_is_animating = true;
    });

    slick_2.on("wheel", function(e) {
        slick_handle_wheel_event_debounced(e.originalEvent, slick_2, slick_2_is_animating);
    });


});

jQuery(document).ready(function($){


    $('.statistics_slider_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        asNavFor: '.statistics_slider_back_slider'
    });
    $('.statistics_slider_back_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        asNavFor: '.statistics_slider_list',
    });
    $('.statistics_slider_nav')
        .on('init', function(event, slick) {
            $('.statistics_slider_nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });


    $('.statistics_slider_list').on('afterChange', function(event, slick, currentSlide) {
        $('.statistics_slider_nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.statistics_slider_nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.statistics_slider_nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.statistics_slider_nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.statistics_slider_list').slick('slickGoTo', goToSingleSlide);
    });

});







//video end


// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"

"use strict";

(function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
        let number = 0;
        for (let index = 0; index < daElements.length; index++) {
            const daElement = daElements[index];
            const daMove = daElement.getAttribute('data-da');
            if (daMove != '') {
                const daArray = daMove.split(',');
                const daPlace = daArray[1] ? daArray[1].trim() : 'last';
                const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
                const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
                const daDestination = document.querySelector('.' + daArray[0].trim())
                if (daArray.length > 0 && daDestination) {
                    daElement.setAttribute('data-da-index', number);
                    //Заполняем массив первоначальных позиций
                    originalPositions[number] = {
                        "parent": daElement.parentNode,
                        "index": indexInParent(daElement)
                    };
                    //Заполняем массив элементов
                    daElementsArray[number] = {
                        "element": daElement,
                        "destination": document.querySelector('.' + daArray[0].trim()),
                        "place": daPlace,
                        "breakpoint": daBreakpoint,
                        "type": daType
                    }
                    number++;
                }
            }
        }
        dynamicAdaptSort(daElementsArray);

        //Создаем события в точке брейкпоинта
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daBreakpoint = el.breakpoint;
            const daType = el.type;

            daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
            daMatchMedia[index].addListener(dynamicAdapt);
        }
    }
    //Основная функция
    function dynamicAdapt(e) {
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daElement = el.element;
            const daDestination = el.destination;
            const daPlace = el.place;
            const daBreakpoint = el.breakpoint;
            const daClassname = "_dynamic_adapt_" + daBreakpoint;

            if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                    let actualIndex = indexOfElements(daDestination)[daPlace];
                    if (daPlace === 'first') {
                        actualIndex = indexOfElements(daDestination)[0];
                    } else if (daPlace === 'last') {
                        actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                    }
                    daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                    daElement.classList.add(daClassname);
                }
            } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                    dynamicAdaptBack(daElement);
                    daElement.classList.remove(daClassname);
                }
            }
        }
        customAdapt();
    }

    //Вызов основной функции
    dynamicAdapt();

    //Функция возврата на место
    function dynamicAdaptBack(el) {
        const daIndex = el.getAttribute('data-da-index');
        const originalPlace = originalPositions[daIndex];
        const parentPlace = originalPlace['parent'];
        const indexPlace = originalPlace['index'];
        const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
        parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя
    function indexOfElements(parent, back) {
        const children = parent.children;
        const childrenArray = [];
        for (let i = 0; i < children.length; i++) {
            const childrenElement = children[i];
            if (back) {
                childrenArray.push(i);
            } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                    childrenArray.push(i);
                }
            }
        }
        return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) { return 1 } else { return -1 }
        });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
        //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
}());
