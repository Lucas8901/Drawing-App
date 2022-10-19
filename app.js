const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEL = document.getElementById('color');
const clearEL = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressend = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) =>{
  isPressend = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) =>{
  isPressend =false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) =>{
  if(isPressend){
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function drawCircle(x, y){
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen(){
  sizeEL.innerText = size
}

colorEL.addEventListener('change', (e) => color = e.target.value)

increaseBtn.addEventListener('click', ()=>{
  size +=5

  if(size > 50){
    size = 50
  }

  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', ()=>{
  size -=5

  if(size < 5){
    size = 5
  }

  updateSizeOnScreen()
})

clearEL.addEventListener('click',() => ctx.clearRect(0,0, canvas.width, canvas.height))

