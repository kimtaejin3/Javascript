const submit=document.querySelector(".submit");
const guessValue=document.querySelector(".inputNumber");
const note=document.querySelector("#isCorrect");
const record=document.querySelector("#record");
const ramdomNumber=30;

let guessCount=1;

function valueSize(value){
    record.innerHTML=value;
    if(value<randomNumber){//js는 다 문자열로 받음.-> 적용안됨.
        const label=document.createElement("div");
        label.innerHTML="wrong!!";
        label.style.backgroundColor="red";
        document.body.appendChild(label);
        guessValue.value="";
    }
    else if(value===ramdomNumber){

    }
    else{

    }
}

submit.addEventListener("click",function guess(){

    let value=guessValue.value;
    valueSize(value)
});