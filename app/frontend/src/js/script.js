document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('inspire-btn');
    if (button) {
        function toggleBlinking() {
            button.classList.remove('colorful');
            button.classList.add('blinking');
            setTimeout(() => {
                button.classList.remove('blinking');
                button.classList.add('colorful');
            }, 1000);
        }
        setInterval(toggleBlinking, 3200);
    }

    document.querySelectorAll('.main-menu a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Only prevent default on certain links if necessary
            if (!this.getAttribute('href').endsWith('.html')) {
                event.preventDefault();
            }
            console.log('Link clicked:', this.getAttribute('href'));
        });
    });
    

    const mainMenu = document.querySelector('.main-menu');
    const links = mainMenu.querySelectorAll('a');
    const logoImage = document.getElementById('header-logo') || document.getElementById('header-logo2');

    if (logoImage) {
        logoImage.id = 'header-logo';
        logoImage.src = 'assets/logo/logo-white-text.png';
    }

    const firstLink = mainMenu.querySelector('a:first-child');
    if (firstLink) {
        firstLink.style.color = 'white';
    }

    function handleScroll() {
        const header = document.getElementById('header-wrap');

        if (window.scrollY > window.innerHeight) {
            header.classList.add('scrolled');
            mainMenu.classList.add('scrolledcolour');

            links.forEach(link => {
                link.style.color = '#222'; // Normal state
                link.onmouseover = function() {
                    this.style.color = '#222'; // Hover state
                };
                link.onmouseout = function() {
                    this.style.color = '#222'; // Revert to normal state
                };
            });

            if (logoImage) {
                logoImage.id = 'header-logo2';
                logoImage.src = 'assets/logo/logo-png.png';
            }

            console.log('Scrolled class added');
        } else {
            header.classList.remove('scrolled');
            mainMenu.classList.remove('scrolledcolour');

            links.forEach(link => {
                link.style.color = ''; // Use original color from CSS
                link.onmouseover = function() {
                    this.style.color = ''; // Use original hover color from CSS
                };
                link.onmouseout = function() {
                    this.style.color = ''; // Use original color from CSS
                };
            });

            if (logoImage) {
                logoImage.id = 'header-logo';
                logoImage.src = 'assets/logo/logo-white-text.png';
            }

            console.log('Scrolled class removed');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the correct styles

    
  document.addEventListener('scroll', function() {
    var scrollIndicator = document.getElementById('scroll-indicator');
    if (window.scrollY > 50) { // Change the value to control when the indicator should hide
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  });

  // Initialize scroll indicator visibility based on page load
  window.addEventListener('load', function() {
    var scrollIndicator = document.getElementById('scroll-indicator');
    if (window.scrollY > 50) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  });



  
  document.getElementById('experiences-link').addEventListener('click', function(event) {
    if (window.innerWidth <= 992) { // Ensure it only works on smaller screens
        event.preventDefault();
        this.classList.toggle('active');
    }
});


// Handle mouse entering (hovering over) the "Experiences" link
document.getElementById('experiences-link').addEventListener('mouseenter', function(e) {
    var experiencesBar = document.getElementById('experiences-bar');
    var headerWrap = document.getElementById('header-wrap');
    
    // Get the current bottom position of the header
    var headerBottom = headerWrap.getBoundingClientRect().bottom;

    // Set the top position of the experiences bar to the header's bottom
    experiencesBar.style.top = headerBottom + 'px';

    // Add the 'active' class to slide the bar down
    experiencesBar.classList.add('active');
});

// Handle mouse leaving (no longer hovering over) the "Experiences" link
document.getElementById('experiences-bar').addEventListener('mouseleave', function(e) {
    var experiencesBar = document.getElementById('experiences-bar');
    
    // Remove the 'active' class to slide the bar up
    experiencesBar.classList.remove('active');
});

// Update the top position of the experiences bar as the header moves
window.addEventListener('scroll', function() {
    var experiencesBar = document.getElementById('experiences-bar');
    var headerWrap = document.getElementById('header-wrap');
    
    // Update the top position of the experiences bar as the header moves
    var headerBottom = headerWrap.getBoundingClientRect().bottom;
    experiencesBar.style.top = headerBottom + 'px';
});


// Add this script at the end of your body tag or in your main JavaScript file
$(document).ready(function() {
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 600,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: -50         // offste (in px) for fixed top navigation
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});




$(document).ready(function() {
    // Initialize Owl Carousel for the specific carousel within .popular-packages-slider
    var owl = $('.popular-packages-slider .owl-carousel').owlCarousel({
       
        margin: 20,        // Margin between items
        nav: false,        // Disable default navigation
        dots: false,
        items: 3,          // Show 3 items at a time
        responsive: {
            0: {
                items: 1  // For very small screens, show 1 item
            },
            600: {
                items: 2  // For medium screens, show 2 items
            },
            1000: {
                items: 3  // For large screens, show 3 items
            }
        }
    });

    $('.slider-left').on('click', function() {
        owl.trigger('prev.owl.carousel'); // Go to the previous slide
    });

    $('.slider-right').on('click', function() {
        owl.trigger('next.owl.carousel'); // Go to the next slide
    });
    
});


// Fetch all trips and populate dropdown
fetch('http://localhost:5000/trips')
.then(response => response.json())
.then(trips => {
    const tripSelect = document.getElementById('trip-select');
    trips.forEach(trip => {
        const option = document.createElement('option');
        option.value = trip.id;
        option.textContent = trip.trip_name;
        tripSelect.appendChild(option);
    });
});

// Handle trip selection
document.getElementById('trip-select').addEventListener('change', function() {
const selectedId = this.value;
if (selectedId) {
    fetch(`http://localhost:5000/trips/${selectedId}`)
        .then(response => response.json())
        .then(trip => {
            document.getElementById('trip-date').textContent = `Trip Date: ${new Date(trip.trip_date).toLocaleDateString()}`;
        })
        .catch(error => console.error('Error fetching trip:', error));
}
});



});


function filterTrips() {
    // Get filter values
    var tripType = document.getElementById('tripType').value;
    var activityLevel = document.getElementById('activityLevel').value;
    var priceRange = document.getElementById('priceRange').value;
    var area = document.getElementById('areaSelect').value;  // Get the area value

    // Get all travel boxes
    var travelBoxes = document.querySelectorAll('.travel-box');

    travelBoxes.forEach(function(box) {
        var boxTripType = box.getAttribute('data-trip-type');
        var boxActivityLevel = box.getAttribute('data-activity-level');
        var boxPrice = parseInt(box.getAttribute('data-price'));
        var boxArea = box.getAttribute('data-area'); 

        var showBox = true;

        // Filter by trip type
        if (tripType !== 'all' && boxTripType !== tripType) {
            showBox = false;
        }

        // Filter by activity level
        if (activityLevel !== 'all' && boxActivityLevel !== activityLevel) {
            showBox = false;
        }

        // Filter by price range
        if (priceRange !== 'all') {
            var [minPrice, maxPrice] = priceRange.split('-').map(Number);
            if (priceRange === '5000+' && boxPrice <= 5000) {
                showBox = false;
            } else if (boxPrice < minPrice || boxPrice > (maxPrice || Infinity)) {
                showBox = false;
            }
        }

        if (area !== 'all' && boxArea !== area) {
            showBox = false;
        }

        // Show or hide the box based on filters
        if (showBox) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    document.querySelectorAll('img, video').forEach(media => {
        media.loading = 'lazy'; // Lazy-load all images and videos
    });
}

window.addEventListener('load', function () {
    document.body.classList.add('show-media'); // Add a class to show images and videos after full load
});

// Email validation
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

// Phone validation
const phoneInput = document.getElementById('phone-input');
const phoneError = document.getElementById('phone-error');

// Button for submitting form
const submitBtn = document.getElementById('submit-btn');

// Email validation function
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailInput.value === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        emailInput.classList.add('error');
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        emailInput.classList.add('error');
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('error');
    }
}

// Phone validation function
function validatePhone() {
    const phonePattern = /^\d{7,15}$/; // Allows only 7 to 15 digit phone numbers
    
    if (phoneInput.value === '') {
        phoneError.textContent = 'Phone number is required.';
        phoneError.style.display = 'block';
        phoneInput.classList.add('error');
    } else if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Please enter a valid phone number (7-15 digits, no characters).';
        phoneError.style.display = 'block';
        phoneInput.classList.add('error');
    } else {
        phoneError.style.display = 'none';
        phoneInput.classList.remove('error');
    }
}

// Real-time validation as user types
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);


submitBtn.addEventListener('click', function (event) {
    validateEmail();
    validatePhone();
    
    // If there's an error, prevent the form from being submitted
    if (emailError.style.display === 'block' || phoneError.style.display === 'block') {
        event.preventDefault();
    }
});



