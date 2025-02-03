document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in-right");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // 1度だけ発火するように
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// ハンバーガーメニューを開く
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');
    menu.classList.add('show'); // メニューを表示
    menuClose.classList.add('show'); // バツボタンを表示
    document.body.classList.add('menu-open'); // メニュー開いたときにスクロールを無効化
}

// メニューを閉じる
function closeMenu() {
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');
    menu.classList.remove('show'); // メニューを非表示
    menuClose.classList.remove('show'); // バツボタンを非表示
    document.body.classList.remove('menu-open'); // メニュー閉じたときにスクロールを有効化
}
