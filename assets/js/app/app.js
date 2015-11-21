define( ["three", "camera", "controls", "geometry", "light", "material", "renderer", "scene", "dat","stats"],
function ( THREE, camera, controls, geometry, light, material, renderer, scene, dat,stats ) {
  	var container, stats;
	var count = [0,0,0];
	var gui = new dat.GUI();
	var shaderTime = 0;
	var fullLoaded, clock, depthOfField, camera, renderer, scene, loader, composer, renderPass, delta, skin, hairtop, hairsides, throat,teethUpper,teethLower,tongue, shirt;
	var rgbParams, rgbPass;	
	var filmParams, filmPass;
	var mouseX = 0, mouseY = 0;
	var onRenderFcts= [];
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
  	
  	var app = {
    	meshes: [],
    	init: function () {
    
    		//add stats
    		container = document.getElementById('container');
			stats = new Stats();
			stats.domElement.style.position = 'absolute';
			stats.domElement.style.top = '0px';
			stats.domElement.style.zIndex = '100000';
			container.appendChild( stats.domElement );
			
      		var spacing = 300;
      		var offset = 0;
     		for ( var m in material ) {
       	 	// Create one cube for each material, and add to scene
        		var mesh = new THREE.Mesh( geometry.cube, material[m] );
        		mesh.position.x = offset;
        		offset += spacing;
        		light.target = mesh;
        		scene.add( mesh );
        		app.meshes.push( mesh );
      		}
   		 },
    	animate: function () {
      		window.requestAnimationFrame( app.animate );
      		controls.update();

      		// Rotate all meshes we've added to scene
      		for ( var m in app.meshes ) {
        		var mesh = app.meshes[m];
        		mesh.rotation.x += 0.005;
        		mesh.rotation.y += 0.01;
      		}

      		renderer.render( scene, camera );
      		stats.update();
    	}
  	};
  	return app;
} );
