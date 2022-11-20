import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const createdGalleryEl = createEl(galleryItems);


function createEl(galleryItems) {
    return   galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
}

galleryEl.innerHTML = createdGalleryEl;

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captiondDelay: 250
 })