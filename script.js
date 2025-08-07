document.addEventListener('DOMContentLoaded', function() {
    const textToType = "Hola, soy Miguel Ángel Murillo Frías";
    const typingElement = document.querySelector('.typing');
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});
