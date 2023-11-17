// dashboard.js
$(document).ready(function () {
    // Retrieve signup data from localStorage
    var signupData = JSON.parse(localStorage.getItem('signupData'));

    // Check if signupData is not null or undefined
    if (signupData) {
        // Retrieve user data from localStorage or initialize an empty array
        var userData = JSON.parse(localStorage.getItem('userData')) || [];

        // Store user data
        var newUser = {
            username: signupData.username,
            email: signupData.email,
            phone: signupData.phone,
            id: signupData.id,
            creationDate: getCurrentDate()
        };

        // Push the new user data to the array
        userData.push(newUser);

        // Save the updated user data to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Clear the signupData from localStorage
        localStorage.removeItem('signupData');
    }

    // ... (rest of the code remains unchanged)
});
