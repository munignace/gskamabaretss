const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

var i=0;
    var images=[];
    var time = 2500;
    images[0] = 'gs_kamabare_certification_teachers.jpg';
    images[1] = 'gs_kamabare_Mass.jpg';
    images[2] = 'gs_kamabare_vision.jpg';
    images[3] = 'gs_kamare_TermMass.jpeg';
    images[4] = 'gs_kamabare_certification.jpg';
    images[5] = 'gs_kamabare_assembly.jpg';
    images[6] = 'gs_kamabare_group.jpg';
    images[7] = 'gs_kamabare_olevel.jpg';
    images[8] = 'gs_kamabare_test.jpg';

    function changeImg(){
        document.slide.src = images[i];

        if(i < images.length - 1){
            i++;
        } else {
            i=0;
        }

        setTimeout("changeImg()",time);
    }

    window.onload = changeImg;
   // --- DYNAMIC INFINITE LOOP CAROUSEL LOGIC ---
let autoPlayTimer;
const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

function moveSlide(direction) {
    // Reset our auto-play clock cycle upon manual interaction
    stopActivityAutoPlay();
    
    const track = document.getElementById('activityTrack');
    const cards = track.querySelectorAll('.activity-card-item');
    
    if (cards.length === 0) return;

    if (direction === 1) {
        // NEXT ROUND: First item animates out, moves to the end of the line
        const firstCard = cards[0];
        track.appendChild(firstCard);
    } else if (direction === -1) {
        // PREVIOUS ROUND: Last item moves to the very front position
        const lastCard = cards[cards.length - 1];
        track.insertBefore(lastCard, track.firstChild);
    }
    
    // Resume auto play rotation
    startActivityAutoPlay();
}

function startActivityAutoPlay() {
    autoPlayTimer = setInterval(() => {
        moveSlide(1);
    }, AUTO_PLAY_INTERVAL);
}

function stopActivityAutoPlay() {
    clearInterval(autoPlayTimer);
}

// Initialize on page readiness configuration structures
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('activityTrack');
    
    // Pause slider animation rotation if user points mouse over the content window
    track.addEventListener('mouseenter', stopActivityAutoPlay);
    track.addEventListener('mouseleave', startActivityAutoPlay);
    
    startActivityAutoPlay();
});
// --- FAST IMMEDIATE JUMP BACK TO TOP FUNCTION ---
function jumpToTopFast() {
    // Instantly returns viewport up to coordinate origin without delay loop frames
    window.scrollTo({
        top: 0,
        behavior: 'auto' // 'auto' removes smooth transitions to scroll immediately and fast
    });
}