async function markMaxes(func) {

    // do every value, not just pixel min
    pixVal = 0;
    ctx.strokeStyle = "green";

    ctx.lineWidth = LINE_WIDTH;
    let prevY = MIN_Y;
    let prevY2 = prevY;
    let lastMaxY = prevY;
    let prevx = min_x;
    let prevx2 = prevx;
    let lastMax = false;
    let lastMaxX = min_x;
    for (x = min_x; x < max_x; x++) {
        // for (x = 0; x < 50; x++) {
        y = func(x);
        // only draw lines per pixel. pixWidth maybe < or > 1
        drawLine = convToPixelX(x) > convToPixelX(x - 1);

        if (drawLine) {
            ctx.beginPath();
             //erase
            doDrawPointer(prevx, prevY, "white", true);
            if (lastMax) {
                doDrawLine(prevx2, prevY2, "red", false);              
            }
            lastMax = false;
            doDrawPointer(x, y, "green", false)
            //animate
            await delay(STEP_DELAY);
        }
        if ((prevY >= prevY2) && (prevY >= y)) {
            lastMax = true;
            lastMaxY = prevY;
            lastMaxX = prevx;
            infoEl.innerHTML += `<p>local max ${prevY}</p>`;
        }
        prevY2 = prevY;
        prevY = y;
        prevx2 = prevx;
        prevx = x;
    };
    doDrawPointer(prevx, prevY, "white", true);
    if (!lastMax) {
        // eraseLine(prevx2, prevY2);
        doDrawPointer(prevx2, prevY2, "white", true);
    }

}

