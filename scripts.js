// Autor: Thiago Leite

// Constantes

const numeroInformado = document.getElementById("number");
const botao = document.getElementById("botao");
const resut = document.getElementById("results");
const error = document.getElementById("error");

function somaDivisieis(numero)
{
    let soma = 0;

    for ( let i = 0; i < numero; i++)
    {
        if ( i % 3 == 0 || i % 5 == 0 )
        {
            soma += i;
        }
    }

    return soma;
}

// Evento de click no botão

botao.addEventListener("click", () => 
{
    
    let numero = numeroInformado.value;
    let resultado = somaDivisieis(numero);
    
    if (numero === '' || isNaN(numero) || numero === 0 || numero === '0') {
        numeroInformado.classList.add('valid');
        error.innerHTML = 'Digite um número válido';
    } else {
        resut.innerHTML = resultado;
    }

});