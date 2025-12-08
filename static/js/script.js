document.addEventListener('DOMContentLoaded', () => {
    // elementos do DOM vão ser carregados após o HTML
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const chat = document.getElementById('chat');
    const input = document.getElementById('msg');
    const send = document.getElementById('send');
    const welcomeText = document.querySelector('.fs-5');

    if (!themeToggle || !chat || !input || !send) {
        console.error("ERRO CRÍTICO: um ou mais elementos não foram encontrados!");
        console.log({ themeToggle, chat, input, send });
        return;
    }

    let typingElement = null;

    function updateTextColors() {
        const isDark = body.classList.contains('dark');
        if (welcomeText) {
            welcomeText.style.color = isDark ? '#c8e6c9' : '#495057';
        }
    }

    // troca de tema
    themeToggle.onclick = () => {
        body.classList.toggle('light');
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        themeToggle.innerHTML = isDark
            ? '<i class="bi bi-sun-fill"></i> Modo Claro'
            : '<i class="bi bi-moon-stars-fill"></i> Modo Escuro';
        updateTextColors();
    };

    updateTextColors();

    function addMsg(text, who) {
        const div = document.createElement('div');
        div.className = `d-flex mb-4 ${who === 'user' ? 'justify-content-end' : 'justify-content-start'}`;
        div.innerHTML = `
            <div class="p-3 msg-${who} shadow-sm rounded-4 max-width-msg">
                ${text.replace(/\n/g, '<br>')}
            </div>
        `;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }

    function showTyping() {
        if (typingElement) return;
        typingElement = document.createElement('div');
        typingElement.id = 'typing-indicator';
        typingElement.className = 'd-flex mb-4 justify-content-start';
        typingElement.innerHTML = `
            <div class="p-3 msg-seed shadow-sm rounded-4 d-flex align-items-center gap-2">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        chat.appendChild(typingElement);
        chat.scrollTop = chat.scrollHeight;
    }

    function hideTyping() {
        if (typingElement) {
            typingElement.remove();
            typingElement = null;
        }
    }

    // principal para enviar a mensagem
    async function enviar() {
        if (!input.value?.trim()) return; 

        const msg = input.value.trim();
        addMsg(msg, 'user');
        input.value = '';
        input.focus();

        showTyping();

        const formData = new FormData();
        formData.append('msg', msg);

        try {
            const resp = await fetch('/falar/', {
                method: 'POST',
                body: formData
            });
            const data = await resp.json();
            hideTyping();
            addMsg(data.resposta, 'seed');
        } catch (e) {
            hideTyping();
            addMsg("Algo de errado não está certo kkk", 'seed');
        }
    }

    send.onclick = enviar;
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            enviar();
        }
    });

    window.addEventListener('beforeunload', hideTyping);
});