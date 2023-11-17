// signup.js
$(document).ready(function () {
    $('#signupForm').submit(function (event) {
        event.preventDefault();

        // Retrieve form data
        var username = $('#username').val();
        var email = $('#email').val();
        var id = $('#id').val();
        var phone = $('#phone').val();
        var password = $('#password').val();

        // Add logic to send signup data to the server or perform client-side validation
        // For now, we'll just display the data
        alert('Signup Successful!\n\nUsername: ' + username + '\nEmail: ' + email + '\nID: ' + id + '\nPhone: ' + phone);
    });
});
