//event listener to shuffle an array containing 1 bullet, and 5 blanks
document.getElementById('chamber').addEventListener('click', chamberSpin)

//event listener that iterates through the chamber index
document.getElementById('trigger').addEventListener('click', trigger)
//function that shuffles an array completely randomly once and stores this into a variable 
function chamberSpin(){
    let chamber = ['BANG!', 'Click...', 'Click...', 'Click...', 'Click...', 'Click...']
    let randomSpin = chamber
        //place each element in the array in an object, and give it a random sort key
         .map(value => ({ value, sort: Math.random() }))
        //sort using random key
         .sort((a, b) => a.sort - b.sort)
        //unmap to get the original objects 
         .map(({ value }) => value)
         console.log('chamber spun')
         console.log(randomSpin)
  return randomSpin
}

//global variable for the index which increases if conditions aren't met
let index = 0

let chambered = chamberSpin()


//function that iterates through the chambers index and checks weather the current index contains the bullet
function trigger(){
    let chamber = chambered
if(chamber[index] == 'Click...'){
    console.log('ooof')
    console.log(chamber)
    return index += 1
}
else{
    console.log('dead')
    console.log(chamber)
    return index = 0
}
}