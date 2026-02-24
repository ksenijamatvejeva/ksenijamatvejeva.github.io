function justifyGallery() {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    const images = Array.from(gallery.querySelectorAll("img"));
    const gap = 20;
    const containerWidth = gallery.clientWidth;
    const targetRowHeight = 350;

    let row = [];
    let rowWidth = 0;

    images.forEach(img => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const width = targetRowHeight * aspectRatio;

        row.push({ img, aspectRatio });
        rowWidth += width + gap;

        if (rowWidth >= containerWidth) {
            const totalAspect = row.reduce((sum, item) => sum + item.aspectRatio, 0);
            const newHeight = (containerWidth - gap * (row.length - 1)) / totalAspect;

            row.forEach(item => {
                item.img.style.height = newHeight + "px";
                item.img.style.width = "auto";
            });

            row = [];
            rowWidth = 0;
        }
    });
}

window.addEventListener("load", justifyGallery);
window.addEventListener("resize", justifyGallery);