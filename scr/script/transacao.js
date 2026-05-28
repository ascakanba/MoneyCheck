import { transacoes, salvarNoBanco} from './db.js';
class Transacao {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = valor > 0 ? 'receita' : 'despesa';
    }
}

function abrirFormulario() {
    document.getElementById('overlay').style.display = 'flex';
}

function fecharFormulario() {
    document.getElementById('overlay').style.display = 'none';
}

function adicionarTransacao() {
    let descricao = document.getElementById("descricao").value;
    let valor = Number(document.getElementById("valor").value);

    if (descricao.trim() === '' || valor === 0) {
        return;
    }

    const transacao = new Transacao(descricao, valor);
    transacoes.push(transacao);

    salvarERecarregar();

    document.getElementById("descricao").value = '';
    document.getElementById("valor").value = '';

    fecharFormulario();
}

// 2. Estrutura HTML idêntica à original para não quebrar o CSS
function exibirTransacoes() {
    const lista = document.getElementById('lista');
    if (!lista) return;

    lista.innerHTML = transacoes.map((transacao, index) => {
        // Mantive exatamente as classes e tags que você enviou no primeiro código
        return `
            <div class="transaction" >
                <span onclick="editarTransacao(${index})" style="cursor: pointer;">
                    ${transacao.descricao}
                </span>
                <span class="${transacao.tipo}">
                    ${transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <button class="deletetransaction" onclick="deletarTransacao(${index})">
                    x
                </button>
            </div>
        `;
    }).join('');
}

function salvarERecarregar() {
    salvarNoBanco(transacoes);
    exibirTransacoes();
}

function deletarTransacao(index) {
    transacoes.splice(index, 1);
    salvarERecarregar();
}

function editarTransacao(index) {
    const t = transacoes[index];
    document.getElementById("descricao").value = t.descricao;
    document.getElementById("valor").value = t.valor;

    transacoes.splice(index, 1);
    abrirFormulario();
}

// 3. Event Listeners e Inicialização Segura
document.addEventListener('DOMContentLoaded', () => {

    const descInput = document.getElementById("descricao");
    const valorInput = document.getElementById("valor");

    if (descInput && valorInput) {
        descInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') valorInput.focus();
        });

        valorInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') adicionarTransacao();
        });
    }

    window.onclick = function (event) {
        const overlay = document.getElementById("overlay");
        if (event.target == overlay) {
            fecharFormulario();
        }
    }
    exibirTransacoes();
});
    window.abrirFormulario = abrirFormulario;
    window.fecharFormulario = fecharFormulario;
    window.adicionarTransacao = adicionarTransacao;
    window.deletarTransacao = deletarTransacao;
    window.editarTransacao = editarTransacao;
