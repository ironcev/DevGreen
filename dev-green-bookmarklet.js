(function changeAllBarsToSucceeded() {
    var unsuccessfulBarTypes = ['failed', 'partiallysucceeded', 'canceled'];
    
    unsuccessfulBarTypes.forEach(function (barType) {
        var bars = Array.from(document.getElementsByClassName('bar ' + barType + ' interactive'));
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.remove(barType);
            bars[i].classList.add('succeeded');
        }
    });
})();

(function changeAllStatusIconsToSuccess() {
    var unsuccessfulStatusIconsTypes = ['error', 'failure'];
    
    unsuccessfulStatusIconsTypes.forEach(function (iconType) {
        var icons = Array.from(document.getElementsByClassName('bowtie-icon bowtie-status-' + iconType));
        for (var i = 0; i < icons.length; i++) {
            icons[i].classList.remove('bowtie-status-' + iconType);
            icons[i].classList.add('bowtie-status-success');
        }
    });
})();

(function changeAllStatusIconsToGreen() {
    var icons = Array.from(document.getElementsByClassName('bowtie-icon bowtie-status-success bowtie-warning-color'));
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.remove('bowtie-warning-color');
    }
})();
