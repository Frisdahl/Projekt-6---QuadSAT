// alexander - login

    const login_form = document.getElementById('login-form');
    login_form.innerHTML = '';

    let loginarr = ['username', 'password'];

    for(let i = 0; i < loginarr.length; i++) {
        let input = document.createElement('input');
        input.setAttribute('class', 'input-box');
        input.setAttribute('placeholder', loginarr[i]);
        input.setAttribute('id', loginarr[i]);
        login_form.appendChild(input);
    }

let input_btn_login = document.getElementById('input-btn-login');
let input_username = document.getElementById('username');
let usernames = ['Mads', 'Cecilie', 'Anne', 'Alexander'];

function loginLink() {
  if(usernames.includes(input_username.value)) {
     alert("velkommen", input_username.value);
     Location.href = "dashboard.html";
  } else {
    alert("Wrong username or password.")
    function wrongInput(){
      if (input_username != usernames) {
        Location.href = "login.html";
      }
    }
  }
}


input_btn_login.addEventListener('click', loginLink);
