$(".js-range-slider").ionRangeSlider({
    skin: "round",
    min: 2,
    max: 12,
    from: 4,
    grid: true,
    step: 2,
    grid_num: 5,
    KeyboardEvent: true,
    from_shadow: false,
    // prettify_enabled: true,
    // grid_snap: false,
    // postfix: "Hrs",
    // disable: true,
    // drag_interval: true,
    onChange: function (data) {
        console.log(data);
    },
    hide_min_max: true,
});