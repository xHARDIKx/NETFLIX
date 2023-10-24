function validateForm() {
    var emailInput = document.querySelector('.email-input');
    var passwordInput = document.querySelector('.password-input');
    
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        window.location.href = 'file:///S:/NETFLIX/netflixin/index.html'; // Replace with the desired page URL
        return false; // Prevent the form from submitting
    } else {
        alert('Please fill in all fields.');
        return false; // Prevent the form from submitting
    }
}
