//var canv = document.getElementById("canv1"),
//cx = canv.getContext("2d");
//canv.width=400;
//canv.height=800;
//cx.fillStyle = "magenta";
//cx.fillRect(50,50,200,200);
imgToCanvas();
function imgToCanvas() {
var canv1 = document.getElementById('canv1');
 var cx = canv1.getContext('2d');     
 var grd = cx.createLinearGradient(0,90,0,0); 
canv1.height = 80;
canv1.width = 87;


//alert('sdgsd');
//cx.fillStyle="#ffffff";
	//cx.strokeStyle='#f82370';
  cx.strokeStyle=grd;

 
grd.addColorStop(0,"#f25e2a");
grd.addColorStop(1,"#f82370");

// Fill with gradient
//ctx.fillStyle = grd;
  //////////  
   // cx.strokeRect(5, 4, 76, 54);
	cx.lineWidth = 3; // толщина линии
cx.moveTo(9, 4); //передвигаем перо
cx.lineTo(77, 5); //рисуем линию
cx.moveTo(82, 10); //передвигаем перо
cx.lineTo(82, 55); //рисуем линию
cx.moveTo(77, 60); //передвигаем перо
cx.lineTo(9, 60); //рисуем линию
cx.moveTo(4, 55); //передвигаем перо
cx.lineTo(4, 9); //рисуем линию
cx.stroke();
cx.beginPath();
cx.arc(9, 9, 5, 3.14/180*-90, degreesToRadians(180), true);
cx.stroke();
cx.beginPath();
cx.arc(77, 10, 5, 3.14/180*0, degreesToRadians(-90), true);
cx.stroke();
cx.beginPath();
cx.arc(77, 55, 5, 3.14/180*-270, degreesToRadians(0), true);
cx.stroke();
cx.beginPath();
cx.arc(9, 55, 5, 3.14/180*-180, degreesToRadians(90), true);
cx.stroke();
//функция для дуги
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
//линия снизу
cx.moveTo(4, 50); //передвигаем перо
cx.lineTo(82, 50); //рисуем линию
cx.stroke();
//линия снизу + точка
cx.moveTo(28, 44); //передвигаем перо
cx.lineTo(67, 44); //рисуем линию
cx.stroke();
//точка
cx.beginPath();
cx.arc(21, 44, .5, 0, 2 * Math.PI);
cx.stroke();

//слэш

cx.lineWidth = 3;
cx.moveTo(38, 40); //передвигаем перо
cx.lineTo(48, 10); //рисуем линию
cx.stroke();


//<

cx.moveTo(32, 35); //передвигаем перо
cx.lineTo(20, 26); //рисуем линию
cx.stroke();


//<
cx.moveTo(32, 15); //передвигаем перо
cx.lineTo(20, 26); //рисуем линию
cx.stroke();
//>
cx.moveTo(53, 35); //передвигаем перо
cx.lineTo(65, 26); //рисуем линию
cx.stroke();
//>
cx.moveTo(53, 15); //передвигаем перо
cx.lineTo(65, 26); //рисуем линию
cx.stroke();
//линия дно
cx.moveTo(24, 74); //передвигаем перо
cx.lineTo(62, 74); //рисуем линию
cx.stroke();
//ножки
cx.beginPath();
cx.moveTo(30, 74);
cx.quadraticCurveTo(33, 70, 34, 60);//вторая точка
cx.lineWidth = 3;
cx.stroke();
//ножки
cx.beginPath();
cx.moveTo(55, 74);
cx.quadraticCurveTo(52, 70, 52, 60);//вторая точка
cx.lineWidth = 3;
cx.stroke();
// Non-rotated rectangle


}

