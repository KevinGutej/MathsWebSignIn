document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername === '' || newPassword === '') {
        alert('Please fill in both fields.');
        return;
    }
    
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Sign-up successful! You can now sign in.');
    window.location.href = 'login.html';
});
