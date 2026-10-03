# Desafio Técnico

Solução dos exercícios propostos utilizando **JavaScript e Node.js**.

## Tecnologias utilizadas

* JavaScript
* Node.js
* JSON
* VS Code

## Estrutura do projeto

```text
desafio-tecnico/
├── exercicio1/
│   ├── dados.json
│   └── index.js
│
├── exercicio2/
│   ├── dados.json
│   └── index.js
│
├── exercicio3/
│   └── index.js
│
└── README.md
```

---

# Exercício 1 — Cálculo de comissão

O objetivo é ler os registros de vendas de um time comercial e calcular a comissão de cada vendedor de acordo com as regras:

* Vendas abaixo de **R$ 100,00** → não geram comissão;
* Vendas de **R$ 100,00 até abaixo de R$ 500,00** → comissão de **1%**;
* Vendas a partir de **R$ 500,00** → comissão de **5%**.

Os dados das vendas ficam no arquivo `dados.json`.

O programa percorre as vendas, calcula a comissão individual de cada venda e, ao final, apresenta o total acumulado de comissão por vendedor.

### Como executar

No terminal:

```bash
cd exercicio1
node index.js
```

---

# Exercício 2 — Movimentação de estoque

O objetivo é criar um programa para realizar movimentações de entrada e saída de produtos no estoque.

Cada movimentação possui:

* Número identificador único;
* Código do produto;
* Descrição do produto;
* Tipo da movimentação;
* Quantidade movimentada;
* Descrição da movimentação.

O programa permite:

* Realizar entradas de mercadoria;
* Realizar saídas de mercadoria;
* Atualizar o estoque após cada movimentação;
* Impedir saída maior que o estoque disponível;
* Validar produtos inexistentes;
* Validar quantidades maiores que zero;
* Validar o tipo da movimentação.

As informações iniciais dos produtos estão no arquivo `dados.json`.

### Como executar

No terminal:

```bash
cd exercicio2
node index.js
```

---

# Exercício 3 — Cálculo de juros

O objetivo é calcular os juros de um valor considerando a data de vencimento e a data atual.

Foi utilizada a regra de **2,5% de juros ao dia**.

O programa:

1. Recebe o valor;
2. Recebe a data de vencimento;
3. Compara a data de vencimento com a data atual;
4. Calcula a quantidade de dias em atraso;
5. Calcula os juros;
6. Apresenta o valor original, os juros e o valor total.

Caso o pagamento ainda não esteja vencido, o programa informa que não há juros.

A fórmula utilizada foi:

```text
juros = valor × 0,025 × dias de atraso
```

E:

```text
valor total = valor original + juros
```

### Como executar

No terminal:

```bash
cd exercicio3
node index.js
```

---

# Execução dos exercícios

Cada exercício possui seu próprio arquivo `index.js` e pode ser executado separadamente utilizando o Node.js.

Exemplo:

```bash
node exercicio1/index.js
node exercicio2/index.js
node exercicio3/index.js
```

---

# Uso de Inteligência Artificial

Durante o desenvolvimento deste desafio, utilizei **Inteligência Artificial como ferramenta de apoio**.

A IA foi utilizada principalmente para:

* Auxiliar na compreensão dos requisitos;
* Tirar dúvidas sobre JavaScript e Node.js;
* Sugerir abordagens para a implementação;
* Auxiliar na identificação e correção de possíveis erros;
* Revisar a lógica e a organização do código.

As soluções foram executadas e testadas localmente no ambiente **Node.js**, realizando testes com diferentes situações para verificar o funcionamento das regras propostas em cada exercício.

O uso da IA foi considerado como uma ferramenta de suporte ao desenvolvimento e aprendizado, mantendo a responsabilidade pela implementação, testes e entendimento das soluções.

---

# Considerações finais

O desafio foi desenvolvido buscando manter o código simples, organizado e de fácil compreensão, priorizando o atendimento aos requisitos apresentados em cada exercício.
