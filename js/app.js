// -------- ALL SLIDE IN ANIMATION -------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ---------------------------------------------------

// -------- HORIZONTAL TO VERTICAL SCROLL -------

// document.addEventListener('scroll', () => {
//     const horizontalSection = document.querySelector('.horizontal-scroll');
//     const scrollContainer = document.querySelector('.horizontal-scroll-container');
//     const endPage = document.querySelector('.end-page');
//
//     const horizontalSectionTop = horizontalSection.offsetTop;
//     const horizontalSectionHeight = horizontalSection.offsetHeight;
//     const scrollPosition = window.scrollY;
//     const horizontalScrollWidth = horizontalSection.scrollWidth;
//
//     if (scrollPosition >= horizontalSectionHeight && scrollPosition < horizontalSectionTop + horizontalSectionHeight - window.innerWidth) {
//         // Lock the vertical scroll and scroll horizontally
//         horizontalSection.style.position = 'fixed';
//         horizontalSection.style.top = '0';
//         horizontalSection.scrollLeft = scrollPosition - horizontalSectionTop;
//         document.body.style.overflowY = 'hidden';
//     } else {
//         horizontalSection.style.position = 'static';
//         document.body.style.overflowY = 'scroll';
//     }
//
//     // If we are at the end of the horizontal scroll, enable vertical scrolling
//     if (scrollPosition >= horizontalSectionHeight + horizontalSectionHeight - window.innerWidth) {
//         document.body.style.overflowY = 'scroll';
//     }
// });



// ---------------------------------------------------
