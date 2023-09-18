// Seleciona o elemento de áudio
var audio = document.getElementById('audio');

// Seleciona os botões
var voltarBtn = document.querySelector('.voltar');
var playBtn = document.querySelector('.play');
var seguirBtn = document.querySelector('.seguir');

// Adiciona evento de clique ao botão voltar
voltarBtn.addEventListener('click', function() {
    audio.currentTime -= 10; // Retrocede 10 segundos
});

// Adiciona evento de clique ao botão play/pause
playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play(); // Inicia a música
    } else {
        audio.pause(); // Pausa a música
    }
});

playBtn.onclick = function() {
    this.classList.toggle('pause');
}


// Adiciona evento de clique ao botão seguir
seguirBtn.addEventListener('click', function() {
    audio.currentTime += 10; // Avança 10 segundos
});

// Seleciona o controle deslizante de volume
const volumeSlider = document.querySelector('.volSlider');

// Adiciona evento de mudança ao controle deslizante de volume
volumeSlider.addEventListener('input', () => {
    // Atualiza o volume do áudio para o valor atual do controle deslizante
    audio.volume = volumeSlider.value;
});

// Seleciona as divs de música
const msc1 = document.querySelector('.msc1');
const msc2 = document.querySelector('.msc2');
const msc3 = document.querySelector('.msc3');
const msc4 = document.querySelector('.msc4');
const pPlay = document.getElementById('pPlay');
const pCantor = document.getElementById('pCantor');
const titlee = document.getElementById('titlee');
const cantorr = document.getElementById('cantorr');
const imgP = document.querySelector('.imgP');
const imageMsc = document.querySelector('.imageMsc');
const legendas = document.getElementById('legenda');

// Adiciona evento de clique à div msc1
msc1.addEventListener('click', function() {
    // Altera o src do áudio para a música correspondente
    audio.src = 'assets/music/Cartoon - On & On (feat. Daniel Levi).mp3';
    // Inicia a reprodução da música
    audio.play();
    pPlay.innerHTML = document.getElementById('t1').textContent;
    pCantor.innerHTML = document.getElementById('c1').textContent;
    titlee.innerHTML =  document.getElementById('t1').textContent;
    cantorr.innerHTML = document.getElementById('c1').textContent;
    imgP.style.display = 'block';
    imageMsc.style.display = 'block'
    legendas.src = 'assets/vtt/on.vtt'
});

// Adiciona evento de clique à div msc2
msc2.addEventListener('click', function() {
    // Altera o src do áudio para a música correspondente
    audio.src = 'assets/music/Itro - All For You (feat. SILIAS).mp3';
    // Inicia a reprodução da música
    audio.play();
    pPlay.innerHTML = document.getElementById('t2').textContent;
    pCantor.innerHTML = document.getElementById('c2').textContent;
    titlee.innerHTML =  document.getElementById('t2').textContent;
    cantorr.innerHTML = document.getElementById('c2').textContent;
    imgP.style.display = 'block';
    imageMsc.style.display = 'block'
});

// Adiciona evento de clique à div msc3
msc3.addEventListener('click', function() {
    // Altera o src do áudio para a música correspondente
    audio.src = 'assets/music/NCS Mashup - Biggest.mp3';
    // Inicia a reprodução da música
    audio.play();
    pPlay.innerHTML = document.getElementById('t3').textContent;
    pCantor.innerHTML = document.getElementById('c3').textContent;
    titlee.innerHTML =  document.getElementById('t3').textContent;
    cantorr.innerHTML = document.getElementById('c3').textContent;
    imgP.style.display = 'block';
    imageMsc.style.display = 'block'
});

// Adiciona evento de clique à div msc4
msc4.addEventListener('click', function() {
    // Altera o src do áudio para a música correspondente
    audio.src = 'assets/music/yanvince - fearless.mp3';
    // Inicia a reprodução da música
    audio.play();
    pPlay.innerHTML = document.getElementById('t4').textContent;
    pCantor.innerHTML = document.getElementById('c4').textContent;
    titlee.innerHTML =  document.getElementById('t4').textContent;
    cantorr.innerHTML = document.getElementById('c4').textContent;
    imgP.style.display = 'block';
    imageMsc.style.display = 'block'
});

const mute = document.querySelector('.mute');
if (audio.volume === 0) {
    mute.style.backgroundImage = '../img/mute.png';
} else {
    mute.style.backgroundImage = '../img/medium-volume.png';
}

mute.onclick = function() {
    this.classList.toggle('mutado');
    if (volumeSlider.value > 0) {
        volumeSlider.value = 0;
    } else {
        volumeSlider.value = 1;
    }
}

var increaseFontButton = document.getElementById('increase-font');
var decreaseFontButton = document.getElementById('decrease-font');

increaseFontButton.addEventListener('click', function() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 1) + 'px';
});

decreaseFontButton.addEventListener('click', function() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) - 1) + 'px';
});

document.querySelector('.logo').onclick = function() {
    window.open('#', '_self');
}
