document.addEventListener("DOMContentLoaded", function () {
    // Selectors
    const fadeElements = document.querySelectorAll(".fade-in");
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".sidebar-toggle-btn");
    const closeBtn = document.querySelector(".close-btn");
    const scrollToTopBtn = document.createElement("button");

    // === Smooth Fade-in on Scroll ===
    function handleScroll() {
        fadeElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.85) {
                element.style.transitionDelay = `${index * 0.15}s`; // Stagger effect
                element.classList.add("visible");
            }
        });

        // Show or hide Scroll-to-Top Button
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    }

    // === Sidebar Toggle ===
    toggleBtn?.addEventListener("click", function () {
        sidebar?.classList.toggle("active");
    });

    closeBtn?.addEventListener("click", function () {
        sidebar?.classList.remove("active");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (sidebar && toggleBtn && !sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Close sidebar on Escape key press
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && sidebar) {
            sidebar.classList.remove("active");
        }
    });

    // === Scroll-to-Top Button ===
    scrollToTopBtn.innerHTML = "⬆";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // === Dark Mode Toggle (Optional) ===
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerHTML = "🌙";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Event Listeners
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load

    // === Typewriter Effect ===
    function typeWriterEffect(element, text, speed = 100) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        element.innerHTML = "";
        type();
    }

    const typingText = document.getElementById("typing-text");
    if (typingText) {
        typeWriterEffect(typingText, "Upgrade Your Skills. Elevate Your Career.");
    }
});
