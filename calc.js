document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('calc').addEventListener('click', function () {
        let first = Number(document.getElementById('first').value);
        let second = Number(document.getElementById('second').value);
        let symbols = document.getElementsByName('operation');

        let history = document.createElement('p');
        let result = 0;

        for (let i = 0, length = symbols.length; i < length; i++) {
            if (symbols[i].checked) {
                switch (symbols[i].value) {
                    case 'multiply':
                        result = first * second;
                        document.getElementById('result').value = result;
                        history.innerHTML = 'calculation: ' + first + ' * ' + second + ' = ' + result;
                        document.getElementById('history').appendChild(history);
                        break;
                    case 'divide':
                        result = first / second;
                        document.getElementById('result').value = result;
                        history.innerHTML = 'calculation: ' + first + ' / ' + second + ' = ' + result;
                        document.getElementById('history').appendChild(history);
                        break;
                    case 'add':
                        result = first + second;
                        document.getElementById('result').value = result;
                        history.innerHTML = 'calculation: ' + first + ' + ' + second + ' = ' + result;
                        document.getElementById('history').appendChild(history);
                        break;
                    case 'subtract':
                        result = first - second;
                        document.getElementById('result').value = result;
                        history.innerHTML = 'calculation: ' + first + ' - ' + second + ' = ' + result;
                        document.getElementById('history').appendChild(history);
                        break;
                    default:
                        break;
                }
            }
        }
    });
});