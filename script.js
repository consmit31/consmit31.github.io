let prevDeltaY = null;

document.body.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY;

    let direction = deltaY > 0 ? 1 : -1;
    prevDeltaY = deltaY;

    const scrollDistance = 100; 
    window.scrollBy(direction * scrollDistance, 0); 
});

function scrollToHome() {
    document.getElementById("home-section").scrollIntoView({behavior : "smooth"})
}

function scrollToAbout() {
    document.getElementById("about-section").scrollIntoView({behavior : "smooth"})
}

function scrollToProjects() {
    document.getElementById("projects-section").scrollIntoView({behavior : "smooth"})
}

function scrollToContact() {
    document.getElementById("contact-section").scrollIntoView({behavior : "smooth"})
}