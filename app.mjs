
import rect from './rectangle.mjs';

function solverect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l,w,
        
        (err, rectangle) => {
            if(err){
                console.log('ERROR: ', err.message);
            }
            else{
            console.log(`Area of rectangle: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle: ${rectangle.perimeter()}`);
            }
        }

    )

    console.log('this statement is logged after the call to rect()');
}

solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(5,-3);
