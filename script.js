// This script handles the mobile menu toggle functionality.

document.addEventListener('DOMContentLoaded', function() {
    // Find the mobile menu button and the menu itself
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist to avoid errors
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu to s