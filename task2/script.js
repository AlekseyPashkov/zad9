const consoleLog = document.querySelector('#consoleLog');
const alertElement = document.querySelector('#alert');
const promptElement = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

alertElement.addEventListener('click', () => {
    alert('Служит для показа сообщения во всплывающем окне. Закрывается нажатием кнопки «ОК»');
});

promptElement.addEventListener('click', () => {
    alert('Служит для показа окна с текстом, полем для ввода и кнопками «OK»/«Отмена»');
});