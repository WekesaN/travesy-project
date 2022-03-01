const items = document.querySelectorAll('.container .panel')

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        removeActiveClasses()
        // console.log(e.target)
        item.classList.add('active')
    })
})

const removeActiveClasses = (e) => {
    items.forEach((item) => {
        item.classList.remove('active')
    })
}