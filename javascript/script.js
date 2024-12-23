document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section to scroll to
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll to the target section smoothly with an offset
        window.scrollTo({
            top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });

        // Collapse the navbar after clicking the link if it's displayed
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Use the toggler button to toggle the navbar collapse
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }
        });
    });

    observer.observe(document.querySelector('#skills'));
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-row').forEach((row) => {
        const position = row.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            row.querySelectorAll('.progress-bar').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var videoThumbnail = document.querySelector('.video-thumbnail');
    var video = videoThumbnail.nextElementSibling; // Assuming the video tag directly follows the thumbnail

    videoThumbnail.addEventListener('click', function() {
        video.style.display = 'block'; // Show the video
        video.play(); // Play the video
        videoThumbnail.style.display = 'none'; // Hide the thumbnail
    });
});

document.querySelectorAll('.interests-list li, .language-list li').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on ' + item.textContent);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelector('.logos');
    let isScrolling = false;
    let speed = 1; // Speed of the scroll

    function startScroll() {
        isScrolling = true;
        scrollStep();
    }

    function scrollStep() {
        if (!isScrolling) return;
        
        // Check if the scroll has reached the right end of the element
        if (logos.scrollLeft >= logos.scrollWidth - logos.clientWidth) {
            // Reset scroll to the start
            logos.scrollLeft = 0;
        } else {
            // Continue scrolling
            logos.scrollBy(speed, 0);
        }
        
        requestAnimationFrame(scrollStep);
    }

    function stopScroll() {
        isScrolling = false;
    }

    // Optionally add mouseover to stop scrolling
    logos.addEventListener('mouseover', stopScroll);
    logos.addEventListener('mouseout', startScroll);

    startScroll(); // Start the auto-scroll
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.timeline-item .expand');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling; // the div.content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

function toggleInfo(element) {
    const infoDiv = element.nextElementSibling; // Get the additional-info div
    const video = infoDiv.querySelector('video'); // Get any video inside the info div

    // Toggle the display and video playback
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
        if (video) {
            video.play();
        }
    } else {
        infoDiv.style.display = 'none';
        if (video) {
            video.pause();
            video.currentTime = 0; // Optionally reset video to start
        }
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission to allow modal handling

    // Hide the contact modal
    var contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.hide();

    // Show the thank you modal
    var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    thankYouModal.show();
});

function playVideo() {
    // Toggle video container visibility when the card is clicked
    var videoContainer = document.getElementById('videoContainer');
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none";
    }
}