import { auth } from './firebase.js';

import {createUserWithEmailAndPassword}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

async function criarConta() {

    const email =
        document.getElementById('email').value;

    const senha =
        document.getElementById('senha').value;

    try {

        const user =
            await createUserWithEmailAndPassword(
                auth,
                email,
                senha
            );

        alert('Conta criada');

    } catch(error) {

        alert(error.message);
    }
}
function toggleLogin() {

    const overlay =
        document.getElementById('overlay');

    if(overlay) {

        overlay.remove();

        return;
    }

    const modal =
        document.createElement('div');

    modal.id = 'overlay';

    modal.classList.add('overlay');

    modal.innerHTML = `


    <style>

    .overlay {

        position: fixed;

        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;

        background: rgba(0,0,0,0.5);

        backdrop-filter: blur(5px);

        display: flex;

        justify-content: center;
        align-items: center;
    }

    .loginBox {

        background: #1e293b;

        padding: 30px;

        border-radius: 16px;

        width: 300px;

        display: flex;

        flex-direction: column;

        gap: 10px;
    }

    </style>
        <div class="loginBox">

            <h2>Login</h2>

            <input
                type="email"
                id="email"
                placeholder="Email"
            >

            <input
                type="password"
                id="senha"
                placeholder="Senha"
            >

            <button onclick="criarConta()">
                Criar Conta
            </button>

        </div>
    `;

    document.body.appendChild(modal);
}
window.addEventListener('click', function(event) {

    const overlay =
        document.getElementById('overlay');

    if(event.target == overlay) {

        overlay.remove();
    }
});

window.criarConta = criarConta;
window.toggleLogin = toggleLogin;