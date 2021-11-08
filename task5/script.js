let a = document.querySelector('.myform');
let b = document.querySelector('form button');
let c = document.querySelector('.duplicateField');
b.addEventListener('click', function(event){
  event.preventDefault()
});
b.onclick = function(){
	console.log(a.value);
    a.value = '';
    c.innerText = '';
}
a.addEventListener("keyup", function() {
    c.textContent = a.value;
})
