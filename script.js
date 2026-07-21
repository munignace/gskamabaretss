/* ==========================================
   1. MOBILE MENU TOGGLE
   ========================================== */
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');

if (menu && menulinks) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menulinks.classList.toggle('active');
    });
}

/* ==========================================
   2. HERO SLIDESHOW (PRELOAD & SAFE ROTATION)
   ========================================== */
var i = 0;
var images = [
    'gs_kamabare_certification_teachers.jpg',
    'gs_kamabare_Mass.jpg',
    'gs_kamabare_vision.jpg',
    'gs_kamare_TermMass.jpeg',
    'gs_kamabare_certification.jpg',
    'gs_kamabare_assembly.jpg',
    'gs_kamabare_group.jpg',
    'gs_kamabare_olevel.jpg',
    'gs_kamabare_test.jpg'
];
var time = 2500;

function changeImg() {
    var slideImg = document.getElementById('home_page');
    if (!slideImg) return;

    // Smooth image transition without white screen flickering or layout collapses
    var nextImg = new Image();
    nextImg.src = images[i];
    nextImg.onload = function() {
        slideImg.src = images[i];
    };

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;

/* ==========================================
   3. DYNAMIC INFINITE LOOP CAROUSEL LOGIC
   ========================================== */
let autoPlayTimer;
const AUTO_PLAY_INTERVAL = 4000;

function moveSlide(direction) {
    stopActivityAutoPlay();
    
    const track = document.getElementById('activityTrack');
    if (!track) return;

    const cards = track.querySelectorAll('.activity-card-item');
    if (cards.length === 0) return;

    if (direction === 1) {
        const firstCard = cards[0];
        track.appendChild(firstCard);
    } else if (direction === -1) {
        const lastCard = cards[cards.length - 1];
        track.insertBefore(lastCard, track.firstChild);
    }
    
    startActivityAutoPlay();
}

function startActivityAutoPlay() {
    stopActivityAutoPlay();
    autoPlayTimer = setInterval(() => {
        moveSlide(1);
    }, AUTO_PLAY_INTERVAL);
}

function stopActivityAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('activityTrack');
    if (track) {
        track.addEventListener('mouseenter', stopActivityAutoPlay);
        track.addEventListener('mouseleave', startActivityAutoPlay);
        startActivityAutoPlay();
    }
});

/* ==========================================
   4. FAST IMMEDIATE JUMP BACK TO TOP
   ========================================== */
function jumpToTopFast() {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}
