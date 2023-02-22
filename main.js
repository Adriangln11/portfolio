const docTitle = document.title
window.addEventListener('blur', () => {
    document.title = 'Adrian Diaz'
})

window.addEventListener('focus', () => {
    document.title = docTitle
} )

const scrollTopbutton = document.getElementById('scroll-top-button')
    
const onScroll = (e) => {
        const scrollposition = e.target.scrollingElement.scrollTop
        scrollTopbutton.classList.toggle('visible', scrollposition > 0)
}
const scrolltoTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
}
document.addEventListener('scroll', onScroll)
scrollTopbutton.addEventListener('click', scrolltoTop)
