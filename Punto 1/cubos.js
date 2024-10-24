
//Cubo #1
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

function Dibujar1(){
    ctx.beginPath();
    ctx.moveTo(250, 500);//Origen
    ctx.lineTo(250, 450);
    /*
    ctx.lineTo(0, 0);    
    */
    ctx.lineTo(350, 400);
    ctx.lineTo(350, 450);
    ctx.lineTo(250, 500);
    ctx.lineTo(150, 450);
    ctx.lineTo(150, 350);
    ctx.lineTo(200, 375);
    ctx.lineTo(200, 425);
    ctx.lineTo(250, 450);
    ctx.moveTo(300, 425);
    ctx.lineTo(250, 400);
    ctx.lineTo(200, 425);
    ctx.moveTo(200, 375);
    ctx.lineTo(300, 325);
    ctx.lineTo(250, 300);
    ctx.lineTo(150, 350);
    ctx.moveTo(300, 325);
    ctx.lineTo(350, 400);
    ctx.moveTo(300, 425);
    ctx.lineTo(250, 350);
    ctx.lineTo(250, 400);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
}

Dibujar1();

//Cubo #2
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

function Dibujar2(){
    ctx2.beginPath();
    ctx2.moveTo(250, 500);//Origen
    ctx2.lineTo(250, 450);
    /*
    ctx2.lineTo(0, 0);    
    */
    ctx2.lineTo(300, 425);
    ctx2.moveTo(350, 450);
    ctx2.lineTo(250, 500);
    ctx2.lineTo(150, 450);
    ctx2.lineTo(150, 350);
    ctx2.lineTo(200, 375);
    ctx2.lineTo(200, 425);
    ctx2.lineTo(250, 450);
    ctx2.moveTo(300, 425);
    ctx2.lineTo(250, 400);
    ctx2.lineTo(200, 425);
    ctx2.moveTo(200, 375);
    ctx2.lineTo(250, 350);
    ctx2.moveTo(300, 325);
    ctx2.lineTo(250, 300);
    ctx2.lineTo(150, 350);
    ctx2.moveTo(300, 325);
    ctx2.lineTo(350, 350);
    ctx2.lineTo(350, 450);
    ctx2.moveTo(300, 425);
    ctx2.lineTo(300, 375);
    ctx2.lineTo(350, 350);
    ctx2.moveTo(300, 375);
    ctx2.lineTo(250, 350);
    ctx2.lineTo(250, 400);
    ctx2.strokeStyle = 'blue';
    ctx2.lineWidth = 2;
    ctx2.stroke();
}

Dibujar2();

//Cubo #3
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

function Dibujar3(){
    ctx3.beginPath();
    ctx3.moveTo(250, 500);//Origen
    ctx3.lineTo(250, 450);
    /*
    ctx3.lineTo(0, 0);    
    */
    ctx3.lineTo(350, 400);
    ctx3.lineTo(350, 450);
    ctx3.lineTo(250, 500);
    ctx3.lineTo(150, 450);
    ctx3.lineTo(150, 350);
    ctx3.lineTo(200, 425);
    ctx3.lineTo(250, 450);
    ctx3.moveTo(300, 425);
    ctx3.lineTo(250, 400);
    ctx3.lineTo(200, 425);
    ctx3.moveTo(250, 350);
    ctx3.lineTo(300, 325);
    ctx3.lineTo(250, 300);
    ctx3.lineTo(150, 350);
    ctx3.moveTo(300, 325);
    ctx3.lineTo(350, 400);
    ctx3.moveTo(300, 425);
    ctx3.lineTo(250, 350);
    ctx3.lineTo(200, 325);
    ctx3.moveTo(250, 350);
    ctx3.moveTo(250, 400);
    ctx3.lineTo(200, 325);
    ctx3.strokeStyle = 'green';
    ctx3.lineWidth = 2;
    ctx3.stroke();
}

Dibujar3();


//Cubo #4
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

function Dibujar4(){
    ctx4.beginPath();
    ctx4.moveTo(250, 500);//Origen
    ctx4.lineTo(150, 450);
    ctx4.lineTo(150, 350);
    ctx4.lineTo(250, 500);
    ctx4.lineTo(350, 450);
    ctx4.lineTo(350, 400);
    ctx4.lineTo(300, 425);
    ctx4.lineTo(250, 500);
    ctx4.moveTo(300, 425);
    ctx4.lineTo(200, 425);
    ctx4.lineTo(300, 375);
    ctx4.lineTo(350, 400);
    ctx4.moveTo(300, 375);
    ctx4.lineTo(300, 325);
    ctx4.lineTo(250, 350);
    ctx4.lineTo(250, 400);
    ctx4.moveTo(300, 325);
    ctx4.lineTo(250, 300);
    ctx4.lineTo(150, 350);
    ctx4.moveTo(250, 350);
    ctx4.lineTo(200, 325);
    ctx4.lineTo(250, 400);
    /*
    ctx4.lineTo(0, 0);    
    */
    ctx4.strokeStyle = 'purple';
    ctx4.lineWidth = 2;
    ctx4.stroke();
}

Dibujar4();