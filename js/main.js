console.log("Bienvenue !");

$(document).ready(function() {
  $('#container').fullpage({
    navigation: true,
    slidesNavigation: false,
    controlArrows: true,
    anchors:['home','work','contact']
  });
});