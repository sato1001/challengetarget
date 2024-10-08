function fibonacci(){
    const num = parseInt(document.getElementById('numberQ1').value);

    if(num == 0 || num == 1){
        document.getElementById('result').textContent = `O número ${num} pertence à sequência de Fibonacci.`;
        return;
    }

    let a = 0, b = 1, c = 0;

    while (true) {
        c = a + b;
        a = b;
        b = c;
    
        if (c == num) {
            document.getElementById('result').textContent = `O número ${num} pertence à sequência de Fibonacci.`;
            return true;
        } else if (c >= num) {
            document.getElementById('result').textContent = `O número ${num} não pertence à sequência de Fibonacci.`;
          return false;
        }
    }
}

function countAs(){
    const setence = document.getElementById('textQ2').value;
    const regex = /a/gi;
    const count = (setence.match(regex));
    if(count!=0 && count !=null){
        const quant = count.length;
        document.getElementById('result2').textContent = `A letra 'a' aparece ${quant} vez(es) na setença digitada.`;
    }else{
        document.getElementById('result2').textContent = `A letra 'a' não apareceu na setença digitada.`;
    }
}

function result(){
    const indice = 12;
    let soma = 0, k=1;
    while(k<indice){
        k=k+1;
        soma=soma+k;
    }
    console.log(soma);
    document.getElementById('result3').textContent = `Soma: ${soma}`;

}