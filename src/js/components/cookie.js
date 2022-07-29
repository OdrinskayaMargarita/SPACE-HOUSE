export default () => {
  const cookieBox = document.querySelectorAll('.cookie-box')
  cookieBox.forEach(box => {
    let btn = box.querySelector('.btn-cookie-close')
    btn.addEventListener("click", function(e){
      box.classList.toggle('_active')
    });
  });
}
