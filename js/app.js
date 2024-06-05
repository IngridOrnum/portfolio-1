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

// -------- GALLERY -------
class Carousel {
    constructor(container, items, prevButton, nextButton) {
        this.container = container;
        this.items = Array.from(items);
        this.prevButton = prevButton;
        this.nextButton = nextButton;

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());

        this.update();
    }

    update() {
        this.items.forEach((el, i) => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
            if (i < 5) {
                el.classList.add(`gallery-item-${i + 1}`);
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
    const galleryContainer = document.querySelectorAll('.gallery-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelectorAll('.arrow-prev');
    const nextButton = document.querySelectorAll('.arrow-next');

    new Carousel(galleryContainer, galleryItems, prevButton, nextButton);
});














// const galleryContainer = document.querySelector('.gallery-container');
// const galleryPaginationContainer = document.querySelector('.gallery-pagination');
// const galleryItems = document.querySelectorAll('.gallery-item');
//
// class Carousel {
//     constructor(container, items, pagination) {
//         this.carouselContainer = container;
//         this.carouselArray = Array.from(items);
//         this.carouselPagination = pagination;
//     }
//
//     updateGallery() {
//         this.carouselArray.forEach(el => {
//             el.classList.remove('gallery-item-1');
//             el.classList.remove('gallery-item-2');
//             el.classList.remove('gallery-item-3');
//             el.classList.remove('gallery-item-4');
//             el.classList.remove('gallery-item-5');
//         });
//
//         this.carouselArray.slice(0, 5).forEach((el, i) => {
//             el.classList.add(`gallery-item-${i + 1}`);
//         })
//     }
//
//     setCurrentState(direction) {
//         if (direction.classList.contains('arrow-prev')) {
//             this.carouselArray.unshift(this.carouselArray.pop());
//         } else {
//             this.carouselArray.push(this.carouselArray.shift());
//         }
//         this.updateGallery()
//     }
// }
//
//  const carousel = new Carousel(galleryContainer, galleryItems, galleryPaginationContainer);
//
//    function prevImg() {
//       carousel.setCurrentState(document.querySelector('.arrow-prev'));
//    }
//
//    function nextImg() {
//      carousel.setCurrentState(document.querySelector('.arrow-next'));
// }
//