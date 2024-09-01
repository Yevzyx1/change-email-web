document.getElementById('changeEmailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const currentEmail = document.getElementById('currentEmail').value;
    const newEmail = document.getElementById('newEmail').value;

    if (validateEmail(currentEmail) && validateEmail(newEmail)) {
        document.getElementById('responseMessage').textContent = "Email successfully changed!";
    } else {
        document.getElementById('responseMessage').textContent = "Invalid email format.";
        document.getElementById('responseMessage').style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
