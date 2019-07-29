//this code is for the tabs
function openContent(event, content) {
    let i, tabContent, tab;
    tabContent = document.getElementsByClassName("tabContent")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }
    tab = document.getElementsByClassName("tab")
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "")
    }
    document.getElementById(content).style.display = "block"
    event.currentTarget.className += " active"
}
document.getElementById("defaultOpen").click()
// this code is for the slideshow. might add or creat new features.
let myIndex = 0
carousel1()

function carousel1() {
    let i
    let x = document.getElementsByClassName("screenCap1")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block"
    setTimeout(carousel1, 2000)
}