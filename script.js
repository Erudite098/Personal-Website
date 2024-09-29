function validateForm() {
    let form = document.querySelector('form');
    let inputs = form.querySelectorAll('input, textarea');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill out all fields before submitting the form.');
            return false;
        }
    }
    alert('Thank you for your message!');
    return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
