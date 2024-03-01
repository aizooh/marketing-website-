document.addEventListener("DOMContentLoaded", function () {
  
    const currentPage = window.location.href;

    
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
          
            const dropdownParent = link.closest(".dropdown");
            if (dropdownParent) {
                dropdownParent.classList.add("active");
            }
        }
    });
});
function goToContacts() {
    
    window.location.href = 'contacts.html';
}