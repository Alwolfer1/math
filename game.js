
player1score=0;
player2score=0;

player2name=localStorage.getItem("player2");
player1name=localStorage.getItem("player1");

document.getElementById("p1").innerHTML=player1name;
document.getElementById("p2").innerHTML=player2name;

document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question- " + player1name;
document.getElementById("answer").innerHTML="Answer- " + player2name;


function send(){
    number1=document.getElementById("N1").value;
    number2=document.getElementById("N2").value;
    actualAns=parseInt(number1)*parseInt(number2);

    question="<h4>" + number1 +"X" + number2 + "</h4>";
    input="<br>Answer : <input type='text' id='answer'>";
    button="<br><br><button class='btn btn-info' onclick='check()>Check</button>'"
    row = question + input + button;

    document.getElementById("output").innerHTML= row;
    document.getElementById("N1").value="";
    document.getElementById("N2").value="";
}

questionTurn="player1";
answerTurn="player2";
getAns=document.getElementById("answer").value;
if(getAns == actualAns){
    if(answerTurn == "player1")
    {
        player1score=player1score + 1;
        document.getElementById("p1score").innerHTML= player1score;
    }
    else{
        player2score= player2score+1;
        document.getElementById("p2score").innerHTML=player2score;
    }
    if(questionTurn == "player1"){
        questionTurn="player2";
        document.getElementById("question").innerHTML="Question Turn- " + player2name;
    }
    else{
        questionTurn="player1";
        document.getElementById("question").innerHTML="Question Turn - " + player1name;                                                                                                                                                                                            
    }
    if(answerTurn == "player1"){
        answerTurn="player2";
        document.getElementById("answer").innerHTML="Answer Turn - " + player2name;
    }
    else{
        answerTurn="player1";
        document.getElementById("answer").innerHTML="Anser Turn - " + player1name;
    }
    
    


}


