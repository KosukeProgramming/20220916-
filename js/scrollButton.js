window.onload = function() {

    // スクロールボタンの表示・非表示
    let windowHeight = window.outerHeight;
    const body = document.querySelector('body');
    scrollBtn.classList.remove('transition');

    window.addEventListener('scroll', function() {
    
        if(window.scrollY < windowHeight ) {
            scrollBtn.classList.remove('active');
        } else {
            console.log('あ');
            scrollBtn.classList.add('active');
        }
    })    
}