var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var width = screen.width;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    var width = screen.width;
new width = screen.widht - 70;
new Height = screen.Height - 300;

    /*Se o tamanho da tela for menos que 992 (significa 992px), então mude a width e height do canvas para a nova width e height*/
    if(width <992 ){
       document.getElementById("myCanvas").width = new_width;
       document.getElementById("myCanvas").height = new_height;
       document.body.style.overflow = "hidden";
    }

    //Mude o evento 'mousedown' para o evento 'touchstart'
    canvas.addEventListener("touchstart", my_touchstart);  
    //Mude a função para 'my_touchstart'  
    function my_touchstart(e)
    {
        //Coloque my_toustart no console.
    console.log("my_touchstart");

        //Atualize o lastPositionOfTouchY como foi feito para lastPositionOfTouchX
        lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    }

    //Substitua o evento 'mousemove' pelo evento 'touchmove'.
    canvas.addEventListener("touchmove", my_touchmove);
    //Substitua a função "my_mousemove()" com a função "my_touchmove()".
    function my_touchmove(e)
    {
        //Coloque a função "my_touchMove" no console.
        console.log("my_touchmove");

        /*Atualize o "currentPositionOfTouchY" em Y seria o offsetTop
        com os pontos tocados no canvas.*/
        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
    
        console.log("Ultima posicao de coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
    
        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
    
        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }

    //Atividade Adicional para limpar o canvas.

    

