document.addEventListener('DOMContentLoaded', () => {
    // Log to confirm the script is loaded
    console.log('Bus Reservation script loaded.');

    // Example: Add an event listener for the Booking button
    const bookingButton = document.querySelector('.btn');
    if (bookingButton) {
        bookingButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link action
            alert('Redirecting to the booking page!');
            window.location.href = bookingButton.getAttribute('href'); // Redirect to the booking page
        });
    }

    // Navigation Links Alert Example
    const navLinks = document.querySelectorAll('.navbar .menu ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            alert(`You clicked on: ${link.textContent}`);
        });
    });

    // Example of dynamic title update
    const pageTitle = document.querySelector('.content h1');
    if (pageTitle) {
        pageTitle.textContent += ' - Plan Your Journey Now!';
    }
});
