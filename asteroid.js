(function (root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Asteroid = Asteroids.Asteroid = function (pos, vel) {
		Asteroids.MovingObject.apply(this, arguments);
		this.RADIUS = 15;
		this.COLOR = "red"
	}

	Asteroid.randomAsteroid = function (dimX, dimY) {
		var pos =  [Math.random() * dimX, Math.random() * dimY];
		var vel = [Math.random() * 5 - 2.5, Math.random() * 5 - 2.5];
		return new Asteroid(pos, vel);
	}

	Asteroid.inherits(Asteroids.MovingObject);



})(this)