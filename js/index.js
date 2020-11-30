// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.width = '100%';
        mySidebar.style.display = 'block';
    }
}
// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// animation on the title
if (window.matchMedia("(min-width: 601px)").matches) {
    //The viewport is less than, or equal to, 700 pixels wide
    anime.timeline({loop: true})
        .add({
            targets: '.ml15 .word',
            scale: [14,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 1500, // Temps pour apparaitre
            delay: (el, i) => 1500 * i
        }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 1500, // Temps pour disparaitre
        easing: "easeOutExpo",
        delay: 3000 // Temps d'affichage
    });
} else {
    //The viewport is greater than 700 pixels wide
    console.log("No animation on the title on cell phone");
}

// animation on the achievements section
function rotate(event) {
    anime({
        targets: event.target,
        rotate: '1turn',
        duration: 5000
    });
}

for (let i = 1; i <= 10; i++) {
    document.getElementById('img-' + [i]).addEventListener('mouseover', rotate);
}



