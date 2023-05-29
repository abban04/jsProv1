function backgroundChange(){
    document.body.style.backgroundColor="#3498db";
}

function goodvibeShower(){
    let text = document.getElementById('demo').innerHTML="Be the best version of you!";
}

function time(){
    var exactTime = Date()
    let date = document.getElementById('time').innerHTML=exactTime;  
}

function changeImg(){
    document.getElementById("pic").src="dice-6.png";
}

function hideImg(){
    document.getElementById("pic").style.display = "none";
}

function showImg(){
    document.getElementById("pic").style.display = "inline";
    document.getElementById("pic").src="dice-6.png";
}