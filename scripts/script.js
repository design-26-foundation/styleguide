// All script stuff for front-end interactions

// List.js

var options = {
  valueNames: [ 'name', 'fp-investor-number', 'fp-list-percentage', 'fp-list-funds' ],
  page: 6,
  pagination: true
};

var userList = new List('clients', options);

// var options = {
//   valueNames: [ 'client-name' ]
// };

// var userList = new List('planner', options);

// jQuery stuff

document.addEventListener("DOMContentLoaded", function(event) {

  // Just for demo

  var $priceMaterial = $(".timeline");

  $("#dummyText").on('change', function() {
    var txt = $(this).find('option:selected').val();
    $priceMaterial.text(txt);
  });


  //Script for tabs

  $('.tab-controls').each(function(){
    var $active, $content, $links = $(this).find('a');

    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    $(this).on('click', 'a', function(e){
      $active.removeClass('active');
      $content.hide();

      $active = $(this);
      $content = $(this.hash);

      $active.addClass('active');
      $content.show();
      e.preventDefault();
    });
  });

  // Header search form

  $('#openSearch').on("click",function(){
    $('#headerSearch').slideToggle();
    $('.header-search-input').focus();
  });

  $( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
      $('#headerSearch').hide();
    }
  });


  // Justin is best
  // Home page carousel

  var owl = $(".owl-carousel");
   owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    singleItem: true,
    navText: [
      "<span aria-label='Previous'></span>",
      "<span aria-label='Next'></span>"
    ]
  })

   $(document.documentElement).keyup(function(event) {
    if (event.keyCode == 37) {
      owl.trigger('prev.owl.carousel', [700]);
    } else if (event.keyCode == 39) {
      owl.trigger('next.owl.carousel', [700]);
    }

 });

