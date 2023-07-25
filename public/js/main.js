
document.getElementById("dark").addEventListener('click', () => {
    if (localStorage.getItem("dark-mode") == 'dark') {
        localStorage.setItem("dark-mode", "light");
    } else {
        localStorage.setItem("dark-mode", "dark");
    }
    window.location.href = '/';
})

window.onload = () => {
    if (localStorage.getItem("dark-mode") == 'dark'){
        document.querySelectorAll('*').forEach((e) => {
            e.classList.toggle('dark');
        })
    }
}