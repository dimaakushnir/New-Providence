function ibg(){$.each($(".ibg"),function(s,e){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}ibg(),$(".fullscreen__btn").click(function(s){return $(".video-fixed").addClass("active"),$("body").addClass("lock"),!1}),$(".video-fixed__icon").click(function(s){$(".video-fixed").removeClass("active"),$("body").removeClass("lock")}),$(".header__link_icon").click(function(s){return $(".menu-out").addClass("active"),!1}),$(".menu-out__close").click(function(s){return $(".menu-out").removeClass("active"),!1}),$(window).scroll(function(s){20<$(this).scrollTop()?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}),$(window).resize(function(s){$(window).height()<450?$(".header__menu-out").addClass("xs"):$(".header__menu-out").removeClass("xs")}),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}),wow.init(),$(".interface__list").slick({centerMode:!0,slidesToShow:3,arrows:!1,variableWidth:!0}),$(".customers__slider1").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,asNavFor:".customers__slider2",responsive:[{breakpoint:767.98,settings:{slidesToShow:1,speed:500}}]}),$(".customers__slider2").slick({slidesToShow:1,speed:800,asNavFor:".customers__slider1",responsive:[{breakpoint:767.98,settings:{speed:500}},{breakpoint:600,settings:{arrows:!1}}]}),$(".slick-current").next().addClass("slick-act"),$(".slick-next").click(function(s){$(".slick-slide").removeClass("slick-act"),$(".slick-current").next().addClass("slick-act")}),$(".slick-prev").click(function(s){$(".slick-slide").removeClass("slick-act"),$(".slick-current").next().addClass("slick-act")}),$(".btns-choose__btn").click(function(s){!$(this).hasClass("active")&&$(".btn_individual").hasClass("active")&&($(".btn_individual").removeClass("active"),$(this).addClass("active"),$(".btns-choose").removeClass("left"),$(".btns-choose").addClass("right"),$(".body-plan__column.ind").removeClass("active"),$(".body-plan__column.comp").addClass("active")),!$(this).hasClass("active")&&$(".btn_company").hasClass("active")&&($(".btn_company").removeClass("active"),$(this).addClass("active"),$(".btns-choose").removeClass("right"),$(".btns-choose").addClass("left"),$(".body-plan__column.comp").removeClass("active"),$(".body-plan__column.ind").addClass("active"))}),document.getElementById("b_1").disabled=!1,document.getElementById("b_2").disabled=!0,$(".plan-item__body").click(function(s){!$(this).parent().hasClass("active")&&$(".body-plan__item.starter").hasClass("active")&&($(".body-plan__item.starter").removeClass("active"),$(".body-plan__item.pro").addClass("active"),document.getElementById("b_1").disabled=!0,document.getElementById("b_2").disabled=!1),!$(this).parent().hasClass("active")&&$(".body-plan__item.pro").hasClass("active")&&($(".body-plan__item.pro").removeClass("active"),$(".body-plan__item.starter").addClass("active"),document.getElementById("b_1").disabled=!1,document.getElementById("b_2").disabled=!0)}),$(".body-plan__btn").click(function(s){s.preventDefault(),$(".plan__form").addClass("active"),$("body").addClass("lock"),$(".wrapper").addClass("hide")}),$(".form-plan__сlose").click(function(s){$(".plan__form").removeClass("active"),$("body").removeClass("lock"),$(".wrapper").removeClass("hide")}),$(".menu-footer__title").click(function(s){$(this).hasClass("show")?($(this).removeClass("show"),$(this).next().removeClass("show")):($(".menu-footer__title").removeClass("show"),$(".menu-footer__list").removeClass("show"),$(this).addClass("show"),$(this).next().addClass("show"))});