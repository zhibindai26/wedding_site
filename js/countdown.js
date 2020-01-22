CountDownTimer('06/14/2020 05:00:00 PM', 'countdown');

function CountDownTimer(date, id) {
    var end = new Date(date);
    var _day = 1000 * 60 * 60 * 24;
    var timer;
    var dtg = " Days to Go!"

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = "0" + dtg;
            return;
        }
        var days = Math.floor(distance / _day);
        document.getElementById(id).innerHTML = days + dtg;
    }

    timer = setInterval(showRemaining, 300);
}
