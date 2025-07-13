const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function showError(element, message, errorElement) {
    element.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(element, errorElement) {
    element.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function(event) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'O nome é obrigatório.', nameError);
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }
    
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'O e-mail é obrigatório.', emailError);
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Insira um e-mail válido.', emailError);
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }
    
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'A mensagem é obrigatória.', messageError);
        isValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert('Agradecemos o seu contato!');
        event.preventDefault();
        form.reset();
    }
});

nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
        clearError(nameInput, nameError);
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
        clearError(emailInput, emailError);
    }
});

messageInput.addEventListener('input', function() {
    if (messageInput.value.trim() !== '' && messageInput.value.trim().length >= 10) {
        clearError(messageInput, messageError);
    }
});