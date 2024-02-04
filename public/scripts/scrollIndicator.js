document.addEventListener('scroll', function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolledPercentage + '%';
});
