let text = document.querySelector('h1');
input = document.querySelector('#input');
input.addEventListener('input', function() {
    text.style.color = input.value;
    text.style.fontSize = input.value;
    text.style.opacity = input.value;

});