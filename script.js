let cursor = document.querySelector('.cursor')


document.querySelector('body').addEventListener("mousemove", (delts) => {
    console.log(delts)
    cursor.style.left = `${delts.x}px`;
    cursor.style.top = `${delts.y}px`;
})

let form = document.querySelector('iframe')

let formBtn = document.querySelector('#git');
let click = true;
formBtn.addEventListener("click", () => {
    if (click == true) {
        form.classList.remove('hide');
        click = false;
        formBtn.innerText = "Hide Form"
    } else {
        form.classList.add('hide');
        click = true;
        formBtn.innerText = "Get in Touch"
    }
})