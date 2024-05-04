// Evento de Click para o botão de calcular>>>>>

// Explicação desse bloco de comando: peguei o valor (id) do meu button>adicionei um evento nele chamado "click"> Escrever algo dentro

document.getElementById('calculate').addEventListener('click', function (){
    // Passando as váriaveis para decimal com parseFloat> pegar o valor do input com o .value 
    const num1 = parseFloat(document.getElementById('num1').value);
    // A mesma coisa com o num2>>>>>
    const num2 = parseFloat(document.getElementById('num2').value);
    // A mesma coisa com o num3>>>>>
    const num3 = parseFloat(document.getElementById('num3').value);

    // Validação para não aparecer "NaN"  ao clicar em calcular sem valores nos inputs 
    if(isNaN(num1)||isNaN(num2)||isNaN(num3)||num1 === 0){
        // Seu eu não digitar nada ele aparece inválido>>>
        document.getElementById('result').textContent = 'Inválido!'
        return;
    }
    // Conta da regra de três:
    let result = (num3 * num2)/num1;

    // Verificar se o resultado realmente tem casas decimas>>>

    if(Number.isInteger(result)){
        document.getElementById('result').textContent = result = result;
    }else{
        // Mostrar o resultado no lugar do x
    document.getElementById('result').textContent = result = result.toFixed(2).replace('.', ',');
    // toFixed(2) é para aparecer duas casas decimais quando o resultado tiver inúmeras casas decimais

    // replace('.', ',') é para trocar o ponto pela vírgula
    }

});