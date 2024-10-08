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