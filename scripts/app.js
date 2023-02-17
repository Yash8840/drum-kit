const firstKey = document.getElementById('one');
console.log(firstKey.dataset.key);
const arr = Array.from(document.getElementsByClassName('key'));
console.log(arr);
let audioElement = new Audio();

// window.addEventListener('keydown' , (e)=>{
//   if(e.key=== 'a'){
//     audioElement.src = './sounds/boom.wav';
//     audioElement.play();
//   }
// });
// window.addEventListener('keydown' , (e)=>{
//   if(e.key=== 's'){
//     audioElement.src = './sounds/clap.wav';
//     audioElement.play();
//   }
// });
// window.addEventListener('keydown' , (e)=>{
//   if(e.key=== 'd'){
//     audioElement.src = './sounds/hihat.wav';
//     audioElement.play();
//   }
// });

let audioArray = Array.from(document.getElementsByTagName('audio'));
console.log(audioArray);


window.addEventListener('keydown' , (e)=>{
  
  let codeKey = e.keyCode;
  arr.forEach((element, idx)=>{
    if(element.dataset.key == codeKey){
      audioElement.src = audioArray[idx].src;
      audioElement.play();
      element.classList.add('playing');
      
    }
    // else{
    //    element.classList.remove('playing' );
    // }
               //OR
    setTimeout(()=>{
      element.classList.remove('playing');
    }, 70);                                   // but time in this depends on css, so not a good practice
  })});
 
  
