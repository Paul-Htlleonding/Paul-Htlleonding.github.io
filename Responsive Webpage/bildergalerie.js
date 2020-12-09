let img = document.getElementsByClassName("img-img");

function onclick1() {
    let click = img[0].src;

    for (let i = 0; i < img.length - 1; i++) {

        img[i].src = img[i + 1].src;
    }
    img[img.length - 1].src = click;
}

function onclick2() {
    let click = img[img.length - 1].src;

    for (let i = img.length - 1; i > 0; i--) {

        img[i].src = img[i - 1].src;
    }
    img[0].src = click;

}