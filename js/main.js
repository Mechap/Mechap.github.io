function draw() {
    var canvas = document.getElementById('canvas_example');
    var ctx = canvas.getContext('2d');

    ctx.fillRect(30, 30, 100, 100);

    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ctx.save();

            ctx.translate(10 + j * 50, 10 + i * 50);
            ctx.fillRect(0, 0, 100, 100);
            ctx.restore();
        }
    }
}