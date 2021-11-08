function intext(){
    let promt = prompt('Введите новый текст ссылки');
    let txt = document.getElementById('text');
    txt.textContent = promt;
}

let txt = document.getElementById('text2');
txt.addEventListener('click', function(event){
  event.preventDefault();
  let promptElement = prompt('Введите новый текст ссылки');
  txt.textContent = promptElement;
});