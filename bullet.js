(function (root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Bullet = Asteroids.Bullet = function (pos, vel) {
		var speed = Math.pow(Math.pow(vel[0],2) + Math.pow(vel[1], 2), 0.5);
		var x = vel[0]/speed;
		var y = vel[1]/speed;
		this.vel = [x * 20,y * 20];
		this.RADIUS = 3;
		this.COLOR = "red";
		this.pos = pos.slice(0);
	}
	Bullet.inherits(Asteroids.MovingObject);

	Bullet.prototype.hitAsteroids = function (game) {
		var asteroids = game.asteroids
		var bullet = this;
		asteroids.forEach(function (asteroid) {
			if (bullet.isCollidedWith(asteroid))
			{
				game.removeBullet(bullet);
				game.removeAsteroid(asteroid);
			}
		});
	}

	Bullet.prototype.move = function (game) {
		Asteroids.MovingObject.prototype.move.call(this);
		this.hitAsteroids(game);
	}

})(this)