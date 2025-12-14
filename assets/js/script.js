document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        if (preloader) {
            preloader.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // If it's an external link or just '#', let default browser behavior handle it
            if (!href.startsWith('#') || href.length === 1) {
                return; // Let the browser handle external links or empty anchors
            }

            e.preventDefault(); // Prevent default only for valid internal smooth scrolls

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project data with real app store images
    const projects = {
        "ultimate-profiler": {
            title: "Ultimate Profiler",
            description: "A powerful, easy-to-use in-game profiler that shows real-time FPS, frame time, memory, and performance stats. It's fully compatible with all render pipelines (Built-in, URP, HDRP) and platforms (Desktop, Mobile, WebGL), helping you debug and optimize any Unity project with ease. Features a customizable, draggable UI, one-click setup, and performance data export.",
            images: [
                "assets/images/Ultimate Profiler/Screenshot 2025-12-09 004009.png",
                "assets/images/Ultimate Profiler/Screenshot 2025-12-09 004010.png",
                "assets/images/Ultimate Profiler/Card image.png"
            ],
            storeLink: "https://assetstore.unity.com/preview/349284/1192896", // Asset Store Link
            tags: ["Unity", "C#", "Asset Store"]
        },
        "customize-books": {
            title: "Customize Books (Web Platform)",
            description: "A web-based platform that allows users to register, issue books, view available books, and customize their reading experience. Key Features: User authentication, book search, customization options, online reading. (In Progress)",
            images: [
                "assets/images/customize-books/icon.svg",
                "assets/images/customize-books/screenshot1.svg",
                "assets/images/customize-books/screenshot2.svg"
            ],
            // This project doesn't have app links, so keeping a general link if any, or removing.

            tags: ["HTML", "CSS", "JavaScript", "Firebase"]
        },
        "box-blast": {
            title: "Rescue Box: Water Puzzle Game",  // Corrected title based on actual app
            description: "A challenging water physics puzzle game where you need to rescue the water by strategically opening and closing gates to direct the flow to the target.",
            images: [
                "assets/images/box-blast/icon.webp", // icon
                "assets/images/box-blast/screenshot1.webp",
                "assets/images/box-blast/screenshot2.webp",
                "assets/images/box-blast/screenshot3.webp",
                "assets/images/box-blast/screenshot4.webp",
                "assets/images/box-blast/screenshot5.webp",
                "assets/images/box-blast/screenshot6.webp",
                "assets/images/box-blast/screenshot7.webp",
                "assets/images/box-blast/screenshot8.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.dds.boxblastshooter",
                ios: "https://apps.apple.com/ph/app/rescue-box-water-puzzle-game/id6739194972"
            },
            tags: ["Unity", "C#"]
        },
        "flip-the-tile": {
            title: "Flip The Tile - Matching Game",
            description: "A memory-based puzzle game challenging players with time-based matching tasks. Available on Google Play Store.",
            images: [
                "assets/images/flip-the-tile/icon.webp", // icon
                "assets/images/flip-the-tile/screenshot1.webp",
                "assets/images/flip-the-tile/screenshot2.webp",
                "assets/images/flip-the-tile/screenshot3.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.hiru.flipthetile",
                ios: "https://apps.apple.com/ph/app/flip-the-tile-matching-game/id6464108409"
            },
            tags: ["Unity", "C#", "Mobile", "Puzzle", "Memory"]
        },
        "final-fight": {
            title: "Final Fight - Action Battle",
            description: "Experience Epic Combat. Game contains beautiful story about birds and dragon fight. You will act as bird in this game and your goal is to save bird from dragon attacks of different types to win the level and save birds family.",
            images: [
                "assets/images/final-fight/icon.webp", // icon
                "assets/images/final-fight/screenshot1.webp",
                "assets/images/final-fight/screenshot2.webp",
                "assets/images/final-fight/screenshot3.webp",
                "assets/images/final-fight/screenshot4.webp",
                "assets/images/final-fight/screenshot5.webp",
                "assets/images/final-fight/screenshot6.webp",
                "assets/images/final-fight/screenshot7.webp",
                "assets/images/final-fight/screenshot8.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.dayd.birdvsdragon",
                ios: "https://apps.apple.com/ph/app/final-fight-action-battle/id6503291841"
            },
            tags: ["Unity", "C#"]
        },
        "pop-the-ball": {
            title: "Pop The Ball - Puzzle Quest",
            description: "A physics-based puzzle game where players solve challenging levels by strategically popping balls.",
            images: [
                "assets/images/pop-the-ball/icon.webp", // icon
                "assets/images/pop-the-ball/screenshot1.webp",
                "assets/images/pop-the-ball/screenshot2.webp",
                "assets/images/pop-the-ball/screenshot3.webp",
                "assets/images/pop-the-ball/screenshot4.webp",
                "assets/images/pop-the-ball/screenshot5.webp",
                "assets/images/pop-the-ball/screenshot6.webp",
                "assets/images/pop-the-ball/screenshot7.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.dayd.poptheball",
                ios: "https://apps.apple.com/ph/app/pop-the-ball-match-puzzle/id6469126543"
            },
            tags: ["Unity", "C#"]
        },
        "3d-maze": {
            title: "3D Maze - Relaxing Puzzle",
            description: "An immersive 3D puzzle game where players navigate through complex mazes designed for a relaxing experience.",
            images: [
                "assets/images/3d-maze/icon.jpg", // icon
                "assets/images/3d-maze/screenshot1.jpg",
                "assets/images/3d-maze/screenshot2.jpg",
                "assets/images/3d-maze/screenshot3.jpg",
                "assets/images/3d-maze/screenshot4.jpg",
                "assets/images/3d-maze/screenshot5.jpg"
            ],
            appLinks: {
                ios: "https://apps.apple.com/ph/app/3d-maze-relaxing-puzzle/id6480049890"
            },
            tags: ["Unity", "C#"]
        },
        "rope-toss-twisted": {
            title: "Rope Toss Twisted: Flip Master",
            description: "A physics-driven game where players master the art of rope tossing and flipping through various challenges.",
            images: [
                "assets/images/rope-toss-twisted/icon.webp", // icon
                "assets/images/rope-toss-twisted/screenshot1.webp",
                "assets/images/rope-toss-twisted/screenshot2.webp",
                "assets/images/rope-toss-twisted/screenshot3.webp",
                "assets/images/rope-toss-twisted/screenshot4.webp",
                "assets/images/rope-toss-twisted/screenshot5.webp",
                "assets/images/rope-toss-twisted/screenshot6.webp",
                "assets/images/rope-toss-twisted/screenshot7.webp",
                "assets/images/rope-toss-twisted/screenshot8.webp",
                "assets/images/rope-toss-twisted/screenshot9.webp",
                "assets/images/rope-toss-twisted/screenshot10.webp",
                "assets/images/rope-toss-twisted/screenshot11.webp",
                "assets/images/rope-toss-twisted/screenshot12.webp",
                "assets/images/rope-toss-twisted/screenshot13.webp",
                "assets/images/rope-toss-twisted/screenshot14.webp",
                "assets/images/rope-toss-twisted/screenshot15.webp",
                "assets/images/rope-toss-twisted/screenshot16.webp",
                "assets/images/rope-toss-twisted/screenshot17.webp",
                "assets/images/rope-toss-twisted/screenshot18.webp",
                "assets/images/rope-toss-twisted/screenshot19.webp",
                "assets/images/rope-toss-twisted/screenshot20.webp",
                "assets/images/rope-toss-twisted/screenshot21.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.dds.ropetosspuzzle",
                ios: "https://apps.apple.com/ph/app/rope-toss-twisted-flip-master/id6740608262"
            },
            tags: ["Unity", "C#"]
        },
        "one-line-draw-it": {
            title: "One Line - Draw It Puzzle Game",
            description: "A captivating puzzle game that challenges players to connect all the dots on a grid with a single continuous line without lifting their finger or retracing their path. Features various levels and increasing difficulty.",
            images: [
                "assets/images/one-line-draw-it/icon.webp", // icon
                "assets/images/one-line-draw-it/screenshot1.webp",
                "assets/images/one-line-draw-it/screenshot2.webp",
                "assets/images/one-line-draw-it/screenshot3.webp"
            ],
            appLinks: {
                android: "https://play.google.com/store/apps/details?id=com.dds.onelinedraw",
                ios: "https://apps.apple.com/ph/app/one-line-draw-it-puzzle-game/id6743704252"
            },
            tags: ["Unity", "C#", "Mobile", "Puzzle"]
        },
        "balls-vs-walls": {
            title: "Balls Vs Walls - Slingshot",
            description: "An arcade-style game where players launch balls using a slingshot mechanism to break down walls.",
            images: [
                "assets/images/balls-vs-walls/icon.jpg", // icon
                "assets/images/balls-vs-walls/screenshot1.png",
                "assets/images/balls-vs-walls/screenshot2.png",
                "assets/images/balls-vs-walls/screenshot3.png",
                "assets/images/balls-vs-walls/screenshot4.png"
            ],
            appLinks: {
                taptap: "https://www.taptap.io/app/33592300"
            },
            tags: ["Unity", "C#"]
        },
        "fill-the-board": {
            title: "Fill The Board - Brain Games",
            description: "A strategic puzzle game that challenges players with logical placement tasks to fill the board.",
            images: [
                "assets/images/fill-the-board/icon.svg"
            ],

            tags: ["Unity", "C#"]
        }
    };

    // Make project cards keyboard-activatable and clickable
    document.querySelectorAll('[data-project]').forEach(card => {
        // Handle keyboard activation
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default space bar scroll
                // Trigger the modal by finding and clicking the button inside the card
                const button = card.querySelector('[data-bs-toggle="modal"]');
                if (button) {
                    button.click();
                }
            }
        });

        // Also ensure clicking the card itself works
        card.addEventListener('click', function(event) {
            // Do not trigger if the click was on a button or link already
            if (event.target.closest('a, button')) {
                return;
            }
            const button = card.querySelector('[data-bs-toggle="modal"]');
            if (button) {
                button.click();
            }
        });
    });

    // Function to populate the project modal with project data
    function populateProjectModal(project, modalElement) {
        const modalTitle = modalElement.querySelector('.modal-title');
        const projectDescription = modalElement.querySelector('.project-description');
        const projectCarouselInner = modalElement.querySelector('.carousel-inner');
        let projectLinkContainer = modalElement.querySelector('.project-link-container');

        // Set modal title and description
        modalTitle.textContent = project.title;

        // Build tags HTML
        let tagsHTML = '<div class="project-tags mb-3">';
        if (project.tags) {
            project.tags.forEach(tag => {
                tagsHTML += `<span class="project-tag">${tag}</span>`;
            });
        }
        tagsHTML += '</div>';
        projectDescription.innerHTML = project.description + tagsHTML;

        // Clear and create link container if it doesn't exist
        if (projectLinkContainer) {
            projectLinkContainer.innerHTML = ''; // Clear previous links
        } else {
            projectLinkContainer = document.createElement('div');
            projectLinkContainer.classList.add('project-link-container', 'mt-3', 'd-flex', 'flex-wrap', 'gap-2');
            projectDescription.after(projectLinkContainer); // Insert after the description
        }

        // Dynamically create and add link buttons
        const createLinkButton = (href, text, iconClass, btnClass, ariaLabel) => {
            const linkBtn = document.createElement('a');
            linkBtn.href = href;
            linkBtn.target = "_blank";
            linkBtn.rel = "noopener noreferrer"; // Security best practice for external links
            linkBtn.classList.add('btn', btnClass, 'd-inline-flex', 'align-items-center');
            linkBtn.setAttribute('aria-label', ariaLabel);
            linkBtn.innerHTML = `<i class="${iconClass} me-2"></i> ${text}`;
            return linkBtn;
        };

        if (project.storeLink && project.storeLink !== '#') {
            projectLinkContainer.appendChild(createLinkButton(project.storeLink, 'View on Asset Store', 'fas fa-store', 'btn-primary', `View ${project.title} on the Unity Asset Store`));
        }

        if (project.appLinks) {
            if (project.appLinks.android) {
                projectLinkContainer.appendChild(createLinkButton(project.appLinks.android, 'Google Play', 'fab fa-google-play', 'btn-success', `View ${project.title} on Google Play`));
            }
            if (project.appLinks.ios) {
                projectLinkContainer.appendChild(createLinkButton(project.appLinks.ios, 'App Store', 'fab fa-apple', 'btn-dark', `View ${project.title} on the App Store`));
            }
            if (project.appLinks.taptap) {
                projectLinkContainer.appendChild(createLinkButton(project.appLinks.taptap, 'Tap Tap', 'fas fa-mobile-alt', 'btn-danger', `View ${project.title} on Tap Tap`));
            }
        }
        
        // Hide container if no links are present
        projectLinkContainer.style.display = projectLinkContainer.hasChildNodes() ? 'flex' : 'none';

        // Populate carousel
        projectCarouselInner.innerHTML = '';
        project.images.forEach((imgSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active');

            const img = document.createElement('img');
            img.className = 'd-block w-100';
            img.alt = `${project.title} Screenshot ${index + 1}`;
            // Implement lazy loading for modal images
            if (index === 0) {
                img.src = imgSrc; // Load the first image immediately
            } else {
                img.dataset.src = imgSrc; // Defer loading of other images
            }
            
            carouselItem.appendChild(img);
            projectCarouselInner.appendChild(carouselItem);
        });
    }

    // Project Modal Logic
    const projectModal = document.getElementById('projectModal');
    let lastFocusedElement;

    projectModal.addEventListener('show.bs.modal', function (event) {
        lastFocusedElement = document.activeElement;

        const button = event.relatedTarget;
            const projectContainer = button.closest('[data-project]');
        if (!projectContainer) return;

        const projectId = projectContainer.dataset.project;
        const project = projects[projectId];

        if (project) {
            populateProjectModal(project, projectModal);
        }
    });

    // Lazy load images within the carousel once the modal is shown
    projectModal.addEventListener('shown.bs.modal', function () {
        const imagesToLoad = projectModal.querySelectorAll('img[data-src]');
        imagesToLoad.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });

        // Focus trapping logic
        const focusableElements = projectModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (firstElement) firstElement.focus();

        projectModal.addEventListener('keydown', function(e) {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    });

    projectModal.addEventListener('hidden.bs.modal', function () {
        // Return focus to the element that was focused before the modal opened
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    });

            // Initialize ScrollReveal
            // You'll need to replace 'your-font-awesome-kit-id.js' in index.html with your actual Font Awesome kit ID
            // and ideally get a ScrollReveal CDN that is compatible with modern browsers if this one fails.
            if (typeof ScrollReveal !== 'undefined') {
                ScrollReveal().reveal('.hero-section h1', { delay: 200, origin: 'left', distance: '50px' });
                ScrollReveal().reveal('.hero-section p.lead', { delay: 400, origin: 'right', distance: '50px' });
                ScrollReveal().reveal('.hero-section .btn', { delay: 600, interval: 100, origin: 'bottom', distance: '30px' });
                
                ScrollReveal().reveal('#about .col-md-4', { delay: 200, origin: 'left', distance: '50px' });
                ScrollReveal().reveal('#about .col-md-8', { delay: 400, origin: 'right', distance: '50px' });
    
                ScrollReveal().reveal('.skill-card', { delay: 100, interval: 100, origin: 'bottom', distance: '30px' });
    
                ScrollReveal().reveal('.project-card', { delay: 100, interval: 100, origin: 'bottom', distance: '30px' });
    
                ScrollReveal().reveal('#contact form', { delay: 200, origin: 'bottom', distance: '50px' });
            }
    
                    // Bootstrap form validation
                    const contactForm = document.querySelector('#contact form');
                    if (contactForm) {
                        contactForm.addEventListener('submit', function (event) {
                            if (!contactForm.checkValidity()) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            contactForm.classList.add('was-validated');
                        }, false);
                    }
            
                    // Back to top button
                    const backToTopButton = document.getElementById("back-to-top");
            
                    if (backToTopButton) {
                        window.addEventListener("scroll", () => {
                            if (window.pageYOffset > 300) {
                                backToTopButton.style.display = "block";
                            } else {
                                backToTopButton.style.display = "none";
                            }
                        });
            
                        backToTopButton.addEventListener("click", (e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        });
                    }
                });
            