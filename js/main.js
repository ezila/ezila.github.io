console.log("Bienvenue !");

$(document).ready(function() {
  $('#container').fullpage({
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors:['about','work','contact']
  });
  });