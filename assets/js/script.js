
fetch('./partials/header/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;

        const clickMenu = document.getElementById('clickMenu');
        const controlsMenu = document.querySelectorAll('.header-navbar-controls-menu');

        let hideTimeout;

        controlsMenu.forEach(item => {
            item.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout); // Hủy nếu đang đếm ngược ẩn
                clickMenu.style.display = 'flex';
            });

            item.addEventListener('mouseleave', () => {
                // Đợi 2 giây rồi ẩn
                hideTimeout = setTimeout(() => {
                    clickMenu.style.display = 'none';
                }, 300); // 300ms
            });
        });

        // Nếu người dùng hover lại vào clickMenu trước khi ẩn: giữ menu
        clickMenu.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });

        // Khi rời khỏi menu thật sự thì bắt đầu đếm ngược ẩn
        clickMenu.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                clickMenu.style.display = 'none';
            }, 300);
        });
    });

    fetch('./partials/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        });