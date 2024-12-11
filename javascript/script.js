// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section to scroll to
        const target = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target section smoothly
        target.scrollIntoView({ behavior: 'smooth' });

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
