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
function calculateCost() {
    const cameraCount = parseInt(document.getElementById('cameraCount').value);
    const prices = {
        3: 21650,
        4: 24900,
        5: 30150,
        6: 36200,
        7: 40450,
        8: 43700,
        9: 54150,
        10: 58400,
        11: 62650,
        12: 70400,
        13: 73650,
        14: 77400,
        15: 80650,
        16: 84400,
    };

    // Additional validation to handle cases not in the prices object
    if (!prices[cameraCount]) {
        alert('Invalid selection. Please choose a valid number of cameras.');
        return;
    }

    const totalInstallationCost = prices[cameraCount];

    const costResult = document.getElementById('costResult');
    costResult.textContent = `Estimated Cost: Ksh. ${totalInstallationCost.toFixed(0)}`;
}function toggleVideo(videoId) {
    var video = document.getElementById(videoId);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}