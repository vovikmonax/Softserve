
function send() {

    var possible1 = "\"\'\\tbnr";
    var inputString = possible1.charAt(Math.floor(Math.random() * possible1.length)); // получаем объект "in" в inputs
    var outString = document.getElementById('outString'); // получаем объект "out" в outputs
    outString.innerHTML = inputString.toString(); // присваиваем значение inputs значению outputs, у нас это div,
    
    var possible = "0123456789";
    var inputNumber = possible.charAt(Math.floor(Math.random() * possible.length));
    var outNumber = document.getElementById('outNumber');
    outNumber.innerHTML = inputNumber.toString();

    var inputZero = inputNumber / 0;
    var outZero = document.getElementById('outZero');
    outZero.innerHTML = inputZero.toString();

    var outConcat = document.getElementById('outConcat');    
    outConcat.innerHTML = inputNumber.toString().concat(inputZero.toString());
}