// Dashboard carousel

  var owl = $(".product-carousel");
   owl.owlCarousel({
    loop: false,
    margin: 32,
    nav: true,
    responsive:{
      0:{
        items: 1
      },
      800:{
        items: 2
      },
      1000:{
        items: 3
      }
    },
    dots: true,
    navText: [
      "<span aria-label='Previous'></span>",
      "<span aria-label='Next'></span>"
    ]
  });

  var owl = $(".fp-carousel, .fp-carousel-two, .fp-carousel-three, .fp-carousel-four");
   owl.owlCarousel({
    loop: false,
    margin: 32,
    nav: true,
    responsive:{
      0:{
        items: 1
      },
      800:{
        items: 2
      },
      1000:{
        items: 3
      }
    },
    dots: true,
    navText: [
      "<span aria-label='Previous'></span>",
      "<span aria-label='Next'></span>"
    ]
  });

  var owl = $(".contact-carousel");
   owl.owlCarousel({
    loop: false,
    margin: 32,
    nav: true,
    responsive:{
      0:{
        items: 1
      },
      800:{
        items: 3
      },
      1000:{
        items: 4
      }
    },
    dots: true,
    navText: [
      "<span aria-label='Previous'></span>",
      "<span aria-label='Next'></span>"
    ]
  });

   // Stepper

  $(".btn").on("click tap", function() {

  var $button = $(this);
  var oldValue = $('#spinner').val();

  if ($button.attr("id") == "step-increment") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  };

  $('#spinner').val(newVal);

  });

  $("#step-decrement").on("click tap", function() {
    if ( $('#spinner').val() === '0' ) {
      $(this).attr("disabled", true);
      $(this).attr("aria-disabled", true);
    }
  });

  $("#step-increment").on("click tap", function() {
    $("#step-decrement").removeAttr("disabled");
    $("#step-decrement").removeAttr("aria-disabled");
  });

  //Accordions
  $('.collapsible-closed').click(function() {
    $(this).next('div').slideToggle(250);
    $(this).find('h2 > span').toggleClass('caret-down');
  }).next().hide();

  $('.collapsible-open').click(function() {
    $(this).next('div').slideToggle(250);
    $(this).find('h2 > span').toggleClass('caret-down');
  }).next().show();

  $('.more-info').click(function() {
    $(this).prev('div').slideToggle(250);
    $(this).find('.expand svg').toggleClass('caret-down');
  }).next().hide();

  // Nav dropdowns

  $('.login-dropdown').hide;
  $('.login-link').on("click",function() {
    $(this).toggleClass('login-active');
    $(".login-dropdown").slideToggle("fast");
  });

  $('.investor-select').on("click",function() {
    $(this).toggleClass('segment-active');
    $(".select-investor-dropdown").slideToggle("fast");
  });

  $('.sub-nav').hide;
  $('.has-sub').on("click",function(){
    $(this).toggleClass('menu-open')
    $(this).find(".sub-nav").toggle();
    $(this).siblings().find(".sub-nav").hide().removeClass('menu-open');
    $(this).siblings().removeClass('menu-open');
  });

  $('.segment-chooser-button').on("click",function(){
    $(this).toggleClass('segment-active');
    $(".segmentation-nav").slideToggle("fast");
  });

  // Close menus if clicking elsewhere

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#mainNav').length) {
      $('.has-sub > ul').hide();
      $('.has-sub').removeClass('menu-open');
    }
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#loginDropdown').length) {
      $('.login-dropdown').hide();
      $('.login-link').removeClass('login-active');
    }
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#selectInvestor').length) {
      $('.select-investor-dropdown').hide();
      $('.investor-select').removeClass('segment-active');
    }
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#segment').length) {
      $('.segmentation-nav').hide();
      $('.segment-chooser-button').removeClass('segment-active');
    }
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#searchForm').length &&
      !$(event.target).closest('#openSearch').length) {
      $('#searchForm').hide();
    }
  });

  // Show more product detail

  $(".fund-extra").hide();
  $('button.investor-cta-link').on("click",function() {
    $(".fund-extra").slideToggle("fast").toggleClass('visible');
    $('button.investor-cta-link span').text(function(i, text){
        return text === "Show more" ? "Show less" : "Show more";
      })
  });

  $('button.investor-cta-link').one("click",function() {
    $('html, body').animate({
      scrollTop: $("button.investor-cta-link").offset().top -20
      }, 1000);
  });

  // Datepicker

  $('[data-toggle="datepicker"]').attr('readonly', 'true');

  var now = Date.now();

  $('[data-toggle="datepicker"]').datepicker({
    format: 'dd/mm/yyyy',
    weekStart: '1',
    autoHide: true,
    filter: function(date) {
      if (date.getDay() === 0) {
        return false; // Disable all Sundays
      }
    }
  });


  $('[data-toggle="datepicker"]').attr('readonly', 'true');

  var now = Date.now();

  $('[data-toggle="datepicker-month-year"]').datepicker({
    format: 'mm/yyyy',
    weekStart: '1',
    autoHide: true,
    filter: function(date) {
      if (date.getDay() === 0) {
        return false; // Disable all Sundays
      }
    }
  });

  // Sticky scrolling

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800){
      $('.fixedScrolling').addClass("sticky");
    }
    else {
      $('.fixedScrolling').removeClass("sticky");
    }
  });

  // Social Sharing
    var title = document.title;
    var url = location.href;

    $('.sharing .facebook').click(function(e) {
        e.preventDefault();
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(title), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    });

    $('.sharing .twitter').click(function(e) {
        e.preventDefault();
        window.open('http://twitter.com/intent/tweet?' + "&url=" + encodeURIComponent(url) + '&text=' + encodeURIComponent(title), 'MyWindow', 'location=0,status=0,scrollbars=0, width=650,height=300');
    });

    $('.sharing .linkedin').click(function(e) {
        e.preventDefault();
        window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&source=' + encodeURIComponent(window.location.hostname), 'MyWindow', 'location=0,status=0,scrollbars=0, width=650,height=450');
    });

  // Button spinner

  $('.spinner-button').on("click",function(){
    $(this).addClass('loading-button').children('svg').removeClass('is-hiddenVisually');
  });

  // Tooltips

  $('.tooltip').tooltipster({
    trigger: 'custom',
    triggerOpen: {
        click: true,
        tap: true
    },
    triggerClose: {
        click: true,
        tap: true
    }
  });

  // Atura

  $('.atura-popup-container').hide();


  // Registration



  // Show correct inputs

  $("input.select-transaction-type").click(function() {
    var value = $(this).val();
      if (value === 'amount') {
        $("#lump-sum-input").show();
      }
      else if (value === 'percentage') {
        $("#lump-sum-input").hide();
      }
    });

    $("input.show-other").click(function() {
    var value = $(this).val();
      if (value === 'other') {
        $("#otherAmount").show();
      }
      else if (value === 'notOther') {
        $("#otherAmount").hide();
      }
    });


  // Eac

  $("#showEac").click(function() {
    $(this).toggleClass('open');
    $("#eacSummary").slideToggle();
  });


  $("#terms-and-conditions-check").click(function() {
    $("#confirm-instruction-button").prop("disabled", !this.checked);
  });

  // Transaction header

    var header = $("#taskStepper");
    $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
    });

    $( '.nav-list li').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 300;

      $('body,html').animate({
        scrollTop: scrollPoint
      }, 420);
    });


    $(window).scroll(function() {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 570) {
        $('.details-block:visible').each(function(i) {

          if ($(this).offset().top <= windscroll + 350) {
            $('.nav-list li.active').removeClass('active');
            $('.nav-list li').eq(i).addClass('active');
          }
        });

        }

      else {
        $('.nav-list li.active').removeClass('active');
        $('.nav-list li:first').addClass('active');
      }

    }).scroll();

    // if ($('.nav-list li').eq(i)!= undefined){
    //   $('.nav-list li.active').removeClass('active');
    //   $('.nav-list li').eq(i).addClass('active');
    // }

  // Add event listener for opening and closing details

  $('.details-control').click(function() {
    $(this).closest('tr').next().toggle();
    $(this).closest('tr').toggleClass('no-border');
    $(this).toggleClass('show-less');
  }).closest('tr').next().hide();


  $('.tax-details-control').click(function() {
    $(this).text(function(i, text){
      return text === "View tax info" ? "Hide tax info" : "View tax info";
    });
    $(this).closest('tr').next().toggle();
    $(this).closest('tr').toggleClass('no-border');
    $(this).toggleClass('show-less');
  }).closest('tr').next().hide();


  // Open Eva

  $(".open-eva").click(function() {
    // event.preventDefault();
    $(".thin-webchat-container").toggleClass('open');
  });

  // Flip
  $('#switch').on("click",function(){
    $(".flip-container").toggleClass('flipped');
  });

  // Close alerts
  $('#btnCloseLocation').on("click",function(){
    $(this).parent().fadeOut(function(){ $(this).remove(); });
  });

  $('#btnCloseCookie').on("click",function(){
    $('.cookie-policy').fadeOut(function(){ $(this).remove(); });
  });

  // Tax tools

