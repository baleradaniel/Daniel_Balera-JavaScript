// EXECUTAR MASCARAS
function mascara(o,f){
    //Define o objeto e chama a função
    objeto = o
    funcao = f
    setTimeout("executa_mascara()",1)
}

function executa_mascara(){
    objeto.value = funcao(objeto.value)
}
// mascaras
// telefone
function telefone(variavel){
    variavel = variavel.replace(/\D/g,"")
    variavel = variavel.replace(/^(\d\d)(\d)/g,"($1) $2") // ADICIONA PARENTESES EM VOLTA DOS DOIS PRIMEIROS DIGITOS
    variavel = variavel.replace(/(\d{4})(\d)/g,"$1-$2") // ADICIONA HIFEM ENTRE O QUARTO E QUINTO DIGITO
    return variavel
}

// rg
function rg_cpf(variavel){
    variavel = variavel.replace(/\D/g,"") // remove caracteres nao numericos
    variavel = variavel.replace(/(\d{3})(\d)/g,"$1.$2") // ADICIONA PONTO ENTRE O TERCEIRO E QUARTO DIGITO
    variavel = variavel.replace(/(\d{3})(\d)/g,"$1.$2") // ADICIONA PONTO ENTRE O sexto E setimo DIGITO
    variavel = variavel.replace(/(\d{3})(\d{1,2})$/,"$1-$2") // ADICIONA HIFEM ENTRE O setimo E o oitavo DIGITO
    return variavel
}

function cartao_sus(variavel){
    variavel = variavel.replace(/\D/g,"") // remove caracteres nao numericos
    variavel = variavel.replace(/(\d{6})(\d)/g,"$1-$2") // ADICIONA PONTO ENTRE O TERCEIRO E QUARTO DIGITO
}