var scrollFireOptions = [
  {selector: "#step1", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step1", "animated fadeInUp");
  }},
  {selector: "#step11", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step11", "animated fadeInUp");
  }},
  {selector: "#step111", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step111", "animated fadeInUp");
  }},
  {selector: "#step2", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step2", "animated fadeInUp");
  }},
  {selector: "#step22", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step22", "animated fadeInUp");
  }},
  {selector: "#step222", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step222", "animated fadeInUp");
  }},
  {selector: "#step3", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step3", "animated fadeInUp");
  }},
  {selector: "#step33", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step33", "animated fadeInUp");
  }},
  {selector: "#step333", offset: 60, callback: function(el) {
    $(el).css("opacity", "1.0");
    animateCss("#step333", "animated fadeInUp");
  }},
  {selector: "#btn-mall", offset: 70, callback: function(el) {
    $(el).removeClass("white black-text").css("transition", "1.2s").addClass("teal darken-3 white-text");
  }},
  {selector: "#btn-university", offset: 70, callback: function(el) {
    $(el).removeClass("white black-text").css("transition", "1.2s").addClass("amber darken-3 white-text");
  }},
  {selector: "#btn-event", offset: 70, callback: function(el) {
    $(el).removeClass("white black-text").css("transition", "1.2s").addClass("indigo white-text");
  }},
  /*{selector: "#used-technologies", offset: 300, callback: function(el) {
    $("#used-technologies").css("opacity", "1.0");
    $("#used-technologies-content").css("opacity", "1.0");

    animateCss("#used-technologies", "animated zoomIn");
    animateCss("#used-technologies-content", "animated zoomIn");
  }},
  {selector: "#used-instruments", offset: 300, callback: function(el) {
    $("#used-instruments").css("opacity", "1.0");
    $("#used-instruments-content1").css("opacity", "1.0");
    $("#used-instruments-content2").css("opacity", "1.0");

    animateCss("#used-instruments", "animated zoomIn");
    animateCss("#used-instruments-content1", "animated zoomIn");
    animateCss("#used-instruments-content2", "animated zoomIn");
  }},*/
  //{selector: "#technologies", offset: 100, callback: technologiesFadeIn },
  //{selector: "#team", offset: 100, callback: teamFadeIn },
  //{selector: "#contacts", offset: 100, callback: contactsFadeIn},
];

var animateCss = function(element, animationName, opacity = "1.0") {
  $(element).addClass(animationName);
  $(element).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
    $(element).removeClass(animationName).css("opacity", opacity);
  });
}

var collapseToNavbar = function() {
  $("#tour").fadeOut(500);
  $("#tour-container").css("display", "none");
  $("#onload-container-img").css("opacity", "0");
  $("#onload-container").animate({
    opacity: 0,
    height: "100%"
  }, 400, function() {
    $("#page-content").fadeIn(1000).promise().done(function() {
      animateCss("#badge", "animated pulse");
      $('#textarea1').trigger('autoresize');
      $('.parallax').parallax();
    });
  });
}

$(function() {
  var elements = ["#name", "#title"];

  for (var i = 0; i < elements.length; i++) {
    animateCss(elements[i], "animated zoomIn");
  }

  $("#onload-container").delay(1600).animate({opacity: 0.65}, 1000, function() {
    animateCss("#name", "animated fadeOut", "0.0");
    animateCss("#title", "animated fadeOut", "0.0");
    //$("#tour").delay(1200).fadeIn(1000);
  });

  $("#onload-container").delay(1250).promise().done(function() {
    collapseToNavbar();
  });
});

Materialize.scrollFire(scrollFireOptions);
