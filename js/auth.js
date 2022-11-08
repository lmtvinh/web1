const userLISTSTR = localStorage.getItem("users")
const users = JSON.parse(userLISTSTR ?? "[]")
const nguoidunght = localStorage.getItem("nguoidungdangdn") ? JSON.parse(localStorage.getItem("nguoidungdangdn")) : null
if (nguoidunght) {
    document.getElementById("user").innerHTML = `${nguoidunght.name}`
    document.getElementById("user").addEventListener(`click`, () => {
        
    })
} else {
    let loginForm = document.querySelector('.login-form');

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        signUp.classList.remove('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');
    }
}

function onSignUp() {
    const emailElement = document.querySelector("#su_email");
    const nameElement = document.querySelector("#su_name");
    const passwordElement = document.querySelector("#su_password");
    const emailPert = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gm;
    if (!emailElement.value.match(emailPert)) {
        return
    }
    const exituser = users.filter(u => u.email = emailElement.value);
    if (exituser[0]) {
        return
    }
    const user = { name: nameElement.value, email: emailElement.value, password: passwordElement.value }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users));
}


function onLogin() {
    const emailElement = document.querySelector("#lg_email");
    const passwordElement = document.querySelector("#lg_password");
    const exituser = users.filter(u => u.email == emailElement.value);
    console.log(users);
    if (!exituser[0]) {
        return // sai email
    }
    if (!exituser[0].password == passwordElement.value) {
        return // mk k dung
    }
    alert(exituser[0])
    localStorage.setItem("nguoidungdangdn", JSON.stringify(exituser[0]));
    location.reload();
}

