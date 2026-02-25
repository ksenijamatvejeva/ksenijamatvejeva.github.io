function justifyAllGalleries() {
    const galleries = document.querySelectorAll(".justified-gallery");

    galleries.forEach(gallery => {
        const images = Array.from(gallery.querySelectorAll("img"));
        const gap = 20;
        const containerWidth = gallery.clientWidth;
        const targetRowHeight = 350;

        let row = [];
        let rowAspectSum = 0;

        images.forEach((img, index) => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            row.push(img);
            rowAspectSum += aspectRatio;

            const rowWidth = rowAspectSum * targetRowHeight + gap * (row.length - 1);

            if (rowWidth >= containerWidth || index === images.length - 1) {
                const newHeight = (containerWidth - gap * (row.length - 1)) / rowAspectSum;

                row.forEach(image => {
                    image.style.height = newHeight + "px";
                    image.style.width = "auto";
                });

                row = [];
                rowAspectSum = 0;
            }
        });
    });
}

window.addEventListener("load", justifyAllGalleries);
window.addEventListener("resize", justifyAllGalleries);