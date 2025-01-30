document.addEventListener("DOMContentLoaded", () => {
    // Animations for features
    const features = document.querySelectorAll(".feature");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = "scale(1)";
                    entry.target.style.opacity = "1";
                }
            });
        },
        { threshold: 0.2 }
    );

    features.forEach((feature) => {
        feature.style.transform = "scale(0.9)";
        feature.style.opacity = "0";
        observer.observe(feature);
    });

    // Smooth scroll for links (if applicable)
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