$('input.stop-click').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
    });

  // Button select

  $('.select-tax-year').on("click",function(){
    $(this).toggleClass('selected');

    // if ($('.select-tax-type').hasClass('selected')) {
    //  $('.select-tax-type').removeClass('selected');
    // }
    //  if ($('.tab-content').hasClass('current')) {
    //   $('.tab-content').removeClass('current');
    //  }
    $('.report-button').hide();
    $('.select-tax-year').each(function(){
       if($(this).hasClass('selected'))
      {
        $('.report-button').show();
      }
    });
 });

 // Picker for individual tax certificates

   $('.select-tax-type').click(function(){
     var tab_id = $(this).attr('data-tab');
     $('.select-tax-type').removeClass('selected');
     $('.tab-content').removeClass('current');
     $(this).addClass('selected');
     $("#"+tab_id).addClass('current');
  //   if ($('.select-tax-year').hasClass('selected')) {
    //   $('.select-tax-year').removeClass('selected');
   //  }
   });

  // Show flexible date range

  $(function(){
    $("input[name='tax-range']").click(function(){
      if($(this).val() === "flexible")
        $(".flexible-range").show("fast");
      else
        $(".flexible-range").hide("fast");
    });
  });

  // Add show/hide for tables

  $('#extraTableShow').click(function(){
    $(this).find('span').text(function(i, text){
      return text === "Show more" ? "Show less" : "Show more";
    });
    $('.summary-extra').toggle();
  });

  // Profile edit

  // var defaultText = '';
  // $('.change-detail').focus(function () {
  //   defaultText = $(this).val();
  //   $(this).val('');
  // });
  // $('.change-detail').blur(function () {
  //   var newText = $(this).val();
  //   if (newText.length < 1) {
  //     $(this).val(defaultText);
  //   }
  // });


  $('input.edit-preferred-name').on('keyup', function() {
    if ($(this).val().length > 0) {
      $('.save-preferred-name').prop('disabled', false);
    }

    else if ($(this).val().length < 0) {
      $('.save-preferred-name').prop('disabled', true);
    }
  });

  // File upload

  'use strict';

  ;( function( $, window, document, undefined )
  {
    $( '.inputfile' ).each( function()
    {
      var $input   = $( this ),
        $label   = $input.next( 'label' ),
        labelVal = $label.html();

      $input.on( 'change', function( e )
      {
        var fileName = '';

        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else if( e.target.value )
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          $label.find( 'span' ).html( fileName );
        else
          $label.html( labelVal );
      });

      // Firefox bug fix
      $input
      .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
      .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
  })( jQuery, window, document );

  // Admin - elmah

  $(".content-editor").hide();
  $(".show-fields").click(function() {
    $(this).parent('.existing-settings').toggle();
    $(".content-editor").hide().eq($(this).index('.show-fields')).toggle();
  });


  // Mobile menu

  $(".menu-mobile-open").click(function() {
    $(".mobile-nav").slideToggle();
  });

  $('.mobile-level-one').on("click",function(e){
    $(this).next(".mobile-level-two").slideToggle();
    e.preventDefault();
  });

  // Inbox

  $(".show-aside").click(function() {
    $(".inbox-folders").addClass('show-main');
  });

  $(".close-aside").click(function() {
    $(".inbox-folders").removeClass('show-main');
  });

  // Client list

  $(document).on("click", ".fp-client-card", function(){
    $(this).children('.select-client').toggleClass('selected');
    if ($('.select-client').hasClass('selected')) {
      $('#fpSendMail').prop('disabled', false);
    } else {
      $('#fpSendMail').prop('disabled', true);
      }
  });



  $(document).on("click", ".select-clients", function(){
    $(this).text(function(i, text){
      return text === "Select all" ? "Deselect all" : "Select all";
    });
    $(this).toggleClass('selected');
    $(".select-client").toggleClass('selected');
    if ($('.select-client').hasClass('selected')) {
      $('#fpSendMail').prop('disabled', false);
    } else {
      $('#fpSendMail').prop('disabled', true);
      }
  });

  $("#updateDetails").click(function() {
    $(this).text('Saved');
    $("#updateSuccessful").show();
  });

  $("#fpSendMail").click(function() {
    $("#fpMailer").slideToggle();
    $("#fpSchedule").hide();
  });

  $("#fpBulkSchedule").click(function() {
    $("#fpSchedule").slideToggle();
    $("#fpMailer").hide();
  });

  $(".cancel-mail").click(function() {
    $("#fpMailer").hide();
    $("#fpSchedule").hide();
  });

  // $(function() {
  //   $(".expand").on( "click", function() {
  //     $(this).next().slideToggle(100);
  //     $expand = $(this).find(">:first-child");

  //     if($expand.text() == "+") {
  //       $expand.text("-");
  //     } else {
  //       $expand.text("+");
  //     }
  //   });
  // });

// Profile and setting stuff

  $(function () {
    $("#updateCorrespondenceCheck").click(function () {
      if ($(this).is(":checked")) {
        $("#updateCorrespondence").show();
      } else {
        $("#updateCorrespondence").hide();
      }
    });
  });

  // $('#updateCorrespondenceCheck').on("change" (function() {
  //   $('#updateCorespondence').toggle();
  // });

  $("#removeBank").click(function() {
    $(".remove-bank").show();
  });

  $("#cancelRemove").click(function() {
    $(".remove-bank").hide();
  });

  $("#confirmRemove").click(function() {
    $("#bankRemoved").show();
    $("#removeBank").hide();
    $(".remove-bank").hide();
    $('#firstBankAccount').remove();
  });

  // Email pdf
  $("#sendEmail").click(function() {
    $("#mailPDF").slideToggle();
  });

  // Clear fund search

  $(".fund-search-input").on("focus", function() {
    $(".fund-search-clear").show();
  });

  $(".fund-search-clear").click(function(){
    $(this).hide();
    $('.fund-search-input').val('');
  });

  // Screen customise

  $("#show-settings-link").click(function() {
    $(this).toggleClass("active");
    $("#screen-meta").slideToggle();
  });

  $('.client-connect-hide').click(function() {
    if( $(this).is(':checked')) {
      $("#clientCardDashboard").hide();
    } else {
      $("#clientCardDashboard").show();
    }
  });

   $('.fees-hide').click(function() {
    if( $(this).is(':checked')) {
      $(".amount-calculation").hide();
    } else {
      $(".amount-calculation").show();
    }
  });



});

// font stuffs

// (function() {

//   if( sessionStorage.foftFontsLoaded ) {
//     document.documentElement.className += "fonts-stage-1";
//     return;
//   }

//   /* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
// function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
// function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

// (function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
// this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
// function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
// function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
// A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
// f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
// g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
// z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


//     var fontA = new FontFaceObserver('FFMark', {
//       weight: 400
//     });

//     var fontB = new FontFaceObserver('FFMark', {
//       weight: 600
//     });

//     var fontC = new FontFaceObserver('FFMark', {
//       weight: 300
//     });

//     var fontD = new FontFaceObserver('FFMark', {
//       weight: 500
//     });


//     Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(function () {
//       document.documentElement.className += "fonts-stage-1";
//       sessionStorage.foftFontsLoaded = true;
//     });

//   })
// ();
