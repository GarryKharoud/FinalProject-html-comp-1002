var ans;
var computer;
var youwin="You Win";
var youlose="Wrong Guess";
let output=document.getElementById('winorlose');
let mychances=document.getElementById('yourchances');
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
var upperBtn = document.getElementsByClassName("to-upper-btn")[0];
    upperBtn.addEventListener("click", function(){
        let ansgiven=document.getElementById("enterans").value;
        if(ansgiven===ans)
        {
            output.innerHTML="You win";
        // let win = document.getElementById("displayquestion");
        }
        else
        {
            output.innerHTML="Oops";
            chances--;
        }
        if(chances==0)
        {
            output.innerHTML="Oops! out of chances! You Lose";
        }
        mychances.innerHTML='You have  ' +chances +' chances left';
});
let que = document.getElementById("displayquestion");
console.log(que);
function toggleClock()
{
    que.innerHTML = questionasked;
}