function calcularJuros(valor, dataVencimento) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);

    // Zera o horário para comparar apenas as datas
    hoje.setHours(0, 0, 0, 0);
    vencimento.setHours(0, 0, 0, 0);

    // Verifica se a data é válida
    if (isNaN(vencimento.getTime())) {
        console.log("Data de vencimento inválida.");
        return;
    }

    // Se ainda não venceu, não há juros
    if (vencimento >= hoje) {
        console.log("O pagamento não está atrasado.");
        console.log(`Valor original: R$ ${valor.toFixed(2)}`);
        console.log("Juros: R$ 0.00");
        console.log(`Valor total: R$ ${valor.toFixed(2)}`);
        return;
    }

    // Calcula a quantidade de dias de atraso
    const diferenca = hoje - vencimento;
    const diasAtraso = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // 2,5% ao dia
    const taxaDiaria = 0.025;

    const juros = valor * taxaDiaria * diasAtraso;
    const valorTotal = valor + juros;

    console.log(`Valor original: R$ ${valor.toFixed(2)}`);
    console.log(`Data de vencimento: ${dataVencimento}`);
    console.log(`Dias de atraso: ${diasAtraso}`);
    console.log(`Juros: R$ ${juros.toFixed(2)}`);
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
}


// Exemplo de utilização
calcularJuros(1000, "2026-09-28");