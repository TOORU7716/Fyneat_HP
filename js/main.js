// ハンバーガーメニュー作成
$(function () {
    $(".humburger-menu").click(function () {
        $(".g-nav").toggleClass('active');
        $(".humburger-menu").toggleClass('change');
    });
});