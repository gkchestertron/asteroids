(function (root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx) {
  	var game = this;
		this.ctx = ctx;
		this.asteroids = [];
		this.bullets = [];
		this.ship = new Asteroids.Ship([400, 300], [0, 0]);

		this.img = new Image();
		this.img.onload = function () {
		  this.ctx.drawImage(this.img, 0, 0);
		};
		this.img.src = 'bg.jpg';

		function addAsteroids(numAsteroids) {
			for (var i = 0; i < numAsteroids; i++) {
				game.asteroids.push(Asteroids.Asteroid.randomAsteroid(800, 600));
			}
		}
		addAsteroids(10);
	}

	Game.prototype.bindKeyHandlers = function () {
		var game = this;
		key('up', function(){game.ship.power([0,-1])});
		key('down', function(){game.ship.power([0, 1])});
		key('left', function(){game.ship.power([-1,0])});
		key('right', function(){game.ship.power([1, 0])});
		key('space', function(){game.fireBullet()});
	}

	Game.prototype.checkCollisions = function() {
		var game = this;
		game.asteroids.forEach(function (element) {
			var bool = element.isCollidedWith(game.ship);
			if (bool)
			{
				game.stop();
				alert("You Lose!")
			}
		});
	}

	Game.prototype.checkInBounds = function () {
		var game = this;
		this.asteroids.forEach(function (asteroid) {
			if (asteroid.pos[0] < 0 || asteroid.pos[0] > 800 || asteroid.pos[1] < 0 || asteroid.pos[1] > 600 )
			{
				game.asteroids.splice( game.asteroids.indexOf( asteroid ), 1 );
				game.asteroids.push(Asteroids.Asteroid.randomAsteroid(800, 600));
			}
		});
	}

	Game.prototype.draw = function() {
		var game = this;
		this.ctx.clearRect(0,0,800, 600);
		this.ctx.drawImage(this.img, 0, 0);
		this.ship.draw(game.ctx);
		this.asteroids.forEach(function(element) {element.draw(game.ctx)});
		this.bullets.forEach(function(element) {element.draw(game.ctx)});
	}

	Game.prototype.fireBullet = function () {
		var game = this;
		this.bullets.push(game.ship.fireBullet());
	}

	Game.prototype.move = function() {
		var game = this;
		this.asteroids.forEach(function(element) {element.move()});
		this.bullets.forEach(function(element) {element.move(game)});
		this.ship.move();

	}

	Game.prototype.removeBullet = function (bullet) {
		var game = this;
		game.bullets.splice( game.bullets.indexOf( bullet ), 1 );
	}

	Game.prototype.removeAsteroid = function (asteroid) {
		var game = this;
		game.asteroids.splice( game.asteroids.indexOf( asteroid ), 1 );
	}

	Game.prototype.start = function() {
		var game = this;
		game.bindKeyHandlers();
		game.timer = setInterval(game.step.bind(game), 30);
	}

  Game.prototype.step = function() {
  	this.move();
		this.draw();
		this.checkCollisions();
		this.checkInBounds();
  }

	Game.prototype.stop = function () {
		clearInterval(this.timer);
	}





})(this)