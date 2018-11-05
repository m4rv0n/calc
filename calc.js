document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('calc').addEventListener('click', function () {
        let first = Number(document.getElementById('first').value);
        let second = Number(document.getElementById('second').value);
        let symbol = document.getElementById('symbol').value;
        let result = 0;
        let history_element = document.createElement('p');

        switch (symbol) {
            case 'multiplication':
                result = first * second;
                document.getElementById('result').value = result;
                history_element.innerHTML = 'Rechnung: ' + first + ' * ' + second + ' = ' + result;
                document.getElementById('history').appendChild(history_element);
                break;
            case 'division':
                result = first / second;
                document.getElementById('result').value = result;
                history_element.innerHTML = 'Rechnung: ' + first + ' / ' + second + ' = ' + result;
                document.getElementById('history').appendChild(history_element);
                break;
            case 'addition':
                result = first + second;
                document.getElementById('result').value = result;
                history_element.innerHTML = 'Rechnung: ' + first + ' + ' + second + ' = ' + result;
                document.getElementById('history').appendChild(history_element);
                break;
            case 'subtraction':
                result = first - second;
                document.getElementById('result').value = result;
                history_element.innerHTML = 'Rechnung: ' + first + ' - ' + second + ' = ' + result;
                document.getElementById('history').appendChild(history_element);
                break;
            default:
                break;
        }
    });
});