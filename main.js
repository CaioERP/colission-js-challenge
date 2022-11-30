const character = document.getElementsByClassName("character")[0];          /* utilizado para pegar um elemnto do html, e transformar em um objeto */
const containerCharacter = document.getElementsByClassName("container-character")[0];      /* utilizado para pegar um elemnto do html, e transformar em um objeto */


const VELOCITY = 10; /* aqui é definida a velocidade do personagem */

const SCREEN_WIDTH = screen.width;   /* aqui é definido o tamanho da tela */
const SCREEN_HEIGHT = screen.height;  /* aqui é definido o tamanho da tela */


let xPosition = 500;   /* aqui é definido o posicionamento inicial do personagem no eixo x */
let yPosition = 300;   /* aqui é definido o posicionamento inicial do personagem no eixo y */

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]   /* aqui são definidas as variaveis para as teclas */
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];     /* e aqui as variaveis para os movimentos */

window.addEventListener("keydown", (event) => {                 /* essa função é utilizada para reconhecer o evento de quando o usuario usa a seta */
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp" && yPosition > 0){          /* aqui cada if serve para dizer a direção que o personagem deve se mover */
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT-75){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition > 0 ){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < 1300){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;     /* integração com css para definir onde está o personagem */
    containerCharacter.style.left = `${xPosition}px`     /* integração com css para definir onde está o personagem */
});
