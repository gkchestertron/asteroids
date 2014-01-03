(function (root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Ship = Asteroids.Ship = function (pos, vel) {
		Asteroids.MovingObject.apply(this, arguments);
		this.RADIUS = 10;
		this.COLOR = "green";


	}
	Ship.inherits(Asteroids.MovingObject);

	Ship.prototype.power = function (impulse) {
		this.vel[0] += impulse[0];
		this.vel[1] += impulse[1];
	}

	Ship.prototype.fireBullet = function () {
		var bullet = new Asteroids.Bullet(this.pos, this.vel);
		return bullet;
	}


})(this);