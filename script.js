const mario = document.querySelector('#mario')
const pipe = document.querySelector('.pipe')


const jump = () => {
    mario.classList.add('jump')
    
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'w') {
        jump()
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }
})

const loop = setinterval(() =>{

const pipePosition = pipe.offsetleft;
const marioPosition = + window.getComputedStyle(mario).bottom.replace(`px`);

console.log(marioPosition);

if(pipePosition <=120){
    pipe.style.amimation = `nome`;
    pipe.style.left = `${pipePosition} px`;

}

},10);
