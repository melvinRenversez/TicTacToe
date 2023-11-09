document.getElementById("loading").style.display="none";
document.getElementById("bigCont").style.display="none";
document.getElementById("userCont").style.display="none";
document.getElementById("oppNameCont").style.display="none";
document.getElementById("valueCont").style.display="none";
document.getElementById("whosTurn").style.display="none";

console.log("coucou");

const socket=io();

document.getElementById("find").addEventListener("click",function(e) {
    name=document.getElementById("name").value
    document.getElementById("user").innerHTML=name

    if(name == null || name == " "){
        alert("Please enter name: ");
    }else{

        socket.emit("find",{name:name});

        document.getElementById("loading").style.display="block";
        document.getElementById("find").style.disabled=true;


    }
})

socket.on("find", (e)=>{


    let allPlayersArray = e.allPlayers
    console.log(allPlayersArray)

    document.getElementById("userCont").style.display="block";
    document.getElementById("oppNameCont").style.display="block";
    document.getElementById("valueCont").style.display="block";
    document.getElementById("loading").style.display="none";
    document.getElementById("name").style.display="none";
    document.getElementById("find").style.display="none";
    document.getElementById("enterName").style.display="none";
    document.getElementById("bigCont").style.display="block";
    document.getElementById("whosTurn").style.display="block";
    document.getElementById("whosTurn").innerText = "X's Turn"

    let oppName
    let value

    const foundObj=allPlayersArray.find(obj=>obj.p1.p1name==`${name}` || obj.p2.p2name==`${name}`)

    foundObj.p1.p1name==`${name}` ? oppName=foundObj.p2.p2name : oppName=foundObj.p1.p1name;
    foundObj.p1.p1name==`${name}` ? value=foundObj.p1.p1value : value=foundObj.p2.p2value;

    document.getElementById("oppName").innerText=oppName
    document.getElementById("value").innerText=value

    
})