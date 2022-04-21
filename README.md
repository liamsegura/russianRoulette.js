# russianRoulette.js
Russian roulette using a randomly shuffled array chamber

After looking around, I was unable to find this being correctly made using a randomly generated array as the chamber rather than at the click of a button: give a random number between 6...
This doesn't make sense as when playing this game, you dont pull the trigger once, and then spin the chamber again. You continue with the same chamber that was spun originally.

I started by creating a function that would shuffle the array containing strings at random using the Schwartzian transform technique. 

From this, I then created a trigger function which when clicked, will check the current index of the chamber's array and see whether it contains the bullet.
If the current index does not contain a bullet, it will increment the global index variable by 1. 

Once the player inevitably reaches the bullet however, the game will reset and you are required to spin the chamber and start again.

