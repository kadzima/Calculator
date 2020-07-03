
window.addEventListener('load', function OnWindowLoaded() {
    // Кнопки для калькулятора
    var signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'c'
    ];
 
    //  поле калькулятора
    var calc = document.getElementById('calc');
 
    // для математичних дій
    var textArea = document.getElementById('inputVal');
 
    // кнопки для калькулятора
    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
 
    // клікання на цифри
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // кнопка + дія при кліку
        button.addEventListener('click', onButtonClick);
    });
 
    // функція кнопочки
    function onButtonClick(e) {

        if (e.target.innerHTML === 'c') {
            // Якщо кнопка - С - стираємо
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            // Знак дорівнює при нажиманні
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            // Значення кнопки
            textArea.innerHTML = e.target.innerHTML;
        } else {
            // Позначення кнопки
            textArea.innerHTML += e.target.innerHTML;
        }
    }
});