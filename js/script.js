$(document).ready(function(){
//burger-menu
  $('.burger').click(function(event){
    $('.burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.nav').click(function(event){
    $('.burger, .nav').removeClass('active');
    $('body').removeClass('lock');
  });

//slider
$('.slider_big').slick({
        arrows:true,
        dots: true,
        slidesToShow:1,
        fade:false,
        autoplay: false,
        variableWidth:false,
  

		// responsive: [
  //           {
  //               breakpoint: 768,
  //               settings: {
  //                   slidesToShow: 2
  //               }
  //           },
  //           {
  //               breakpoint: 480,
  //               settings: {
  //                   slidesToShow: 1
  //               }
  //           }
  //       ]

        
	});
//send mail

$("#skidka").submit(function() {
    $.ajax({
      type: "POST",
      url: "skidka.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#skidka").trigger("reset");
    });
    return false;
  });

$("#zamer").submit(function() {
    $.ajax({
      type: "POST",
      url: "zamer.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#zamer").trigger("reset");
    });
    return false;
  });

//popup

$('.shtuka_class, .stazka_class, .gips_class, .paint_class, .electro_class, .santech_class, .plitka_class, .build_class, .otdelka_class').magnificPopup();
});

$("#otdelka_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "otdelka.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#otdelka_form").trigger("reset");
    });
    return false;
  });

$("#build_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "build.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#build_form").trigger("reset");
    });
    return false;
  });

$("#plitka_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "plitka.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#plitka_form").trigger("reset");
    });
    return false;
  });

$("#santech_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "santech.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#santech_form").trigger("reset");
    });
    return false;
  });

$("#electro_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "electro.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#electro_form").trigger("reset");
    });
    return false;
  });

$("#paint_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "paint.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#paint_form").trigger("reset");
    });
    return false;
  });

$("#gips_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "gips.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#gips_form").trigger("reset");
    });
    return false;
  });

$("#stazka_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "stazka.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#stazka_form").trigger("reset");
    });
    return false;
  });

$("#shtuka_form").submit(function() {
    $.ajax({
      type: "POST",
      url: "shtuka.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за обращение! Скоро мы с вами свяжемся.");
      $("#shtuka_form").trigger("reset");
    });
    return false;
  });

