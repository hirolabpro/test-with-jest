//YEN to POUNDS 

test("One Yen should be 0.8 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

   
    const expected = 3.5 * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})




