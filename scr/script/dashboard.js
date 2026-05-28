import { transacoes} from './db.js';


export function calcularSaldo() {
    const saldo = transacoes.reduce((acc, transacao) => acc + transacao.valor, 0);

    document.getElementById('saldo').textContent = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (saldo < 0) {
        document.getElementById('saldo').style.color = '#ef4444';
    } else {
        document.getElementById('saldo').style.color = '#22c55e';
    }
}

export function mostrarReceitas() {
    const entradas = transacoes.filter(transacao => transacao.tipo === 'receita').reduce((acc, transacao) => acc + transacao.valor, 0);
    const listaReceitas = document.getElementById('receitas');
    
    document.getElementById('receitas').textContent = entradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
    
export function mostrarDespesas() {
    const saidas = transacoes.filter(transacao => transacao.tipo === 'despesa').reduce((acc, transacao) => acc + transacao.valor, 0);
    const listaDespesas = document.getElementById('despesas');

    document.getElementById('despesas').textContent = saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

document.addEventListener('DOMContentLoaded', () => {
    calcularSaldo();
    mostrarReceitas();
    mostrarDespesas();
});
