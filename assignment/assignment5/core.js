function windowload(){
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}

window.onload = windowload;

var count = 1;

function postFunction(){
    if (count == 1){
        document.getElementById("topic").innerHTML = document.getElementById("message").value;
    }
    if (count == 2){
        document.getElementById("reply1").innerHTML = document.getElementById("message").value;
    }
    if (count == 3){
        document.getElementById("reply2").innerHTML = document.getElementById("message").value;
        
    }
    document.getElementById("message").value = "";
    count ++;
}

function clearFunction(){
    count = 1;
    document.getElementById("topic").innerHTML = "&nbsp";
    document.getElementById("reply1").innerHTML = "&nbsp";
    document.getElementById("reply2").innerHTML = "&nbsp";
}