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
// animation on the title
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

// animation on the achievements section
function rotate(event) {
    anime({
        targets: event.target,
        //loop: true,
        rotate: '1turn',
    });
}

document.getElementById('img-1').addEventListener('mouseover', rotate);
document.getElementById('img-2').addEventListener('mouseover', rotate);
document.getElementById('img-3').addEventListener('mouseover', rotate);
document.getElementById('img-4').addEventListener('mouseover', rotate);
document.getElementById('img-5').addEventListener('mouseover', rotate);
document.getElementById('img-6').addEventListener('mouseover', rotate);
document.getElementById('img-7').addEventListener('mouseover', rotate);
document.getElementById('img-8').addEventListener('mouseover', rotate);
document.getElementById('img-9').addEventListener('mouseover', rotate);
document.getElementById('img-10').addEventListener('mouseover', rotate);

