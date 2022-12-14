import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createdGalleryEl = createEl(galleryItems);


galleryEl.innerHTML = createdGalleryEl;

function createEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
}

galleryEl.addEventListener("click", onImgClick)

function onImgClick(e) {
  e.preventDefault()
  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${e.target.dataset.source}" width = "800" height = "600">
    </div>
`, {
     onShow: (instance) => {
    galleryEl.addEventListener("keydown", onEscapeButton);
    
      },
      onClose: (instance) => {
        galleryEl.removeEventListener("keydown", onEscapeButton);

      },
  })

  instance.show();
  function onEscapeButton(e) {
    if (e.key === "Escape") {
      instance.close()
    }
}
}
