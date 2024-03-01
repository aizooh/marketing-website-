document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentPage = window.location.href;

    // Check if the current page URL matches the navigation links and apply an 'active' class
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
            // If it's a dropdown, also highlight the dropdown parent
            const dropdownParent = link.closest(".dropdown");
            if (dropdownParent) {
                dropdownParent.classList.add("active");
            }
        }
    });
});
