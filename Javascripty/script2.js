var ans;
var computer;
var youwin = "You Win";
var youlose = "Wrong Guess";
let output = document.getElementById('winorlose');
let mychances = document.getElementById('yourchances');
var newe = 0;
var questionasked;
var questionlist = ["the red liquid that is sent around the body by the heart",
    "the mixture of gases that surrounds the Earth and that we breathe",
    "a collection or mass, especially of something that cannot be counted",
    "something that lives and moves, but is not a human, bird, insect or fish",
    "the receipt and response to a letter, question or phone call",
    "the way that someone behaves",
    "the whole physical structure that forms a person or animal",
    "the air that goes into and out of your lungs",
    "A cheap place to live",
    "A soup made with chicken and noodles, sometimes popularly regarded as a remedy for all ailments or valued for its restorative properties"];
var anslist = ["blood", "air", "amount", "animal", "answer", "behavior", "body", "breath", "india", "chicken noodle soup"]
computer = Math.floor(Math.random() * questionlist.length);
questionasked = questionlist[computer];
ans = anslist[computer];
// document.getElementById("displayquestion").innerText = questionasked;

var chances = 3;
var upperBtn = document.getElementsByClassName("to-upper-btn")[0];
upperBtn.addEventListener("click", function () {
    let ansgiven = document.getElementById("enterans").value;
    //ansgiven.to
    if (ansgiven.toLowerCase() === ans) {
        output.innerHTML = "You win";
        mychances.innerHTML = "";
        newe = 1;
        // let win = document.getElementById("displayquestion");
    }
    else {
        output.innerHTML = "Oops";
        chances--;
        mychances.innerHTML = 'You have  ' + chances + ' chances left';
    }
    if (chances == 0) {
        output.innerHTML = "Oops! out of chances! You Lose";
        mychances.innerHTML = 'Correct Answer is = ' + ans;
        newe = 1;
    }
});
let que = document.getElementById("displayquestion");
console.log(que);
function toggleClock() {
    que.innerHTML = questionasked;
}
var newgamw = document.getElementsByClassName("lastbutton")[0];
    newgamw.addEventListener("click", function () {
        if(newe==1)
        {
        computer = Math.floor(Math.random() * 9);
        console.log(computer);
        questionasked = questionlist[computer];
        console.log(questionasked);
        ans = anslist[computer];
        que.innerHTML = questionasked;
        chances=3;
        newe=0;
        }
        //upperBtn();
    })