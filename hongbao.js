
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const namePlaceholder = document.getElementById('namePlaceholder');
    if (name) {
        namePlaceholder.textContent = name;
    }
    });