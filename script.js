let index = 0

function changeColors() {
    let colors = ["red", "magenta", "orange", "yellow", "green", "purple", "magenta"]
    document.querySelector("body").style.background = colors[index++]

    if(index > colors.length - 1)
    index = 0
}