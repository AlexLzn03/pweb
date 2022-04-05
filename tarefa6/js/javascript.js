var prods = [
    { id: 1, name: "Bife com batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

function calc(){
    saida.innerHTML = '';
    calculation.innerHTML = '';

    var quantities = document.getElementsByName("quantity");
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    var text = "Caro(a) " + document.querySelector('#nome').value;
    document.querySelector('#exitname').innerHTML = text;

    var text1 = "<br>Seguem os dados do seu pedido.<p>O seu pedido é: ";
    document.querySelector('#exitorder').innerHTML = text1;

    var sum = [30, 25, 22, 10, 8, 12]
    var endPrice = 0
    quantSum = 0;

    for(i = 0 ; i < 6 ; i++){
        quant = document.getElementById(i + 1).value;

        if (quant != 0) {
            var totalCost = sum[i] * quant;
            endPrice += totalCost;
            quantSum += quant;
            saida.innerHTML = `Pratos: ${prods[i].name}  - Preço: ${formatter.format(prods[i].price)} - Quantidade: ${quant} </br>`
        }
    }   
    calculation.innerHTML += "<br><br>Preço final R$ " + endPrice + ",00";
}