$(document).ready(function() {
    // Declare DOM variables
    const logo = $(".navbar-brand");
    const home = $("#home-page");
    const homeLink = $("#home-link");
    const about = $("#about-page");
    const aboutLink = $("#about-link");
    const viewBtn = $("#view");
    const portfolio = $("#portfolio-page");
    const portfolioLink = $("#portfolio-link");
    const resume = $("#resume-page");
    const resumeLink = $("#resume-link");
    const contact = $("#contact-page");
    const contactLink = $("#contact-link");
    const bulletedDiv = $("#bulleted-div");
    const bulletedTab = $("#bulleted-tab");
    const storyDiv = $("#story-div");
    const storyTab = $("#story-tab");

    // Switch from page to page from sidebar
    const changeDisplay = (event) => {
        const links = ["logo", "side-home", "side-about", "view", "side-portfolio", "side-resume", "side-contact"];

        home.hide();
        about.hide();
        portfolio.hide();
        resume.hide();
        contact.hide();

        links.forEach(link => {
            if (event.target.id === link) {
                if (link === "logo" || link === "side-home") {
                    home.show();
                } else if (link === "side-about") {
                    about.show();
                } else if (link === "view" || link === "side-portfolio") {
                    portfolio.show();
                } else if (link === "side-resume") {
                    resume.show();
                } else if (link === "side-contact") {
                    contact.show();
                };
            }
        });
    };

    // Change between bulleted version and story version in About section
    const switchTab = (event) => {
        if (event.target.id === "bulleted-tab") {
            bulletedTab.addClass("active");
            storyTab.removeClass("active");
            bulletedDiv.show();
            storyDiv.hide();
        };

        if (event.target.id === "story-tab") {
            storyTab.addClass("active");
            bulletedTab.removeClass("active");
            bulletedDiv.hide();
            storyDiv.show();
        };
    }


    // Event listeners
    logo.on("click", changeDisplay);
    homeLink.on("click", changeDisplay);
    aboutLink.on("click", changeDisplay);
    viewBtn.on("click", changeDisplay);
    portfolioLink.on("click", changeDisplay);
    resumeLink.on("click", changeDisplay);
    contactLink.on("click", changeDisplay);

    bulletedTab.on("click", switchTab);
    storyTab.on("click", switchTab);
});