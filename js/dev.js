// Модалка
$(document).ready(function() {
  $(".popup__confirm").on("click", function(e){
      if(document.querySelector(".language_popup__region_button").classList.contains('active')) {
          console.log("test");
          var data = $(".language_popup__button_en").text();
          $.ajax({
              type: 'post',
              url: '/ajax/region.php',
              data: { REGION:  data},
              dataType: 'html',
              success: function (e) {
                  console.log(data);
                  console.log(e);
                  location.reload();
                  document.querySelector('html').classList.remove("noscroll");
                  document.querySelector('.language_popup').classList.remove("active");
                  document.querySelector('.language_popup__region').classList.remove("active");
              },
              error:function(e){
                console.log(e);
                console.log(false);
              }
          });
          return false;
      } else {
          alert("Выберите регион \nChoose region \nElige región")
      }
  })
});

// Смена языка
$(document).ready(function() {
  $('.header__languages_item').click(function(e){
      var data = $(this).text();
      $.ajax({
          type: 'post',
          url: '/ajax/lang.php',
          data: { LANG: data },
          dataType: 'html',
          success: function (e) {
              location.reload();
              console.log(data);
          },
          error:function(e){
            console.log(e);
            console.log(false);
          }
      });
      return false;
  })
});

// Смена языка
$(document).ready(function() {
  $('.language_popup__language').click(function(e){
      var data = $(this).text();
      $.ajax({
          type: 'post',
          url: '/ajax/lang.php',
          data: { LANG: data },
          dataType: 'html',
          success: function (e) {
              console.log(data);
          },
          error:function(e){
            console.log(e);
            console.log(false);
          }
      });
      return false;
  })
});