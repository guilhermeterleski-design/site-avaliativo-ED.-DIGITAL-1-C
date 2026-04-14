// 1. GESTÃO DE DADOS
const servicesData = [
    { title: "Energia Limpa", desc: "Consultoria em implementação de painéis solares." },
    { title: "Cloud Sustentável", desc: "Servidores otimizados com baixa emissão de carbono." },
    { title: "Reciclagem Tech", desc: "Descarte responsável de hardware obsoleto." }
];

const faqData = [
    { q: "Como a EcoTech ajuda minha empresa?", a: "Reduzimos seus custos operacionais através da eficiência energética." },
    { q: "O suporte é 24/7?", a: "Sim, oferecemos suporte integral para infraestruturas críticas." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function initApp() {
    const grid = document.getElementById('services-grid');
    servicesData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    const faqContainer = document.getElementById('faq-container');
    faqData.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" aria-controls="faq-${index}">
                    ${item.q}
                </button>
                <div id="faq-${index}" class="accordion-content">
                    <p style="padding: 1rem;">${item.a}</p>
                </div>
            </div>
        `;
    });
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE E CONTRASTE
let fontSize = 16;
document.getElementById('font-up').addEventListener('click', () => {
    fontSize += 2;
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});

document.getElementById('font-down').addEventListener('click', () => {
    if(fontSize > 12) fontSize -= 2;
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});

document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// 4. ACORDEÃO (INTERATIVIDADE)
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('accordion-header')) {
        const content = e.target.nextElementSibling;
        const isExpanded = e.target.getAttribute('aria-expanded') === 'true';
        
        e.target.setAttribute('aria-expanded', !isExpanded);
        content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
    }
});

// 5. SCROLL REVEAL (INTERSECTION OBSERVER)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// 6. LÓGICA DO CARROSSEL (BÁSICA)
let currentSlide = 0;
const track = document.getElementById('carousel-track');
// Aqui você adicionaria slides dinamicamente conforme os serviços
