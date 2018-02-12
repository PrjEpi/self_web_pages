$(document).ready(function () {
    let contentNav = $(".content .nav");
    let s6 = $(".s6");
    let sectionWidth = 0;
    let activeSection = 0;
    let annimateSpeed = 700;
    let s6inited = false;
    $(".header .nav .item").on("click", function (e) {
        let item = $(this);
        let hash = item.attr("data-hash");
        window.location.hash = hash;
        $(".header .nav .item").removeClass("active")
        item.addClass("active");
    })
    // $(".s6 .wrapper").on("mouseenter", () => {
    //     if (activeSection == 7) {
    //     }
    // })
    // $(".s6 .wrapper").on("mouseleave", () => {
    //     if (activeSection == 7) {
    //         contentNav.animate({opacity: 1})
    //         $(".s6 .wrapper").animate({width: 900}, annimateSpeed)
    //     }
    // })
    $('.sections').fullpage({
        anchors: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        menu: "#sidenav",
        afterRender: function () {
            $('.body').show();
        },
        onLeave: function (index, nextIndex, direction) {
            activeSection = index;
            console.log(nextIndex)
            if (nextIndex == 1 || nextIndex == 8 || nextIndex == 7 || nextIndex == 9) {
                contentNav.animate({opacity: 0}, annimateSpeed / 2)
            } else {
                setTimeout(() => {
                    contentNav.animate({opacity: 1}, annimateSpeed / 2)
                }, annimateSpeed / 2)
            }
        },
        afterLoad: function (anchorLink, index) {
            activeSection = index;
            if (activeSection != 7) {
                // $(".s6 .wrapper").animate({width: 900}, 1)
            }
            if (sectionWidth == 0) {
                sectionWidth = $(".s" + anchorLink + " .fp-tableCell").width();
            }
            if (index == 7) {
                // $(".s6 .wrapper").animate({width: sectionWidth}, annimateSpeed)
                if (!s6inited) {
                    s6inited = true;
                    $(".s6 .item").each((i, item) => {
                        console.log(item)
                        setTimeout(() => {
                            $(item).animate({opacity: 1}, 500);
                        }, i * 100)
                    })
                }

            }
        },
        //Navigation
        // menu: '.menu',
        // lockAnchors: false,
        // anchors: ['firstPage', 'secondPage'],
        // navigation: false,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // showActiveTooltip: false,
        // slidesNavigation: false,
        // slidesNavPosition: 'bottom',
        //
        // //Scrolling
        css3: true,
        // scrollOverflow: true,
        scrollingSpeed: annimateSpeed,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 1000,
        // scrollBar: false,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // continuousHorizontal: false,
        // scrollHorizontally: false,
        // interlockedSlides: false,
        // dragAndMove: false,
        // offsetSections: false,
        // resetSliders: false,
        // fadingEffect: false,
        // normalScrollElements: '#element1, .element2',
        // scrollOverflow: false,
        // scrollOverflowReset: false,
        // scrollOverflowOptions: null,
        // touchSensitivity: 15,
        // normalScrollElementTouchThreshold: 5,
        // bigSectionsDestination: null,
        //
        // //Accessibility
        // keyboardScrolling: true,
        // animateAnchor: true,
        // recordHistory: true,
        //
        // //Design
        // controlArrows: true,
        // verticalCentered: true,
        // sectionsColor: ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        // fixedElements: '#header, .footer',
        // responsiveWidth: 0,
        // responsiveHeight: 0,
        // responsiveSlides: false,
        // parallax: false,
        // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        //
        // //Custom selectors
        // sectionSelector: '.section',
        // slideSelector: '.slide',
        //
        // lazyLoading: true,
        //
        // //events
        // onLeave: function (index, nextIndex, direction) {
        // },
        // afterLoad: function (anchorLink, index) {
        // },
        // afterRender: function () {
        // },
        // afterResize: function () {
        // },
        // afterResponsive: function (isResponsive) {
        // },
        // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        // },
        // onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        // }
    });
});