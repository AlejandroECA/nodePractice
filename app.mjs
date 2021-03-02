
import { area, perimeter } from './rectangle.mjs';

function solverect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    if(l<=0 || w <=0){
        console.log(`Rectangle dimension must be greater than zero. Received: ${l} , ${w}`);
    }
    else{
        console.log(`Area of rectangle: ${area(l,w)}`);
        console.log(`Perimeter of rectangle: ${perimeter(l,w)}`);
    }
}

solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(5,-3);
