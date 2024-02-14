

// pseudo code:
// T = 1


// function make_move(x, T){
//     if (random> 0.5) {
//         new_x = x+1
//     }else{
//         new_x = x-1
//     }

//     delta=func[new_x]-func[x]

//     if(delta >0){
//         return new_x
//     }else{
//         r=random.random()
//         factor=(-1*delta)/(T*1.0)
//         if(r >= (math.e**(factor))){
//             return new_x
//         }
//         return x
//     }
// main()
//     init_pos=random 
//     x_best=init_pos
//     T=1
//    k = 1
//    while (T > low){

//         x=x_best
//         x= make_move(x,T)
//         if( func(x) > func( x_best){
//             x_best=x
//         }
//         update_temperature(T, k++)
//         return x_best
//     }

function makeMove(func, x, temp) {
    const rnd = Math.random();
    let new_x = (rnd > 0.5) ? x + 1 : x - 1;
    new_x = Math.min(new_x, max_x);
    new_x = Math.max(new_x, min_x);
    const delta = func(new_x) - func(x);

    if (delta > 0) {
        return new_x;
    } else {
        //sometimes make move even to smaller value
        const r = Math.random();
        // the worse the move the less likely
        const factor = (delta * 10) / (temp)
        if (r <= (Math.exp(factor))) {
            return new_x;
        }
        return x
    }
}

function update_temperature(temp, k) {
    //  T1=T/log(k+1);

    return temp * (1 - (k / 100000));
}

async function doSimAnneal(func) {

    let x = Math.random() * (max_x - min_x) + min_x;
    let T = 1;
    let k = 1;
    let x_best = x;
    let prevx = x;
    let prevY = func(x);
    while (T > 0.00000000000000001) {
        x = makeMove(func, x, T);
        y = func(x);
        if (y > func(x_best)) {
            x_best = x;
        }
        T = update_temperature(T, k);
        k++;
        let drawLine = convToPixelX(x) != convToPixelX(prevx);
        if (drawLine) {
            doDrawPointer(prevx, prevY, "white", true);
            doDrawPointer(x, y, "green", false);
            //animate
            await delay(STEP_DELAY);
            prevx = x;
            prevY = y;
        }
    }
    doDrawPointer(prevx, prevY, "white", true);
    doDrawLine(x_best, y, "purple", false);
    console.log('steps: ' + k);
    infoEl.innerHTML += `<p>max found by simulated annealing climb: ${y}</p>`;
}