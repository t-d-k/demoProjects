
async function doHillClimb(func) {
    let x = Math.random() * (max_x - min_x) + min_x;
    // let x = 0;
    let prevx = x;
    let prevY = func(x);
    let decX = x - 1;
    let incX = x + 1;
    let xChanged = false;
    do {
        y = func(x);
        xChanged = false;
        if (decX >= min_x) {
            if (func(decX) >= y) {
                x = decX;
                xChanged = true;
            }
        }
        if (incX <= max_x) {
            if (func(incX) >= y) {
                x = incX;
                xChanged = true;
            }
        }

        if (!xChanged) {
            doDrawLine(x, y, "purple", false);
            infoEl.innerHTML += `<p>max found by hill climb: ${y}</p>`;
            break;
        } else {
            let drawLine = convToPixelX(x) > convToPixelX(prevx);
            if (drawLine) {
                doDrawLine(prevx, prevY, "white", true);
                doDrawLine(x, y, "green", false);
                //animate
                await delay(STEP_DELAY);
                prevx = x;
                prevY = y;
            }
        }

        decX = x - 1;
        incX = x + 1;
    } while (true);

}