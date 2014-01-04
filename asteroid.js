(function (root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Asteroid = Asteroids.Asteroid = function (pos, vel) {
		Asteroids.MovingObject.apply(this, arguments);
		this.RADIUS = 25;
		this.COLOR = "red"
		this.img = new Image();
		this.img.src = 'asteroid.png';
	}
	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.prototype.draw = function (ctx) {
	  ctx.drawImage(this.img, this.pos[0] - this.RADIUS, this.pos[1] - this.RADIUS);
	}

	Asteroid.randomAsteroid = function (dimX, dimY) {
		var pos =  [Math.random() * dimX, Math.random() * dimY];
		var vel = [Math.random() * 5 - 2.5, Math.random() * 5 - 2.5];
		return new Asteroid(pos, vel);
	}

	



})(this)