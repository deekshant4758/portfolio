// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project Modals - FIXED VERSION
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Project data
const projects = {
    project1: {
        title: "Event-Free Survival Prediction System",
        date: "Feb 2025",
        description: "Developed a comprehensive survival prediction system using Kaplan-Meier estimators and Cox proportional hazards models. Implemented GPU-accelerated preprocessing pipelines and custom evaluation metrics including a tailored C-index for improved accuracy. The system leverages LightAutoML for automated machine learning workflows and integrates multiple ensemble techniques for robust predictions.",
        tech: ["LightAutoML", "Scikit-learn", "Lifelines", "XGBoost", "Pandas", "Matplotlib", "CUDA", "PyTorch"],
        links: [
            { text: "View Project", url: "#", icon: "fas fa-external-link-alt" },
            { text: "GitHub Repository", url: "#", icon: "fab fa-github" }
        ]
    },
    project2: {
        title: "Plainify – A Calendly Alternative",
        date: "May–Aug 2025",
        description: "Built a full-stack scheduling platform that allows users to create personalized booking pages. Implemented JWT authentication, event management, and calendar synchronization. Developed responsive dashboards with React and Tailwind CSS, and built a robust backend with Next.js API routes, Prisma ORM, and PostgreSQL database. The platform supports timezone detection, email notifications, and Google Calendar integration.",
        tech: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT", "Axios", "Node.js"],
        links: [
            { text: "Live Demo", url: "https://planify-main.netlify.app/", icon: "fas fa-external-link-alt" },
            { text: "GitHub Repository", url: "#", icon: "fab fa-github" }
        ]
    },
    project3: {
        title: "Potato Disease Classification System",
        date: "Dec 2024",
        description: "Designed and implemented a convolutional neural network (CNN) for automatic classification of potato plant diseases. Achieved 96% accuracy through careful architecture design and extensive data augmentation. Developed preprocessing pipelines for image normalization, resizing, and augmentation. The system can distinguish between early blight, late blight, and healthy potato plants with high precision.",
        tech: ["TensorFlow", "Keras", "OpenCV", "Pandas", "Matplotlib", "NumPy", "Scikit-learn"],
        links: [
            { text: "View Project", url: "#", icon: "fas fa-external-link-alt" },
            { text: "GitHub Repository", url: "#", icon: "fab fa-github" }
        ]
    }
};

// Open modal with project details
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Close modal when clicking on X
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalFunc();
    }
});

function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    // Reset modal display property first
    modal.style.display = 'flex';
    
    // Force reflow to ensure display property is applied
    void modal.offsetHeight;
    
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="modal-header">
            <h3 class="modal-title">${project.title}</h3>
            <span class="modal-date">${project.date}</span>
        </div>
        <div class="modal-description">
            <p>${project.description}</p>
        </div>
        <div class="modal-tech">
            ${project.tech.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="modal-links">
            ${project.links.map(link => `
                <a href="${link.url}" target="_blank" class="modal-link">
                    <i class="${link.icon}"></i> ${link.text}
                </a>
            `).join('')}
        </div>
    `;
    
    // Add show class to trigger animation
    setTimeout(() => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }, 10);
}

function closeModalFunc() {
    // Remove show class to trigger animation
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Re-enable scrolling
    
    // Reset modal after transition
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}