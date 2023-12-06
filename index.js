
let palavra = document.querySelector('#palavra1')

let caixinha1 = document.querySelector("#caixinha1")

let fechar = document.querySelector("#fechar")

let audio = document.querySelector("#audio")

let botao = document.querySelector("#botao")

palavra.addEventListener('click', (e) => {

 caixinha1.style.visibility= "visible"

});

fechar.addEventListener("click", (e) =>{
  caixinha1.style.visibility= "hidden"
})

botao.addEventListener("mouseover", (e) =>{
  audio.play()
})
botao.addEventListener("mouseout", (e) =>{
  audio.pause()
})




let palavra2 = document.querySelector('#palavra2')

let caixinha2 = document.querySelector("#caixinha2")

let fechar2 = document.querySelector("#fechar2")

let audio2 = document.querySelector("#audio2")

let botao2 = document.querySelector("#botao2")

palavra2.addEventListener('click', (e) => {

 caixinha2.style.visibility= "visible"
  
});

fechar2.addEventListener("click", (e) =>{
  caixinha2.style.visibility= "hidden"
})

botao2.addEventListener("mouseover", (e) =>{
  audio2.play()
})
botao2.addEventListener("mouseout", (e) =>{
  audio2.pause()
})




let palavra3 = document.querySelector('#palavra3')

let caixinha3 = document.querySelector("#caixinha3")

let fechar3 = document.querySelector("#fechar3")

let audio3 = document.querySelector("#audio3")

let botao3 = document.querySelector("#botao3")

palavra3.addEventListener('click', (e) => {

 caixinha3.style.visibility= "visible"

});

fechar3.addEventListener("click", (e) =>{
  caixinha3.style.visibility= "hidden"
})

botao3.addEventListener("mouseover", (e) =>{
  audio3.play()
})
botao3.addEventListener("mouseout", (e) =>{
  audio3.pause()
})




let palavra4 = document.querySelector('#palavra4')

let caixinha4 = document.querySelector("#caixinha4")

let fechar4 = document.querySelector("#fechar4")

let audio4 = document.querySelector("#audio4")

let botao4 = document.querySelector("#botao4")


palavra4.addEventListener('click', (e) => {

 caixinha4.style.visibility= "visible"

});

fechar4.addEventListener("click", (e) =>{
  caixinha4.style.visibility= "hidden"
})

botao4.addEventListener("mouseover", (e) =>{
  audio4.play()
})
botao4.addEventListener("mouseout", (e) =>{
  audio4.pause()
})



let palavra5 = document.querySelector('#palavra5')

let caixinha5 = document.querySelector("#caixinha5")

let fechar5 = document.querySelector("#fechar5")

let audio5 = document.querySelector("#audio5")

let botao5 = document.querySelector("#botao5")


palavra5.addEventListener('click', (e) => {

 caixinha5.style.visibility= "visible"

});

fechar5.addEventListener("click", (e) =>{
  caixinha5.style.visibility= "hidden"
})

botao5.addEventListener("mouseover", (e) =>{
  audio5.play()
})
botao5.addEventListener("mouseout", (e) =>{
  audio5.pause()
})


let palavra6 = document.querySelector('#palavra6')

let caixinha6 = document.querySelector("#caixinha6")

let fechar6 = document.querySelector("#fechar6")

let audio6 = document.querySelector("#audio6")

let botao6 = document.querySelector("#botao6")


palavra6.addEventListener('click', (e) => {

 caixinha6.style.visibility= "visible"

});

fechar6.addEventListener("click", (e) =>{
  caixinha6.style.visibility= "hidden"
})

botao6.addEventListener("mouseover", (e) =>{
  audio6.play()
})
botao6.addEventListener("mouseout", (e) =>{
  audio6.pause()
})


let palavra7 = document.querySelector('#palavra7')

let caixinha7 = document.querySelector("#caixinha7")

let fechar7 = document.querySelector("#fechar7")

let audio7 = document.querySelector("#audio7")

let botao7 = document.querySelector("#botao7")

palavra7.addEventListener('click', (e) => {

 caixinha7.style.visibility= "visible"
});
fechar7.addEventListener("click", (e) =>{
  caixinha7.style.visibility= "hidden"
})

botao7.addEventListener("mouseover", (e) =>{
  audio7.play()
})
botao7.addEventListener("mouseout", (e) =>{
  audio7.pause()
})

let palavra8 = document.querySelector('#palavra8')

let caixinha8 = document.querySelector("#caixinha8")

let fechar8 = document.querySelector("#fechar8")

let audio8 = document.querySelector("#audio8")

let botao8 = document.querySelector("#botao8")

palavra8.addEventListener('click', (e) => {

 caixinha8.style.visibility= "visible"

});

fechar8.addEventListener("click", (e) =>{
  caixinha8.style.visibility= "hidden"
})

botao8.addEventListener("mouseover", (e) =>{
  audio8.play()
})
botao8.addEventListener("mouseout", (e) =>{
  audio8.pause()
})


let palavra9 = document.querySelector('#palavra9')

let caixinha9 = document.querySelector("#caixinha9")

let fechar9 = document.querySelector("#fechar9")

let audio9 = document.querySelector("#audio9")

let botao9 = document.querySelector("#botao9")

palavra9.addEventListener('click', (e) => {

 caixinha9.style.visibility= "visible"

});

fechar9.addEventListener("click", (e) =>{
  caixinha9.style.visibility= "hidden"
})

botao9.addEventListener("mouseover", (e) =>{
  audio9.play()
})
botao9.addEventListener("mouseout", (e) =>{
  audio9.pause()
})



let palavra10 = document.querySelector('#palavra10')

let caixinha10 = document.querySelector("#caixinha10")

let fechar10 = document.querySelector("#fechar10")

let audio10 = document.querySelector("#audio10")

let botao10 = document.querySelector("#botao10")


palavra10.addEventListener('click', (e) => {

 caixinha10.style.visibility= "visible"

});

fechar10.addEventListener("click", (e) =>{
  caixinha10.style.visibility= "hidden"
})

botao10.addEventListener("mouseover", (e) =>{
  audio10.play()
})
botao10.addEventListener("mouseout", (e) =>{
  audio10.pause()
})

let conto = document.querySelector("#texto-conto")

let seta = document.querySelector("#img-seta")

let x = document.querySelector("#img-x-cima")

seta.addEventListener("click", (e) =>{
  conto.style.display = "block"
})

x.addEventListener("click", (e) =>{
  conto.style.display = "none"
})


const espaco_texto_palavra = document.querySelector('#espaco_texto_palavra');
const espaco_texto = document.querySelector('.espaco_texto');


const textos_palavras = [
    {
        Palavra: 'palavra1',
        Texto: ' Texto 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    },
    {
        Palavra: 'Palavra 2',
        Texto: 'Texto 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    },
    {
        Palavra: 'Palavra 3',
        Texto: 'Texto 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pellentesque erat. Aliquam sed dapibus metus. Nulla laoreet sodales gravida. Quisque ac nibh mollis, posuere velit at, gravida mi. Cras vitae ipsum pulvinar, dignissim ex feugiat, imperdiet nisl. In ac mi libero. Morbi mattis nibh et efficitur blandit. Aenean sit amet vulputate turpis. Proin condimentum tortor at enim dignissim, ut dignissim lacus ultrices. Nam convallis aliquet ligula non pharetra. Mauris posuere volutpat dui in sodales.'
    }
]