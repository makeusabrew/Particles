var Engine = (function() {
    var that = this,
        _fps = 60,
        _tickHandler = null,
        _buffer = null,
        _width,
        height,
        _entities = [];

    that.init = function(options) {
        _buffer = new Surface(options.buffer);
        _width = _buffer.getWidth();
        _height = _buffer.getHeight();
    }

    that.tick = function() {
        var i = 0,
        eCount = _entities.length;
        for (i; i < eCount; i++) {
            _entities[i].tick();
        }

        if (Math.floor(Math.random()*201) == 0) {
            // spawn!
            _entities.push(Particle.spawn());
        }

    }

    that.render = function() {
        var i = 0,
        eCount = _entities.length;
        
        _buffer.clear();

        for (i; i < eCount; i++) {
            _entities[i].render();
        }
    }

    that.start = function() {
        _tickHandler = setInterval(function() {
            that.tick();
            that.render();
        }, 1000 / _fps);
    }

    that.getBuffer = function() {
        return _buffer;
    }

    that.getWidth = function() {
        return _width;
    }

    that.getHeight = function() {
        return _height;
    }
    
    return that;
})();
