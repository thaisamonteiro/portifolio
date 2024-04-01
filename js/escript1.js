// Seleciona o elemento do menu
let menu = document.querySelector('#menu');

// Função para abrir ou fechar o menu ao clicar no ícone
function clicar(){
    // Verifica se a classe 'menu-opened' está presente no elemento do menu
    if(menu.classList.contains('menu-opened')== true){
         // Se estiver presente, remove a classe 'menu-opened'
        menu.classList.remove('menu-opened')
    } else{
        // Se não estiver presente, adiciona a classe 'menu-opened'
        menu.classList.add('menu-opened')
    }
}