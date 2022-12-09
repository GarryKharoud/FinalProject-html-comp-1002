var you;
var opponent;
var myscore = 0;
var opponentScore = 0;
var itsatie=0;
var anss = ["rock", "paper", "scissors"];

window.onload = function() 
{
    for (let i = 0; i < 3; i++) 
    {
        let myanss = document.createElement("img");
        myanss.id = anss[i];
        myanss.src = anss[i] + ".png";
        myanss.addEventListener("click", selectChoice);
        document.getElementById("anss").append(myanss);
    }
}
function selectChoice() 
{
    opponent = Math.floor(Math.random() * 3);
    var store;
    if(opponent===0)
    {
        store="rock";
    }
    else if(opponent==1)
    {
        store="paper";
    }
    else if(opponent==2)
    {
        store="scissors";
    }
    you = this.id;
    document.getElementById("myans").src = you + ".png";
    document.getElementById("compans").src = store + ".png";

    //check for winner

//rock
if(opponent===0)
{
    if(you==="rock")
    {
        itsatie++;
    }
    else if(you==="paper")
    {
        myscore++;
    }
    else if(you==="scissors")
    {
        opponentScore++;
    }
}
if(opponent===1)
{
    if(you==="rock")
    {
        opponentScore++;
    }
    else if(you==="paper")
    {
        itsatie++;
    }
    else if(you==="scissors")
    {
        myscore++;
    }
}
if(opponent===2)
{
    if(you==="rock")
    {
        myscore++;
    }
    else if(you==="paper")
    {
        opponentScore++;
    }
    else if(you==="scissors")
    {
        itsatie++;   
    }
}
    document.getElementById("myscore").innerText = myscore;
    document.getElementById("computerscore").innerText = opponentScore;
    document.getElementById("tie").innerText = itsatie;
}