var failedBars = Array.from(document.getElementsByClassName("bar failed interactive"));
for (var i = 0; i < failedBars.length; i++) {
    failedBars[i].classList.remove('failed');
    failedBars[i].classList.add('succeeded');
}
var partiallySucceededBars = Array.from(document.getElementsByClassName("bar partiallysucceeded interactive"));
for (var i = 0; i < partiallySucceededBars.length; i++) {
    partiallySucceededBars[i].classList.remove('partiallysucceeded');
    partiallySucceededBars[i].classList.add('succeeded');
}
