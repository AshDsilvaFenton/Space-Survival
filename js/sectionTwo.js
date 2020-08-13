//Fabio Oliveira
function room6(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You have made to Level-2, now head east"
    //Change the Pic
    thepic.src = "images/Spaceship-interior.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room7)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room7(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You are doing well, now go north"
    //Change the Pic
    thepic.src = "images/modular-spaceship-interior.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room8)
    document.getElementById("E").addEventListener("click",room6)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room8(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    
    "The south door is already on fire, you must hurry! <br> There is a door north, but you need to go east and get the keycard to open it."
    //Change the Pic
    thepic.src = "images/ship_interior_onfire.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room10)
    document.getElementById("E").addEventListener("click",room9)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}
function room8b(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You got the keycard, now go north."
    //Change the Pic
    thepic.src = "images/ship_interior_onfire.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room10)
    document.getElementById("E").addEventListener("click",room9)
    document.getElementById("S").addEventListener("click",room7)
    document.getElementById("W").addEventListener("click",wrongWay)
}

//Example of a locked room
function room10(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "The door is locked, do you have the keycard?If yes, go north now!"
    //Change the Pic
    thepic.src = "images/metal-sliding-door.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links based on Key
    if (redKey){
        document.getElementById("N").addEventListener("click",room10b) //Room unlocked
        document.getElementById("E").addEventListener("click",wrongWay)
        document.getElementById("S").addEventListener("click",room8)
        document.getElementById("W").addEventListener("click",wrongWay)
    }else{
        alert("You have no keycard, head south and go east")
        document.getElementById("N").addEventListener("click",room10) //Room not unlocked
        document.getElementById("E").addEventListener("click",wrongWay)
        document.getElementById("S").addEventListener("click",room8)
        document.getElementById("W").addEventListener("click",wrongWay)
    }

}

//Example of picking up an item
function room9(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "You see a red keycard, pick it up and head back west"
     redKey = true;
    //Change the Pic
    thepic.src = "images/hand-holding-card.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room8b)
}
//Example of Death
function roomx(){
    alert("The ship exploded your are dead")
    //Change the Text
    document.getElementById("story").innerHTML =
     "You are dead choose any direction to go back to the start"
    //Change the Pic
    thepic.src = "images/astronaut_adrift.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room1)
    document.getElementById("E").addEventListener("click",room1)
    document.getElementById("S").addEventListener("click",room1)
    document.getElementById("W").addEventListener("click",room1)
}

function room10b(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
     "The door is now open. <br> You have made to level-3, go strait north!"
    //Change the Pic
    thepic.src = "images/futuristic-corridor.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room11)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

