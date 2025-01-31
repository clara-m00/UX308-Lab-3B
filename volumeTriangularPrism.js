// Calculate the volume of an equilateral triangle prism from the length of one side of the triangle and the length of the flat edge

function volumeTriangularPrism(baselength, length) {
    let volume = Math.sqrt(3)/4 * baselength**2 * length;
    return volume; 
}

let baselength = 5
let length = 14

console.log (`An equilateral triangular prism with a length of ${length} cm and a base side length of ${baselength} cm has a volume of ${volumeTriangularPrism(baselength, length)}.`)

export {volumeTriangularPrism}