// ===================================
// JAVASCRIPT - Festival hrane 2025
// ===================================

// FORM VALIDATION
document.addEventListener('DOMContentLoaded', function() {
    // Get the reservation form
    const reservationForm = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const guests = document.getElementById('guests').value;
            const reservationDate = document.getElementById('reservationDate').value;
            const message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

            // Validate form
            let isValid = true;

            // Validate full name
            if (fullName === '') {
                document.getElementById('fullName').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('fullName').classList.remove('is-invalid');
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '' || !emailRegex.test(email)) {
                document.getElementById('email').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('email').classList.remove('is-invalid');
            }

            // Validate number of guests
            if (guests === '') {
                document.getElementById('guests').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('guests').classList.remove('is-invalid');
            }

            // Validate date and time
            if (reservationDate === '') {
                document.getElementById('reservationDate').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('reservationDate').classList.remove('is-invalid');
            }

            // If all fields are valid, show success message
            if (isValid) {
                // Save reservation to localStorage
                const reservation = {
                    id: Date.now(),
                    fullName: fullName,
                    email: email,
                    guests: guests,
                    reservationDate: reservationDate,
                    message: message,
                    status: 'Potrjena',
                    createdAt: new Date().toLocaleString('sl-SI')
                };

                // Get existing reservations
                let reservations = JSON.parse(localStorage.getItem('festivalReservations')) || [];
                reservations.push(reservation);
                localStorage.setItem('festivalReservations', JSON.stringify(reservations));

                // Show success message
                successMessage.style.display = 'block';

                // Reset form after 2 seconds
                setTimeout(() => {
                    reservationForm.reset();
                    successMessage.style.display = 'none';
                }, 2000);

                // Log the reservation (for demo purposes)
                console.log('Rezervacija poslana:');
                console.log('Ime in priimek:', fullName);
                console.log('Email:', email);
                console.log('Število oseb:', guests);
                console.log('Datum in ura:', reservationDate);
            }
        });
    }

    // NAVBAR ACTIVE LINK UPDATER
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    // Handle click events on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // CAROUSEL AUTO-PLAY
    const carousel = document.getElementById('carouselFestival');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }

    // SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // FORM INPUT VALIDATION ON CHANGE (only if field was already touched)
    const formInputs = reservationForm ? reservationForm.querySelectorAll('input, select') : [];
    
    formInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Only validate on change, not on every keystroke
            validateFieldOnChange(this);
        });
    });

    function validateFieldOnChange(field) {
        const value = field.value.trim();

        if (field.id === 'fullName') {
            if (value !== '') {
                field.classList.remove('is-invalid');
            }
        } else if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value !== '' && emailRegex.test(value)) {
                field.classList.remove('is-invalid');
            }
        } else if (field.id === 'guests') {
            if (value !== '') {
                field.classList.remove('is-invalid');
            }
        } else if (field.id === 'reservationDate') {
            if (value !== '') {
                field.classList.remove('is-invalid');
            }
        }
    }
});

// CLOSE NAVBAR WHEN CLICKING ON LINK (on mobile)
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show')) {
        if (event.target.classList.contains('nav-link')) {
            navbarToggler.click();
        }
    }
});

// RESERVATIONS PAGE FUNCTIONALITY
if (document.getElementById('reservationsList')) {
    displayReservations();
    
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const email = document.getElementById('searchEmail').value.trim();
            const name = document.getElementById('searchName').value.trim();
            searchReservations(email, name);
        });
    }
}

function displayReservations() {
    const reservations = JSON.parse(localStorage.getItem('festivalReservations')) || [];
    const reservationsList = document.getElementById('reservationsList');
    const emptyState = document.getElementById('emptyState');

    if (reservations.length === 0) {
        reservationsList.innerHTML = '';
        if (emptyState) {
            emptyState.style.display = 'block';
        }
        return;
    }

    if (emptyState) {
        emptyState.style.display = 'none';
    }

    reservationsList.innerHTML = reservations.map((res, idx) => `
        <div class="col-lg-6">
            <div class="card shadow-sm border-start border-danger border-5 h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="card-title mb-1">${res.fullName}</h5>
                            <p class="card-text text-muted mb-3">${res.email}</p>
                        </div>
                        <span class="badge bg-success">${res.status}</span>
                    </div>
                    <hr>
                    <div class="row g-3 mb-3">
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-people"></i> <strong>${res.guests} oseb</strong></p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-calendar-event"></i> <strong>${formatDate(res.reservationDate)}</strong></p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-clock"></i> <strong>${formatTime(res.reservationDate)}</strong></p>
                        </div>
                    </div>
                    ${res.message ? `<p class="card-text text-muted"><small>Posebne zahteve: ${res.message}</small></p>` : ''}
                    <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-sm btn-outline-danger" onclick="editReservation(${idx})">Uredi</button>
                        <button class="btn btn-sm btn-outline-secondary" onclick="deleteReservation(${idx})">Preklici</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function searchReservations(email, name) {
    const reservations = JSON.parse(localStorage.getItem('festivalReservations')) || [];
    const reservationsList = document.getElementById('reservationsList');
    const emptyState = document.getElementById('emptyState');

    const filtered = reservations.filter(res => 
        (email === '' || res.email.toLowerCase().includes(email.toLowerCase())) &&
        (name === '' || res.fullName.toLowerCase().includes(name.toLowerCase()))
    );

    if (filtered.length === 0) {
        reservationsList.innerHTML = '';
        if (emptyState) {
            emptyState.style.display = 'block';
        }
        return;
    }

    if (emptyState) {
        emptyState.style.display = 'none';
    }

    reservationsList.innerHTML = filtered.map((res, idx) => `
        <div class="col-lg-6">
            <div class="card shadow-sm border-start border-danger border-5 h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="card-title mb-1">${res.fullName}</h5>
                            <p class="card-text text-muted mb-3">${res.email}</p>
                        </div>
                        <span class="badge bg-success">${res.status}</span>
                    </div>
                    <hr>
                    <div class="row g-3 mb-3">
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-people"></i> <strong>${res.guests} oseb</strong></p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-calendar-event"></i> <strong>${formatDate(res.reservationDate)}</strong></p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="bi bi-clock"></i> <strong>${formatTime(res.reservationDate)}</strong></p>
                        </div>
                    </div>
                    ${res.message ? `<p class="card-text text-muted"><small>Posebne zahteve: ${res.message}</small></p>` : ''}
                    <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-sm btn-outline-danger" onclick="editReservation(${idx})">Uredi</button>
                        <button class="btn btn-sm btn-outline-secondary" onclick="deleteReservation(${idx})">Preklici</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function deleteReservation(idx) {
    if (confirm('Ali ste prepričani, da želite preklicati to rezervacijo?')) {
        const reservations = JSON.parse(localStorage.getItem('festivalReservations')) || [];
        reservations.splice(idx, 1);
        localStorage.setItem('festivalReservations', JSON.stringify(reservations));
        displayReservations();
        alert('Rezervacija je bila preklicana.');
    }
}

function editReservation(idx) {
    alert('Uredi funkcionalnost bo dostopna v nadaljnji verziji.');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}. ${getMonthName(date.getMonth())} ${year}`;
}

function formatTime(dateString) {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getMonthName(monthIndex) {
    const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'];
    return months[monthIndex];
}
