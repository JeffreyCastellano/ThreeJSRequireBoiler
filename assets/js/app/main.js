require( ['detector', 'app', 'container', 'TweenMax'], function ( Detector, app, container, TweenMax ) {
  if ( ! Detector.webgl ) {
    Detector.addGetWebGLMessage();
    container.innerHTML = "";
  }

  app.init();
  app.animate();
  TweenMax.to(loading, 1, {autoAlpha:0});
} );
