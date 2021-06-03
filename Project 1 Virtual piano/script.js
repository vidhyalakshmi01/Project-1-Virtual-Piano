const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

function changeColour(){
  var array=[];
  for (var i = 0; i < 7; i++) {
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  var mycolor="rgb("+r+","+g+","+b+")";
  array[i]=mycolor;
  
   }
  
  document.getElementsByClassName("key black")[0].style.background=array[0];
  document.getElementsByClassName("key black")[1].style.background=array[0];
  document.getElementsByClassName("key black")[2].style.background=array[0];
  document.getElementsByClassName("key black")[3].style.background=array[0];
  document.getElementsByClassName("key black")[4].style.background=array[0];
  document.getElementsByClassName("key white")[0].style.background=array[1];
  document.getElementsByClassName("key white")[1].style.background=array[1];
  document.getElementsByClassName("key white")[2].style.background=array[1];
  document.getElementsByClassName("key white")[3].style.background=array[1];
  document.getElementsByClassName("key white")[4].style.background=array[1];
  document.getElementsByClassName("key white")[5].style.background=array[1];
  document.getElementsByClassName("key white")[6].style.background=array[1];
  
  }