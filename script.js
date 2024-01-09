const wrapper = document.querySelector('.wrapper');
//Khai báo class wrapper

const navigation = document.querySelector(".navigation");

const loginLink = document.querySelector('.login-link');
//Khai báo class Login Link trong Resigtration, nhiệm vụ là biến về Login

const registerLink = document.querySelector('.register-link');

const registerLink1 = document.querySelector('.register-link1');

const forgotLink = document.querySelector('.forgot-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

const btnFind = document.querySelector('.btn-find');

const btnConfirm = document.querySelector('.btn-find');

const btnRegister = document.querySelector('.btn-register');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
//Chuyển đổi từ Login sang Registration

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
//Huỷ hoạt ảnh, quay trở lại Login

forgotLink.addEventListener('click', () => {
    wrapper.classList.add('active1');
});
//Chuyển đổi từ Login sang Forgot Password

registerLink1.addEventListener('click', () => {
    wrapper.classList.remove('active1');
});
//Huỷ hoạt ảnh, quay trở lại Login

registerLink1.addEventListener('click', () => {
    wrapper.classList.add('active2');
});
//Chuyển đổi từ Login sang Registration

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active2');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
//Bật hộp Login

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
//Huỷ hoạt ảnh, tắt hộp Login

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active1');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active2');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('find');
});

// const defaultWrapperHTML = document.querySelector('.wrapper').innerHTML;

// // Sự kiện khi nút "Trở về trạng thái mặc định" được nhấn
// document.getElementById("close").addEventListener("click", function () {
//     // Khôi phục trạng thái mặc định của "wrapper"
//     document.querySelector('.wrapper').innerHTML = defaultWrapperHTML;
// });

// // Ví dụ về cách thay đổi nội dung của "wrapper" sau khi thực hiện các action
// function performAction(actionNumber) {
//     const wrapper = document.querySelector('.wrapper');
//     const actionContent = `<p>Action ${actionNumber}</p>`;
    
//     // Thêm nội dung của action vào "wrapper"
//     wrapper.innerHTML += actionContent;
// }

//---------------------------------------------------------------

btnFind.addEventListener('click', () => {
    wrapper.classList.add('find');
});

btnConfirm.addEventListener("click", function(event) {
    event.preventDefault();
    btnConfirm.textContent = "Confirm";
});
btnRegister.addEventListener("click", function(event) {
    wrapper.classList.add('register');
});

//---------------------------------------------------------------

function hideWarning(id) {
    var warning = document.getElementById(id);
    warning.style.display = "none";
}
  
document.getElementById("showWarning1").addEventListener("click", function() {
    var warning1 = document.getElementById("warning1");
    warning1.style.display = "block";
    setTimeout(function() {
        hideWarning("warning1");
    }, 1500); // 1.5 giây
});
  
document.getElementById("showWarning2").addEventListener("click", function() {
    var warning2 = document.getElementById("warning2");
    warning2.style.display = "block";
    setTimeout(function() {
      hideWarning("warning2");
    }, 1500); // 1.5 giây
});

//---------------------------------------------------------------

// btnRegister.addEventListener('click', () => {
//     wrapper.classList.add('clickregister');
// });

// document.getElementById('loginButton').addEventListener('click', function() {
//     Sử dụng window.location.href để chuyển đến trang khác (HTML2)
//     window.location.href = "indexboss.html";
// });

//------------------------------------------------------------

function logincheck(){
    var checkuser = document.getElementById("loginuser").value;
    var checkpassword = document.getElementById("loginpassword").value;

    if (checkuser === "admin" && checkpassword === "1"){
        window.location.href = "indexboss.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

//-------------------------------------------------------------

function logincheck(){
    var checkuser = document.getElementById("loginuser").value;
    var checkpassword = document.getElementById("loginpassword").value;

    if (checkuser === "ngoquanghuy" && checkpassword === "2012004"){
        window.location.href = "index-logged.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}