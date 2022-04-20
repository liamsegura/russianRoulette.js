//event listener to shuffle an array containing 1 bullet, and 5 blanks
document.getElementById('chamber').addEventListener('click', shuffle)

//event listener that iterates through the chamber index

//function that shuffles an array completely randomly once and stores this into a variable 
function shuffle(){
    let chamber = ['BANG!', 'Click...', 'Click...', 'Click...', 'Click...', 'Click...']
    let randomSpin = chamber
        //place each element in the array in an object, and give it a random sort key
         .map(value => ({ value, sort: Math.random() }))
        //sort using random key
         .sort((a, b) => a.sort - b.sort)
        //unmap to get the original objects 
         .map(({ value }) => value)
  console.log(randomSpin)
}

//function that iterates through the chambers index and checks weather the current index contains the bullet