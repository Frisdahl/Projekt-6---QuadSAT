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
