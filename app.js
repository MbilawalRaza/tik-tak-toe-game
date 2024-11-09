var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var box5 = document.getElementById('box-5')
var box6 = document.getElementById('box-6')
var box7 = document.getElementById('box-7')
var box8 = document.getElementById('box-8')
var box9 = document.getElementById('box-9')
var btn = document.getElementById("button")
var disble =  document.getElementsByClassName("disabled");
var xturn=document.getElementById("xele")
var Oturn=document.getElementById("oele")
var flag = true
var countX= 0
var countO=0
function clickCell(ele) {
    if (flag) {
        ele.innerHTML = 'X'
        flag = false
        ele.classList.add('disabled')
        countX++
        
    }
    else {
        ele.innerHTML = 'O'
        flag = true
        countO++

    }
    if (box1.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X' ||
        box4.innerHTML == 'X' && box5.innerHTML == 'X' && box6.innerHTML == 'X' ||
        box7.innerHTML == 'X' && box8.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box1.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X' ||
        box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X' ||
        box3.innerHTML == 'X' && box6.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box1.innerHTML == 'X' && box5.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box3.innerHTML == 'X' && box5.innerHTML == 'X' && box7.innerHTML == 'X'

    ) {

        alert("x has won")
        btn.style = display = "block"

    }
    else if (box1.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X' ||
        box4.innerHTML == 'O' & box5.innerHTML == 'O' && box6.innerHTML == 'O' ||
        box7.innerHTML == 'O' && box8.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box1.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O' ||
        box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O' ||
        box3.innerHTML == 'O' && box6.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box1.innerHTML == 'O' && box5.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box3.innerHTML == 'O' && box5.innerHTML == 'O' && box7.innerHTML == 'O') {
        alert("O is won")
         btn.style = display = "block"
    }

    else if (  box1.innerHTML !== '' && box2.innerHTML !== '' && box3.innerHTML !== '' &&
        box4.innerHTML !== '' && box5.innerHTML !== '' && box6.innerHTML !== '' &&
        box7.innerHTML !== '' && box8.innerHTML !== '' && box9.innerHTML !== ''){
alert("game is tie")
   btn.style = display = "block"
    }
xturn.innerHTML=countX +" -(X turn)"
Oturn.innerHTML=countO  +" -(O turn)"
}


function restartbutton(ele){
   box1.innerHTML =""
  box2.innerHTML =""
  box3.innerHTML =""
  box4.innerHTML =""
  box5.innerHTML =""
  box6.innerHTML =""
  box7.innerHTML =""
  box8.innerHTML =""
  box9.innerHTML =""
  xturn.innerHTML="-X turn"
  Oturn.innerHTML="-O turn"
  countO=0
  countX=0
  btn.style.display='none'
 box1.classList.remove('disabled');
 box2.classList.remove('disabled');
 box3.classList.remove('disabled');
 box4.classList.remove('disabled');
 box5.classList.remove('disabled');
 box6.classList.remove('disabled');
 box7.classList.remove('disabled');
 box8.classList.remove('disabled');
 box9.classList.remove('disabled');


}



