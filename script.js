const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const toggleTextButtons = document.querySelectorAll(".toggle-text");
const resetContentButton = document.getElementById("reset-content");
const newContents = document.querySelectorAll(".new-content");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "https://cdn-icons-png.flaticon.com/512/1823/1823397.png"; 
    } else {
        themeIcon.src = "https://cdn-icons-png.flaticon.com/512/10484/10484158.png"; 
    }
});

toggleTextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        newContents.forEach(content => content.style.display = "none");
        newContents[index].style.display = "block";
    });
});

resetContentButton.addEventListener("click", () => {
    newContents.forEach(content => content.style.display = "none");
});

(function() {
    window.chtlConfig = { chatbotId: "5548387222" };

    var script = document.createElement("script");
    script.async = true;
    script.dataset.id = "5548387222";
    script.id = "chatling-embed-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";

    document.head.appendChild(script);
})();
