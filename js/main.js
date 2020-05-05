console.log("Bienvenue !");

$(document).ready(function() {
  $('#container').fullpage({
    navigation: true,
    slidesNavigation: true,
    controlArrows: true,
    anchors:['home','work','contact']
  });
});