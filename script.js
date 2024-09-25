// let prevDeltaY = null;

// document.body.addEventListener('wheel', (event) => {
//     event.preventDefault();

//     const deltaY = event.deltaY;
//     console.log(window.scrollX)

//     let direction = deltaY > 0 ? 1 : -1;
//     prevDeltaY = deltaY;

//     const scrollDistance = 75; 
//     window.scrollBy(direction * scrollDistance, 0); 

//     var xCoord = window.scrollX;
//     if (xCoord > 750) {
//         let linkButtons = document.getElementById("link-buttons");
//         linkButtons.style.position = "fixed"
//         linkButtons.style.left= '5px';
//     }

//     if (xCoord < 750) {
//         let linkButtons = document.getElementById("link-buttons");
//         linkButtons.style.position = "static"
//         linkButtons.style.left= "0";
//     }

//     let sections = document.querySelectorAll(".section-container")
//     sections.forEach(section => {
//         if (section.id != "home-section"){
//             let linkButtons = document.getElementById("link-buttons");
//             const sectionRect = section.getBoundingClientRect();
//             const linkButtonsRect = linkButtons.getBoundingClientRect();
            
//             // Calculate how close the section is to the link-buttons
//             let distanceFromLeftOfBar = linkButtonsRect.left - sectionRect.right;
    
//             // Modify the gradient based on how close the section is to the bar
//             let maxFadeDistance = 1050;  // Control the distance for fade
    
//             // Calculate the percentage to fade (close to the bar makes it more transparent)
//             let fadePercentage = Math.min(100, Math.max(0, ((distanceFromLeftOfBar + maxFadeDistance) / maxFadeDistance) * 100));
    
//             // Apply gradient based on proximity to the link-buttons
//             section.style.maskImage = `linear-gradient(to right, transparent ${fadePercentage}%, black 100%)`;
//             section.style.webkitMaskImage = `linear-gradient(to right, transparent ${fadePercentage}%, black 100%)`;  // For WebKit browsers
        
//         }
//     });
    
// });

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