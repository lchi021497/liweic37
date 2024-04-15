// create new scope
(function() {
    var timer;

    // bind event handler
    $('#post-submit').click(function() {
        if(timer) {
            clearTimeout(timer);
        }
        // do a date calculation
        // show user changes to screen
        // call the function
        timer = setTimeout(process, 1000);
    });
}());

(function() {
    var timer;

    // bind event handler
    $('#debounce_button').click(function() {
        if(timer) {
            clearTimeout(timer);
        }
        // do a date calculation
        // show user changes to screen
        // call the function
        timer = setTimeout(process, 1000);
    });
}());