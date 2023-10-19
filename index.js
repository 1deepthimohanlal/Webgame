let key = Math.floor(Math.random() * 16) + 1;
let timeLeft = 10;
let timeInterval;
 document.getElementById("timeDisplay").style.visibility = "hidden";
 document.getElementById("txt").style.visibility = "hidden";
 document.getElementById("info").style.visibility = "hidden";
 document.getElementById("show").style.visibility = "hidden";
 document.getElementById('endScreen').style.display='none';
 document.querySelector("#start").addEventListener('click',function()
 {
    startGame();
    disable();
    ask();
    document.getElementById("txt").style.visibility = "visible";
    document.getElementById("show").style.visibility = "visible";
        
 }
 );

 function myStop()
 {
    clearInterval(timeInterval);
 }

function startGame()
{
    document.getElementById("timeDisplay").style.visibility = "visible";
        timeInterval = setInterval(function()
        {
            //timeDisplay.innerHTML = "Time Left: "+timeLeft;
            document.getElementById('timeDisplay').innerHTML="Time Left: "+timeLeft;
            timeLeft -= 1;
            if(timeLeft < 0)
            {
                myStop();
                go();
            }
        },1000);
        
}



function ask() {
    document.getElementById("info").style.visibility = "visible";
    var operationDiv = document.getElementById("qst");
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    var op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
    operationDiv.innerHTML = a+" " + op+" " + b +" =";
    let result = eval( a + op + b);
    document.querySelector("#show").addEventListener('click',function()
    {
        var answer = document.querySelector("input").value;
        if(answer == result)
        {
            document.getElementById("result").innerHTML = "Good Job , location of the key: "+key;
            //myStop();
        }
        else{
            // document.getElementById("result").innerHTML = "wrong";
            go();
            myStop();
        }
    });
}
function go()
{
    document.getElementById('endScreen').style.display='block';
    var txtEndTitle = document.getElementById("txtEndTitle");
    var txtEndMessage = document.getElementById("txtEndMessage");
    txtEndTitle.innerHTML = "BOOM !";
    txtEndMessage.innerHTML = "You lost";

}

let choosedNumber = 0;
let buttonList = document.querySelectorAll(".btn");
  buttonList.forEach(function(i){
    i.addEventListener("click", function(e){
    choosedNumber = e.target.innerHTML;
    console.log(choosedNumber);
     if (choosedNumber == key) 
     {
        document.getElementById('endScreen').style.display='block';
        document.getElementById("endScreen").style.backgroundImage = "url('./diffused.png')";
     }
     else{
        go();
     }
    });
  });
function disable(){
    document.querySelector("#start").disabled = true;
}






