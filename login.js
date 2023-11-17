// login.js
$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        // Retrieve form data
        var username = $('#username').val();
        var password = $('#password').val();

        // Add logic to send login data to the server or perform client-side validation
        // For now, we'll just display the data
        alert('Login Successful!\n\nUsername: ' + username);
    });
});
