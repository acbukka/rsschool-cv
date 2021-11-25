var form = document.getElementById("my-form");

// плавный скрол:

$(".header__nav a, .header__cv a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1200);
});

// стрелочка to-top:

function backToTop() {

  let button = $('.back-to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 350) {
    button.fadeIn();
  } else {
    button.fadeOut();
    }
});

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000)
  })
}

backToTop();












async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success');
    status.innerHTML = "Thanks!";
    form.reset()
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)




// $(function(){
    
// });