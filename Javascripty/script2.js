var ans;
var computer;
//var ansgiven;
var questionasked;
var questionlist = ["the red liquid that is sent around the body by the heart",
"the mixture of gases that surrounds the Earth and that we breathe",
"a collection or mass, especially of something that cannot be counted",
"something that lives and moves, but is not a human, bird, insect or fish",
"the receipt and response to a letter, question or phone call",
"the way that someone behaves",
"the whole physical structure that forms a person or animal",
"the air that goes into and out of your lungs"];
var anslist =["blood","air","amount","animal","answer","behavior","body","breath"]
computer = Math.floor(Math.random() * 7);
questionasked=questionlist[computer];
ans=anslist[computer];
// document.getElementById("displayquestion").innerText = questionasked;

var chances=3;
function newone()
{
    let ansgiven=document.getElementById("enterans").innerText;
    while(chances>0)
    {
        if(ansgiven===ans)
        {
        // let win = document.getElementById("displayquestion");
        console.log("Youn win");
        }
        else
        {
            chances--;
        }
    }
}
let que = document.getElementById("displayquestion");
console.log(que);
function toggleClock()
{
    que.innerHTML = questionasked;
}