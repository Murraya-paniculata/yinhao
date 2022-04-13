// debounce 
export function debounce(callback, time) {
    var timer;
    return function () {
        clearTimeout(timer);
        var arg = arguments;
        timer = setTimeout(function () {
            callback.apply(null, arg)
        }, time)
    }
}