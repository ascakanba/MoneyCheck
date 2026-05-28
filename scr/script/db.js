export const transacoes = (JSON.parse(localStorage.getItem('transacoes')) || [])
    .filter(t => t !== null && typeof t === 'object');

export function salvarNoBanco(novasTransacoes) {
    localStorage.setItem('transacoes', JSON.stringify(novasTransacoes));
}   