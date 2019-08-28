function changeBarsToSucceeded(barType) {
    var bars = Array.from(document.getElementsByClassName('bar ' + barType + ' interactive'));
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.remove(barType);
        bars[i].classList.add('succeeded');
    }
}
(function main() {
   changeBarsToSucceeded('failed');
   changeBarsToSucceeded('partiallysucceeded');
})();
