// 1. Par ou ímpar
let numero = parseInt(
  prompt("1. Digite um número para saber se é par ou ímpar:")
);
if (numero % 2 === 0) {
  console.log("É par");
} else {
  console.log("É ímpar");
}

// 2. Maior de três números
let n1 = parseFloat(prompt("2. Primeiro número:"));
let n2 = parseFloat(prompt("Segundo número:"));
let n3 = parseFloat(prompt("Terceiro número:"));
if (n1 > n2 && n1 > n3) {
  console.log("Maior: " + n1);
} else if (n2 > n3) {
  console.log("Maior: " + n2);
} else {
  console.log("Maior: " + n3);
}

// 3. Média de 3 notas
let nota1 = parseFloat(prompt("3. Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
  console.log("Aprovado! Média: " + media.toFixed(2));
} else {
  console.log("Reprovado. Média: " + media.toFixed(2));
}

// 4. Maioridade
let anoNascimento = parseInt(prompt("4. Digite seu ano de nascimento:"));
let anoAtual = 2025;
let idade = anoAtual - anoNascimento;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 5. Conversão de temperatura
let tipo = prompt(
  "5. Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para o contrário:"
).toUpperCase();
let temp = parseFloat(prompt("Digite a temperatura:"));
if (tipo === "C") {
  let fahrenheit = temp * 1.8 + 32;
  console.log("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
} else if (tipo === "F") {
  let celsius = (temp - 32) / 1.8;
  console.log("Temperatura em Celsius: " + celsius.toFixed(2));
} else {
  console.log("Opção inválida");
}

// 6. Múltiplos
let a = parseInt(prompt("6. Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));
if (a % b === 0 || b % a === 0) {
  console.log("Pelo menos um dos números é múltiplo do outro");
} else {
  console.log("Nenhum dos números é múltiplo do outro");
}

// 7. Tipo de triângulo
let lado1 = parseFloat(prompt("7. Lado 1 do triângulo:"));
let lado2 = parseFloat(prompt("Lado 2 do triângulo:"));
let lado3 = parseFloat(prompt("Lado 3 do triângulo:"));
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Triângulo inválido");
}

// 8. Restaurante com switch
let prato = prompt(
  "8. Escolha um prato: pizza, hamburguer, salada, macarrao"
).toLowerCase();
switch (prato) {
  case "pizza":
    console.log("Preço: R$25\nDescrição: Pizza de queijo e calabresa.");
    break;
  case "hamburguer":
    console.log("Preço: R$18\nDescrição: Hambúrguer artesanal com batata.");
    break;
  case "salada":
    console.log("Preço: R$15\nDescrição: Salada verde com frango grelhado.");
    break;
  case "macarrao":
    console.log("Preço: R$20\nDescrição: Macarrão ao molho bolonhesa.");
    break;
  default:
    console.log("Prato inválido");
    break;
}

// 9. IMC
let peso = parseFloat(prompt("9. Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
let imc = peso / (altura * altura);
let classificacao = "";
if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 24.9) {
  classificacao = "Peso normal";
} else if (imc < 29.9) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}
console.log("IMC: " + imc.toFixed(2) + " - " + classificacao);

// 10. Números pares com while
let limitePar = parseInt(
  prompt("10. Digite um número positivo para exibir pares até ele:")
);
let i = 0;
let pares = "";
while (i <= limitePar) {
  if (i % 2 === 0) {
    pares += i + " ";
  }
  i++;
}
console.log("Pares: " + pares);

// 11. Números ímpares com for
let limiteImpar = parseInt(
  prompt("11. Digite um número positivo para exibir ímpares até ele:")
);
let impares = "";
for (let j = 0; j <= limiteImpar; j++) {
  if (j % 2 !== 0) {
    impares += j + " ";
  }
}
console.log("Ímpares: " + impares);

// 12. Fatorial
let numFat = parseInt(prompt("12. Digite um número para calcular o fatorial:"));
let fat = 1;
let k = 1;
while (k <= numFat) {
  fat *= k;
  k++;
}
console.log("Fatorial de " + numFat + " é " + fat);
