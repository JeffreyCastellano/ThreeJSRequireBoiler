define( ["three"], function ( THREE ) {
  var texturePath = "assets/img/";
  return {
    grass: THREE.ImageUtils.loadTexture( texturePath + "grass.png" )
  };
} );
