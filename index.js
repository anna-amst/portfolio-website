function toggleContentVisibility() {
    // Get the viewport width
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if viewport width is less than or equal to 390px
    if (viewportWidth <= 387) {
        // Add a CSS class to the body or a specific container
        document.body.classList.add('hide-content');
    } else {
        // Remove the CSS class if viewport width is greater than 390px
        document.body.classList.remove('hide-content');
    }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', toggleContentVisibility);

// Call the function when the window is resized
window.addEventListener('resize', toggleContentVisibility);

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright text
const copyrightElement = document.querySelector('.copyright');
copyrightElement.textContent = `Copyright ${currentYear} - Anna Vasileva`;
