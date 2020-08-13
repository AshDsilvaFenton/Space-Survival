//Ash D'silva Fenton

function room16(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered a Chamber, 4 doors around you, you need 3 keys to Exit"
    //Change the Pic
    thepic.src = "images/room16.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (keyPurple){
        document.getElementById("N").addEventListener("click",keyConfirm)
        document.getElementById("E").addEventListener("click",room18)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
    }else {
        alert("Find All Keys to ESCAPE!")
        document.getElementById("N").addEventListener("click",room17)
        document.getElementById("E").addEventListener("click",room18)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
        
    }
}

function room16A(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered a Chamber, 4 doors around you, you need 3 keys to Exit"
    //Change the Pic
    thepic.src = "images/room16.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (keyPurple, keyBlack){
        document.getElementById("N").addEventListener("click",keyConfirm)
        document.getElementById("E").addEventListener("click",keyConfirm)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
    }else{
        alert("Find All Keys to ESCAPE!")
        document.getElementById("N").addEventListener("click",room17)
        document.getElementById("E").addEventListener("click",room18)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
        
    }
}

function room16B(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered a Chamber, 4 doors around you, you need 3 keys to Exit"
    //Change the Pic
    thepic.src = "images/room16.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (keyPurple, keyBlack, keyOrange){
        document.getElementById("N").addEventListener("click",keyConfirm)
        document.getElementById("E").addEventListener("click",keyConfirm)
        document.getElementById("S").addEventListener("click",keyConfirm)
        document.getElementById("W").addEventListener("click",room16C)
    }else{
        alert("Find All Keys to ESCAPE!")
        document.getElementById("N").addEventListener("click",room17)
        document.getElementById("E").addEventListener("click",room18)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
        
    }
}

function room16C(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered a Chamber, 4 doors around you, you need 3 keys to Exit"
    //Change the Pic
    thepic.src = "images/room16.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (keyPurple + keyBlack + keyOrange){
        document.getElementById("N").addEventListener("click",keyConfirm)
        document.getElementById("E").addEventListener("click",keyConfirm)
        document.getElementById("S").addEventListener("click",keyConfirm)
        document.getElementById("W").addEventListener("click",room20)
    }else{
        alert("YOU HAVE ALL THE KEYS, MAKE YOUR WAY TO THE EXIT!")
        document.getElementById("N").addEventListener("click",room17)
        document.getElementById("E").addEventListener("click",room18)
        document.getElementById("S").addEventListener("click",room19)
        document.getElementById("W").addEventListener("click",keyMissing)
        
    }
}




function room17(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered the northern part of the chamber, you find the Purple Key"
    keyPurple = true;
    //Change the Pic
    thepic.src = "images/room17.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room16)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room18(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered the eastern part of the chamber, you find the Black Key"
    keyBlack = true;
    //Change the Pic
    thepic.src = "images/room18.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room16A)
}

function room19(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have entered the southern part of the chamber, you find a secret combination which gives you all 3 KEYS!, find the exit immediately!"
    keyOrange = true;
    //Change the Pic
    thepic.src = "images/room19.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room16B)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room20(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "CONGRATULATIONS YOU HAVE ESCAPED!"
    //Change the Pic
    thepic.src = "images/room20.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",escapedEnd)
    document.getElementById("E").addEventListener("click",escapedEnd)
    document.getElementById("S").addEventListener("click",escapedEnd)
    document.getElementById("W").addEventListener("click",escapedEnd)
}
