//Fabio Oliveira

function room11()
{
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are now in the Level-3. <br> In the second room going east, There will be a closed door, <br> get the yellow cardkey here to open it, then go east."
    //Change the Pic
    thepic.src = "images/room11.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room13)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room13()
{
    //Change the Text
    document.getElementById("story").innerHTML = 
    " The O2 level is critical, if you want to survive, you must hurry, head east now"
    //Change the Pic
    thepic.src = "images/room12.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room14b)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room11)
    alert("NOW YOU HAVE THE YELLOWKEYCARD!")
}


function room14b()
{
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Door ahead! If you have the yellow cardkey open it, and make you way east. <br> If you did not get the yellow cardkey, <br> you will not have enough oxygene to go back and get it, and this will be the end "
    //Change the Pic
    thepic.src = "images/room14.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    if (yellowKey){
        document.getElementById("N").addEventListener("click",wrongWay)
        document.getElementById("E").addEventListener("click",room15)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room13)
    }else{
        document.getElementById("N").addEventListener("click",wrongWay)
        document.getElementById("E").addEventListener("click",room15)
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",room13)
    }
    
}

function room15()
{
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Good News! Last level ahead, keep going east."
    //Change the Pic
    thepic.src = "images/room15.png"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room16)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room14b)

    alert("THE DOOR IS NOW OPEN!")
}
