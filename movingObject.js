(function (root){
	var Asteroids = root.Asteroids = ( root.Asteroids || {});

	Function.prototype.inherits = function (parent) {
		var child = this;
		function Surrogate() {};
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate();
	}

	var MovingObject = Asteroids.MovingObject = function (pos, vel) {
		this.pos = pos;
		this.vel = vel;
		this.RADIUS = 10;
		this.COLOR = "black";
	};

	MovingObject.prototype.move = function () {
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}

	MovingObject.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.COLOR;
	     ctx.beginPath();

	     ctx.arc(
	       this.pos[0],
	       this.pos[1],
	       this.RADIUS,
	       0,
	       2 * Math.PI,
	       false
	     );

	     ctx.fill();
	}

	MovingObject.prototype.isCollidedWith = function (otherObject) {
		var a = this.pos[0] - otherObject.pos[0];
		var b = this.pos[1] - otherObject.pos[1];
		var distance = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
		var radii = this.RADIUS + otherObject.RADIUS;
		return distance < radii;
	}


})(this)