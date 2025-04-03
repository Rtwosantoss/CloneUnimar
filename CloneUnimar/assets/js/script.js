//Toogle men mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
})
//toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme')
}