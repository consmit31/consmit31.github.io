// const navbar = document.querySelector("#nav-bar");
// console.log(navbar);

// navbar.addEventListener('mousemove', function(e) {
//     const mouseX = e.clientX;
//         const mouseY = e.clientY;

//     // Get all the nav items and their shadows
//     const navItems = document.querySelectorAll('.nav-item');
//     const navShadows = document.querySelectorAll('.nav-shadow');

//         // Loop through each nav item and adjust the position and opacity of its shadow
//         navItems.forEach((item, index) => {
//             const shadow = navShadows[index];
//             const itemRect = item.getBoundingClientRect();

//             // Calculate the position of the shadow relative to the mouse
//             const offsetX = (mouseX - itemRect.left) * 0.1;
//             const offsetY = (mouseY - itemRect.top) * 0.1;

//             // Apply the calculated position to the shadow
//             shadow.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

//             // Calculate the distance between the mouse and the nav-text element
//             const distanceY = Math.abs(mouseY - (itemRect.top + itemRect.height / 2));

//             // Adjust the opacity of the shadow based on the distance
//             shadow.style.opacity = 1 - (distanceY / (itemRect.height / 2));
//         });
//     });