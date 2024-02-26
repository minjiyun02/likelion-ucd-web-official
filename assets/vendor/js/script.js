window.onload = function() {
    var sloganImage = document.getElementById("slogan");
    sloganImage.classList.add("zoom-in");
};




document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var elementsToShow = document.querySelectorAll('.fade-in:not(.show)');
        elementsToShow.forEach(function(element) {
            if (isVisible(element)) {
                element.classList.add('show');
            }
        });
    });
});

function isVisible(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}