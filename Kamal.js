const img = document.getElementsByClassName("demo")

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', function () {
        this.classList.add('box1')
    })

    img[i].addEventListener('mouseleave', function () {
        this.classList.remove('box1')
    })
}

const button = document.getElementsByClassName("atom");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        this.classList.add('transform')
    })

    button[i].addEventListener('dblclick', function(){
        if(this.classList.contains('transform'))
        this.classList.remove('transform')
    })
}

