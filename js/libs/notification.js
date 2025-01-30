function createNotification() {
  const templateNoti = `<div class="noti">
      <div class="noti-avatar"> <img src="../inc/modules/notify/images/hoang-nguyen.jpg" alt="khách hàng"></div>
      <div class="noti-content"> 
        <p class="noti-title">anh Hoàng Nguyên </p>
        <p class="noti-paragraph">Shop giao hàng rất nhanh, mình sẽ ủng hộ thêm nữa.</p><span class="noti-time">7 phút trước</span>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", templateNoti);
}

// const timer = setInterval(function () {
//   let item = document.querySelector(".noti");
//   if (item) {
//     item.parentNode.removeChild(item);
//   }
//   createNotification();
// }, 4000);
