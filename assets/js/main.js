//event listener to shuffle an array containing 1 bullet, and 5 blanks
document.getElementById('chamber').addEventListener('click', spinChamber)

//event listener that iterates through the chamber index
document.getElementById('trigger').addEventListener('click', trigger)

//global variable for the index which increases if conditions aren't met
let index = 0
let spanChamberGlobal = undefined

function spinChamber(){ 
    let chamber = ['BANG!', 'Click...', 'Click...', 'Click...', 'Click...', 'Click...']
    let spunChamber = chamber
        //place each element in the array in an object, and give it a random sort key
         .map(value => ({ value, sort: Math.random() }))
        //sort using random key
         .sort((a, b) => a.sort - b.sort)
        //unmap to get the original objects 
         .map(({ value }) => value)
         console.log('Chamber loaded and spun')
         console.log(spunChamber)
         spanChamberGlobal = spunChamber
    }

//function that iterates through the chambers index and checks weather the current index contains the bullet
function trigger(){
let chamber = spanChamberGlobal
if(chamber == undefined){
    console.log('Load chamber')
}
else if(chamber[index] == 'Click...'){
    console.log('Click...')
    console.log(chamber)
    index++
}
else{
    console.log('BANG!')
    console.log(chamber)
    index = 0
    spanChamberGlobal = undefined

}
}