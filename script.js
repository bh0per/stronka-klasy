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

// Obsługa kliknięć na ikony w new-content-3
const toggleContentButtons = document.querySelectorAll(".toggle-content");

toggleContentButtons.forEach(button => {
    button.addEventListener("click", () => {
        newContents.forEach(content => content.style.display = "none");
        document.getElementById(button.dataset.target).style.display = "block";
    });
});

// Chatbot
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

document.addEventListener("DOMContentLoaded", () => {
    const contentItems = document.querySelectorAll(".content-item");

    contentItems.forEach(item => {
        item.addEventListener("click", () => {
            const topic = item.innerText.replace(/\s+/g, "-").toLowerCase();
            const newPage = `${topic}.html`;

            window.location.href = newPage;
        });
    });
});
