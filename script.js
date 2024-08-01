document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    //Add authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Sign-in successful!');
});
