document.addEventListener("DOMContentLoaded", () => {
    // 1. Mensagem de boas-vindas
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Bem-vindo à TechLumina Store!");
        sessionStorage.setItem("welcomeShown", "true");
    }

    // 2. Contador de visitas com LocalStorage
    const visitCounterElem = document.getElementById("visit-counter");
    if (visitCounterElem) {
        let visits = parseInt(localStorage.getItem("storeVisits") || "0", 10) + 1;
        localStorage.setItem("storeVisits", visits);
        visitCounterElem.textContent = `Você já visitou a TechLumina Store ${visits} vez(es).`;
    }

    // 3. Alternância de Modo Escuro
    const btnTheme = document.getElementById("btn-theme");
    if (btnTheme) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            btnTheme.textContent = "Modo Claro";
        }

        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            btnTheme.textContent = isDark ? "Modo Claro" : "Modo Escuro";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // 4. Desenho no elemento <canvas> (Texto Informativo Genérico sem Cupão)
    const canvas = document.getElementById("bannerCanvas");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        
        // Fundo com gradiente elegante
        let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "#49adff");
        gradient.addColorStop(1, "#1c3b9e");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Texto institucional no Canvas
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("TECHLUMINA STORE - INOVAÇÃO & TECNOLOGIA", canvas.width / 2, 48);
    }

    // 5. Interação com o formulário de encomenda
    const formEncomenda = document.getElementById("form-encomenda");
    if (formEncomenda) {
        formEncomenda.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Obrigado pela sua pré-encomenda! Enviaremos a confirmação por e-mail.");
            formEncomenda.reset();
        });
    }
});