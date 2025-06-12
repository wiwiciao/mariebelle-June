
// document.getElementById("cart-shopping").addEventListener("click", function() {
//     alert("開發中！")
// });

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-shopping");
    const cartList = document.getElementById("cart-list");
    const closeCart = document.getElementById("close-cart");

    // 點擊購物車按鈕時，切換顯示購物車清單
    cartIcon.addEventListener("click", function (event) {
      event.preventDefault();
      cartList.classList.toggle("active");
    });

    // 點擊關閉按鈕時，隱藏購物車
    closeCart.addEventListener("click", function () {
      cartList.classList.remove("active");
    });

    // 點擊外部區域時，關閉購物車
    document.addEventListener("click", function (event) {
      if (!cartList.contains(event.target) && event.target !== cartIcon) {
        cartList.classList.remove("active");
      }
    });
  });


/*  goTop   JavaScript版本 沒有fade效果 */

// 監聽頁面滾動，當滾動到一定位置顯示回到頂部按鈕
// 等待 DOM 內容加載完成
document.addEventListener('DOMContentLoaded', function () {

    // 獲取回到頂部按鈕元素
    const goTopButton = document.getElementById('goTop');

    // 點擊回到頂部按鈕時，平滑滾動至頁面頂部
    goTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 監聽頁面滾動事件
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            // 滾動超過300px，顯示按鈕
            goTopButton.style.display = 'block'; // 顯示按鈕
        } else {
            // 滾動回頂部，隱藏按鈕
            goTopButton.style.display = 'none'; // 隱藏按鈕
        }
    });
});


/*   goTop  jQuery版 */
// $(function () {
//     $('#goTop').click(function () {
//         $('html,body').animate({
//             scrollTop: 0
//         }, 333);
//     });
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('#goTop').fadeIn(222);
//         } else {
//             $('#goTop').stop().fadeOut(222);
//         }
//     }).scroll();
// });
