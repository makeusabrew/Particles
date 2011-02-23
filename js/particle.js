Particle = function() {
    var _x,
        _y,
        _vx,
        _vy,
        alpha;

    this.spawn = function(options) {
        _x = options.x;
        _y = options.y;
        _vx = options.vx;
        _vy = options.vy;
        console.log("particle spawned", options);
    };

    this.tick = function() {
        _vy += 0.15;

        _x += _vx;
        _y += _vy;

        if (_x < 0) {
            _x = _x;
            _vx = -_vx;
        } else if (_x > Engine.getWidth()) {
            _x = Engine.getWidth() - (_x - Engine.getWidth());
            _vx = -_vx;
        }

        if (_y > Engine.getHeight()) {
            _y = Engine.getHeight() - (_y - Engine.getHeight());
            _vy = -_vy;
        }
    };

    this.render = function() {
        var buffer = Engine.getBuffer();
        buffer.pixel(Math.floor(_x), Math.floor(_y), "rgb(255,255,255)");
    }
};

Particle.spawn = function(options) {
    if (typeof options === "undefined") {
        options = {
            x: Math.random() * 640,
            y: Math.random() * 480,
            vx: -5 + (Math.random() * 10),
            vy: -(Math.random() * 10)
        };
    }
    var p = new Particle();
    p.spawn(options);
    return p;
};
