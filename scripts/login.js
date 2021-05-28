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


// alexander - FAQ


const faq_container = document.getElementById('faq');
const faq_cancel_btn = document.getElementById('faq-cancel-btn')
let open_faq = document.getElementById('faq-btn');

function openFaq() {
  faq_container.style.display = "block";
}

function closeFaq() {
  if (faq_container.style.display = "block") {
    faq_container.style.display = "none";
  }
}

open_faq.addEventListener('click', openFaq)
faq_cancel_btn.addEventListener('click', closeFaq)
