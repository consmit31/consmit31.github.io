let prevDeltaY = null;

document.body.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY;

    let direction = deltaY > 0 ? 1 : -1;
    prevDeltaY = deltaY;

    const scrollDistance = 100; 
    window.scrollBy(direction * scrollDistance, 0); 
});
