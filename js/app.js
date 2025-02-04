const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

class Carousel {
    constructor(container, items, prevButton, nextButton) {
        this.container = container;
        this.items = Array.from(items);
        this.prevButton = prevButton;
        this.nextButton = nextButton;

        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.prev());
        }

        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.next());
        }

        this.update();
    }

    update() {
        this.items.forEach((el, i) => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
            if (i < 5) {
                el.classList.add(`gallery-item-${i + 1}`);
                el.style.opacity = 1;
            } else {
                el.style.opacity = 0;
            }
        });
    }

    prev() {
        this.items.unshift(this.items.pop());
        this.update();
    }

    next() {
        this.items.push(this.items.shift());
        this.update();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.gallery');

    carousels.forEach((carousel) => {
        const galleryContainer = carousel.querySelector('.gallery-container');
        const galleryItems = carousel.querySelectorAll('.gallery-item');
        const prevButton = carousel.querySelector('[data-carousel-button="prev"]');
        const nextButton = carousel.querySelector('[data-carousel-button="next"]');

        new Carousel(galleryContainer, galleryItems, prevButton, nextButton);
    });
});

const bgSwitch = document.querySelector('.day-night-switch input');
const grainContainer = document.querySelector('.grain-container');
const hero = document.querySelector('.hero');
const logoAndLocation = document.querySelector('.logo-and-location');
const lineDivider = document.querySelector('.line-divider');
const lineDividerSm = document.querySelector('.line-divider-sm');
const project1Bg = document.querySelector('.project-1');
const project2Bg = document.querySelector('.project-2');
const project3Bg = document.querySelector('.project-3');
const contactPage = document.querySelector('.project-4');
const aboutPage = document.querySelector('.project-5');
const projectTitle1 = document.querySelector('.project-title-1');
const projectTitle2 = document.querySelector('.project-title-2');
const projectTitle3 = document.querySelector('.project-title-3');
const contactTitle = document.querySelector('.title-contact');
const aboutTitle = document.querySelector('.about-title');
const projectDescription1 = document.querySelector('.project-description-1');
const projectDescription2 = document.querySelector('.project-description-2');
const projectDescription3 = document.querySelector('.project-description-3');
const aboutText = document.querySelectorAll('.about-text');
const navItem = document.querySelectorAll('.nav-item');
const aboutBg = document.querySelectorAll('.profile-bg');
const copyright = document.querySelector('.copyright');
const contactWrapper = document.querySelector('.contact-wrapper');
const dateProject = document.querySelectorAll('.date-project');

let isNightMode = false;

bgSwitch.addEventListener('change', function () {
    console.log('clicked');
    if (!isNightMode) {
        grainContainer.style.backgroundImage = `
    radial-gradient(at 58% 9%, hsla(288,100%,21%,1) 0px, transparent 50%),
    radial-gradient(at 85% 36%, hsla(240,100%,30%,1) 0px, transparent 50%),
    radial-gradient(at 11% 22%, hsla(240,100%,25%,1) 0px, transparent 50%),
    radial-gradient(at 95% 92%, hsla(273,95%,16%,1) 0px, transparent 50%),
    radial-gradient(at 75% 86%, hsla(258,100%,25%,1) 0px, transparent 50%),
    radial-gradient(at 12% 78%, hsla(240,100%,27%,1) 0px, transparent 50%),
    radial-gradient(at 35% 22%, hsla(260,98%,33%,1) 0px, transparent 50%)
    `;
        grainContainer.style.backgroundColor = 'hsla(341,37%,39%,1)';
        hero.style.color = '#b8acff';
        logoAndLocation.style.color = '#FBF6F6';
        lineDivider.style.backgroundColor = '#b8acff';
        lineDividerSm.style.backgroundColor = '#FBF6F6';
        project1Bg.style.backgroundColor = '#355143';
        project2Bg.style.backgroundColor = '#383838';
        project3Bg.style.backgroundColor = '#170805';
        projectTitle1.style.color = '#FBF6F6';
        projectTitle2.style.color = '#FBF6F6';
        projectTitle3.style.color = '#FBF6F6';
        projectDescription1.style.color = '#FBF6F6';
        projectDescription2.style.color = '#FBF6F6';
        projectDescription3.style.color = '#FBF6F6';
        contactPage.style.backgroundColor = '';
        aboutPage.style.backgroundColor = '';
        aboutTitle.style.color = '#FBF6F6';
        contactTitle.style.color = '#FBF6F6';
        copyright.style.color = '#c4c4c4';
        contactWrapper.style.backgroundColor = '#DEB0B0';
        dateProject.forEach(element => {
            element.style.color = '#c4c4c4';
        });
        aboutText.forEach(element => {
            element.style.color = '#FBF6F6';
        });
        navItem.forEach(element => {
            element.style.color = '#FBF6F6';
        });
        aboutBg.forEach(element => {
            element.style.backgroundColor = '#8d5a5a';
        });

        isNightMode = true;
    } else {
        grainContainer.style.backgroundImage = '';
        grainContainer.style.backgroundColor = '';
        hero.style.color = '';
        logoAndLocation.style.color = '';
        lineDivider.style.backgroundColor = '';
        lineDividerSm.style.backgroundColor = '';
        project1Bg.style.backgroundColor = '';
        project2Bg.style.backgroundColor = '';
        project3Bg.style.backgroundColor = '';
        projectTitle1.style.color = '';
        projectTitle2.style.color = '';
        projectTitle3.style.color = '';
        projectDescription1.style.color = '';
        projectDescription2.style.color = '';
        projectDescription3.style.color = '';
        contactPage.style.backgroundColor = '';
        aboutPage.style.backgroundColor = '';
        aboutTitle.style.color = '';
        contactTitle.style.color = '';
        copyright.style.color = '';
        dateProject.style.color = '#c4c4c4';
        navItem.forEach(element => {
            element.style.color = '';
        });
        aboutText.forEach(element => {
            element.style.color = '';
        });
        aboutBg.forEach(element => {
            element.style.backgroundColor = '';
        });
        dateProject.forEach(element => {
            element.style.color = '';
        });

        isNightMode = false;
    }
})

var options = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.05,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
};

grained('#grain', options);
