// account-creation.js
$(document).ready(function () {
    // Handle signup action button click
    $('#signupAction').click(function () {
        // Retrieve form data
        var username = $('#username').val();
        var email = $('#email').val();
        var id = $('#id').val();
        var phone = $('#phone').val();
        var password = $('#password').val();

        // Create an object with the signup data
        var signupData = {
            username: username,
            email: email,
            id: id,
            phone: phone,
            password: password
        };

        // Store signup data in localStorage
        localStorage.setItem('signupData', JSON.stringify(signupData));

        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    });

    // ... (rest of the code remains unchanged)
});
