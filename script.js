// Valores dos produtos
const G3_VALUE = 780;

function calculate() {
    // Quantidade de G3
    const quantity = parseInt(document.getElementById('quantity').value);

    // Cálculo do valor total
    const totalG3 = quantity * G3_VALUE;

    // Cálculos das porcentagens
    const total100 = totalG3; // 100%
    const total90 = totalG3 * 0.9; // 90%
    const total80 = totalG3 * 0.8; // 80%

    // Exibir resultados
    document.getElementById('resultG3').textContent = `G3 x ${quantity} = R$ ${totalG3.toFixed(2)}`;
    document.getElementById('result100').textContent = `100% de R$ ${totalG3.toFixed(2)} = R$ ${total100.toFixed(2)}`;
    document.getElementById('result90').textContent = `90% de R$ ${totalG3.toFixed(2)} = R$ ${total90.toFixed(2)}`;
    document.getElementById('result80').textContent = `80% de R$ ${totalG3.toFixed(2)} = R$ ${total80.toFixed(2)}`;
}

// Calcular automaticamente ao carregar a página
window.onload = calculate;
