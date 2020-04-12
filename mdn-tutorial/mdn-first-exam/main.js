const customName=document.querySelector("#customname");
const randomize=document.querySelector(".randomize");
const story=document.querySelector(".story");


function randomValueFromArray(array){
    const random=Math.floor(Math.random()*array.length);
    return array[random];
}

var storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

insertX=["Wily the Gobin", "Big Daddy", "Father Christmas"];
insertY=["the soup kitchen", "Disneyland", "the White House"];
insertZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


randomize.addEventListener('click',result);

function result(){
    
    let newStory=storyText;
    let xItem=randomValueFromArray(insertX);
    let yItem=randomValueFromArray(insertY);
    let zItem=randomValueFromArray(insertZ);

    newStory=newStory.replace(':insertx:',xItem);
    newStory=newStory.replace(':insertx:',xItem);
    newStory=newStory.replace(':inserty:',yItem);
    newStory=newStory.replace(":insertz:",zItem);


    if(customName.value!=' '){
        let name=customName.value;
        newStory=newStory.replace('Bob',name);
     }

     if(document.getElementById("uk").checked){
         let weight=Math.random(300);
         let temperature=Math.round(94);
         newStory = newStory.replace('94 fahrenheit',temperature);
         newStory = newStory.replace('300 pounds',weight);
     }
    
   
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
