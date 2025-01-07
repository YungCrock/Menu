var dishes = [
    {id: 1, name: "bife com batata", price: 30.0},
    {id: 2, name: "coxa de frango crocante", price: 25.0},
    {id: 3, name: "carne de panela", price: 22.0},
    {id: 4, name: "farofa", price: 10.0},
    {id: 5, name: "salada", price: 8.0},
    {id: 6, name: "torresmo", price: 12.0}
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var finalPrice = 0;
    var total = 0;

    output.innerHTML = "";
    var nome = document.getElementById("name");
    output.innerHTML = `<div>
        <p class="output-title">Caro <strong>${nome.value}</strong></p>
        <p>Seguem os dados do seu pedido.</p>
        <p>O seu pedido é:</p>
    </div>`;

    
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    for (var input of quantities) {
        var id = input.id;
        var quantity = parseFloat(input.value);

        if (quantity > 0) {
            output.innerHTML += `<li>Prato: ${dishes[id - 1].name} - 
            Preço: ${formatter.format(dishes[id - 1].price)} - 
            Quantidade: ${quantity} - 
            Total: ${formatter.format(total = dishes[id - 1].price * quantity)}.</li>`;
            finalPrice += dishes[id - 1].price * quantity;
        }
    }

    output.innerHTML += `<h2>Preço final: ${formatter.format(finalPrice)}</h2>`;
}
