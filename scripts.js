const numeroInformado = document.getElementById("number");
const botao = document.getElementById("botao");
const resut = document.getElementById("resultado");
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

botao.addEventListener("click", function()
{
    let numero = numeroInformado.value;
    let resultado = somaDivisieis(numero);
    resut.innerHTML = resultado;

    console.log('teste')
});