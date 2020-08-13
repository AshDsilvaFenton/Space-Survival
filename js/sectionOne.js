//Sri

function room0(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Welcome to Space Survival! <br> Move forward in any direction to play."
    //Change the Pic
    thepic.src = "images/Earth_and_Moon.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room1)
    document.getElementById("E").addEventListener("click",room1)
    document.getElementById("S").addEventListener("click",room1)
    document.getElementById("W").addEventListener("click",room1)
}

function room1(){
    document.getElementById("story").innerHTML = 
    "We have received information from Control, that our ship is about to explode. <br>Go through the North door to access the Green Keycard, then get back here and go east <br>An old dusty key pad lies nearby <br> It is a 7 letter password. <br> Clue: Largest planet in the milky way!"
    thepic.src = "images/space1.jpg"
    removeEvents();
    document.getElementById("N").addEventListener("click",room2)
    document.getElementById("E").addEventListener("click",room4)
    document.getElementById("S").addEventListener("click",room3)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room2(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "This room holds the key to your escape! <br> Congratulations, You have got the Green Key card! <br> Make your way South...<br> Once you reach the start again, head East!"
    let x  = prompt("What is the password")
    if(x == "Jupiter"){
        GreenKey = true
        alert("You have picked up the GreenKey")
    }else{
        alert("That is not the passcode. You need to renter the room to try again")
    }
    thepic.src = "images/keypad.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room1)
    document.getElementById("W").addEventListener("click",wrongWay)
}



function room3(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "This room has low oxygen levels! Head North to complete the challenge!."
    //Change the Pic
    thepic.src = "images/space3.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room1)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room4(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Have you collected the key by completing the challenge? If so, Head East <br> If not, head back West and complete the challenge."
    //Change the Pic
    thepic.src = "images/space3.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (GreenKey){
        document.getElementById("N").addEventListener("click",wrongWay) //Room unlocked
        document.getElementById("E").addEventListener("click",room5)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room1)
    }else{
        alert("You have no key")
        document.getElementById("N").addEventListener("click",wrongWay) //Room not unlocked
        document.getElementById("E").addEventListener("click",wrongWay)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room1)
    }

}

function room5(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Congratulations! This room will lead you to safety...Exit East!"
    //Change the Pic
    thepic.src = "images/space5.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room6)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room4)
}