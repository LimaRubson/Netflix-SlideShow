var imagesWithTotal;
var qtdImages;
var imageWith = 240;
var imageMargin = 10;
var tamanho = 0;
var screenWith;
var verificaScreenWith;
var mudaDireita = 1;
var mudaEsquerda = 1;
var marginLeftImages = 0;
var auxTamanho;

verificaScreenWith = window.screen.width;
console.log(verificaScreenWith);

screenWith = window.screen.width;
console.log("Tamanho da tela atual: " + screenWith);

qtdImages = document.getElementsByClassName('card').length;
console.log("Quantidade de imagens: " + qtdImages);


imagesWithTotal = (imageWith * qtdImages) + (imageMargin * qtdImages);
console.log("Largura total das imagens com a margem: " + imagesWithTotal);


function aviso() {
    screenWith = window.screen.width;
    console.log("Tamanho da tela atual: " + screenWith);
}

window.onresize = aviso;

$('#controlR').click(function() {
    console.log("Direita");
    
    if(mudaDireita == 1 || verificaScreenWith != screenWith) {
        tamanho = (imagesWithTotal - screenWith);
        auxTamanho = tamanho;
        console.log("Tamanho auxiliar: " + auxTamanho);
        verificaScreenWith = screenWith;
        marginLeftImages = (tamanho / qtdImages);
        console.log("Tamanho da margem esquerda: " + marginLeftImages);
    }
    mudaDireita = 0;

    console.log("Tamanho do carousel de imagem não visível: " + tamanho);
    event.preventDefault();

    if(tamanho < marginLeftImages) {

        document.getElementsByClassName('spanRight')[0].style.display = 'none';

    }
    
    if(tamanho >= -marginLeftImages) {

        $('#content').animate({
            marginLeft: "-=" + marginLeftImages + "px"
          }, "fast");

          tamanho = tamanho - marginLeftImages;
          console.log(tamanho);
          console.log(marginLeftImages);
          document.getElementsByClassName('spanLeft')[0].style.display = 'block';

    }

    console.log(tamanho);

 });

$('#controlL').click(function() {

    event.preventDefault();

    console.log(tamanho);

    if(tamanho == auxTamanho) {

        document.getElementsByClassName('spanLeft')[0].style.display = 'none';

    }
    
    if(tamanho <= auxTamanho) {

        $('#content').animate({
            marginLeft: "+=" + marginLeftImages + "px"
          }, "fast");

          tamanho = tamanho + marginLeftImages;
          console.log(tamanho);
          console.log(marginLeftImages);
          document.getElementsByClassName('spanRight')[0].style.display = 'block';
    }

    
   
});

let header = document.getElementById("carouselNetflix");
let btns = header.getElementsByClassName("card");

for(let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("clicado");
        current[0].className = current[0].className.replace(" clicado", "");
        this.className += " clicado";

        console.log("Clicado!");

       
    })

}
