// Database unificato di tutti e 9 i progetti
const projectDB = {
    'onco': {
        title: "Macchinario per Ricerca Oncologica", cat: "Medicina", catClass: "badge",
        img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200",
        desc: "Il progetto mira ad acquistare un sequenziatore di ultima generazione per velocizzare l'analisi genetica delle cellule tumorali e sviluppare terapie personalizzate.",
        raised: "15.000", goal: "20.000", progress: "75%", supporters: 120, days: 15
    },
    'campus': {
        title: "Campus Ecosostenibile: Spazi Verdi", cat: "Ambiente", catClass: "badge green",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        desc: "Vogliamo riqualificare le aree esterne del Campus Luigi Einaudi, piantando 500 nuovi alberi e installando panchine smart con ricarica a pannelli solari.",
        raised: "3.200", goal: "8.000", progress: "40%", supporters: 45, days: 30
    },
    'inclusione': {
        title: "Inclusione Digitale: PC per Studenti", cat: "Tecnologia", catClass: "badge orange",
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
        desc: "Fondo di solidarietà per l'acquisto di 50 computer portatili da dare in comodato d'uso gratuito agli studenti meritevoli con ISEE basso.",
        raised: "9.500", goal: "10.000", progress: "95%", supporters: 215, days: 2
    },
    'manoscritti': {
        title: "Restauro Manoscritti Antichi", cat: "Ricerca Umanistica", catClass: "badge purple",
        img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200",
        desc: "Intervento di restauro urgente su 15 manoscritti medievali della Biblioteca Bobbio, per digitalizzarli e renderli fruibili a tutti gli studenti.",
        raised: "1.200", goal: "5.000", progress: "24%", supporters: 18, days: 45
    },
    'app_psi': {
        title: "App Supporto Psicologico Studenti", cat: "Medicina", catClass: "badge",
        img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
        desc: "Sviluppo di un'applicazione mobile gratuita per fornire supporto psicologico anonimo e immediato agli studenti in burnout.",
        raised: "4.500", goal: "6.000", progress: "75%", supporters: 85, days: 20
    },
    'borse': {
        title: "Borse di Studio Talenti", cat: "Ricerca Umanistica", catClass: "badge purple",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
        desc: "Creazione di 10 borse di studio aggiuntive per permettere a studenti fuori sede di coprire i costi di alloggio e materiale didattico.",
        raised: "12.000", goal: "15.000", progress: "80%", supporters: 150, days: 10
    },
    'orto': {
        title: "Orto Botanico Smart IoT", cat: "Ambiente", catClass: "badge green",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&q=80&w=1200",
        desc: "Installazione di sensori IoT per il monitoraggio dell'umidità e automatizzazione dell'irrigazione nell'Orto Botanico Universitario.",
        raised: "7.800", goal: "12.000", progress: "65%", supporters: 92, days: 25
    },
    'robotica': {
        title: "Laboratorio Robotica Avanzata", cat: "Tecnologia", catClass: "badge orange",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
        desc: "Acquisto di due nuovi bracci robotici industriali per permettere agli studenti di ingegneria di fare pratica su strumentazioni all'avanguardia.",
        raised: "22.000", goal: "30.000", progress: "73%", supporters: 310, days: 40
    },
    'festival': {
        title: "Festival della Cultura Studentesca", cat: "Ricerca Umanistica", catClass: "badge purple",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        desc: "Finanziamento per ospitare autori, scienziati e artisti internazionali per un festival di tre giorni aperto a tutta la comunità cittadina.",
        raised: "2.500", goal: "4.000", progress: "62%", supporters: 45, days: 5
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // 1. Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlayBg = document.querySelector('.overlay-bg');
    
    function toggleMenu() {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        overlayBg.classList.toggle('active');
    }
    if (hamburger && overlayBg) {
        hamburger.addEventListener('click', toggleMenu);
        overlayBg.addEventListener('click', toggleMenu);
    }

    // 2. Logic URL Params per rendering dinamico
    const urlParams = new URLSearchParams(window.location.search);
    const projId = urlParams.get('id');

    // Popola Pagina Progetto
    if (window.location.pathname.includes('progetto.html')) {
        const id = projId && projectDB[projId] ? projId : 'onco'; 
        const p = projectDB[id];
        
        document.getElementById('p-title').innerText = p.title;
        document.getElementById('p-img').src = p.img;
        document.getElementById('p-desc').innerText = p.desc;
        document.getElementById('p-raised').innerText = "€ " + p.raised;
        document.getElementById('p-goal').innerText = "raccolti su € " + p.goal;
        document.getElementById('p-bar').style.width = p.progress;
        document.getElementById('p-bar').className = "progress-fill " + (p.cat === 'Ambiente' ? '' : 'blue');
        document.getElementById('p-supporters').innerText = p.supporters;
        document.getElementById('p-days').innerText = p.days;
        
        document.querySelectorAll('.pay-btn').forEach(btn => {
            btn.href = `donazione.html?id=${id}`;
        });
        document.title = p.title + " - unitoCrowFunding";
    }

    // Popola Pagina Donazione (Sidebar Migliorata)
    if (window.location.pathname.includes('donazione.html')) {
        const id = projId && projectDB[projId] ? projId : 'onco';
        const p = projectDB[id];
        
        document.getElementById('d-title').innerText = p.title;
        document.getElementById('d-img').src = p.img;
        document.getElementById('d-cat').innerText = p.cat;
        document.getElementById('d-cat').className = p.catClass + " mb-3";
        
        document.getElementById('d-back').href = `progetto.html?id=${id}`;
        document.getElementById('d-cancel').href = `progetto.html?id=${id}`;
    }

    // 3. Sistema di Ricerca e Auto-Suggest in Esplora
    const searchInput = document.getElementById('search');
    const catSelect = document.getElementById('cat');
    const sortSelect = document.getElementById('sort');
    const projectCards = document.querySelectorAll('.project-card');
    const suggestionsList = document.getElementById('suggestions');

    if (searchInput) {
        function filterProjects() {
            const query = searchInput.value.toLowerCase();
            const cat = catSelect.value;
            const sort = sortSelect.value;
            let visibleCards = [];

            projectCards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                const category = card.getAttribute('data-category');
                
                const matchSearch = title.includes(query);
                const matchCat = cat === "Tutte le categorie" || category === cat;

                if (matchSearch && matchCat) {
                    card.style.display = 'block';
                    visibleCards.push(card);
                } else {
                    card.style.display = 'none';
                }
            });

            // Sorting dinamico
            const grid = document.getElementById('projects-grid');
            visibleCards.sort((a, b) => {
                if (sort === "Scadenza imminente") {
                    return parseInt(a.getAttribute('data-days')) - parseInt(b.getAttribute('data-days'));
                } else if (sort === "Vicini all'obiettivo") {
                    return parseInt(b.getAttribute('data-progress')) - parseInt(a.getAttribute('data-progress'));
                } else {
                    return 0; // Più recenti
                }
            });
            visibleCards.forEach(card => grid.appendChild(card));
        }

        function showSuggestions() {
            const query = searchInput.value.toLowerCase();
            suggestionsList.innerHTML = '';
            if (query.length < 1) {
                suggestionsList.style.display = 'none';
                return;
            }

            let matches = 0;
            projectCards.forEach(card => {
                const title = card.getAttribute('data-title');
                if (title.toLowerCase().includes(query)) {
                    matches++;
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="bi bi-search me-2 text-muted"></i> ${title}`;
                    li.addEventListener('click', () => {
                        searchInput.value = title;
                        suggestionsList.style.display = 'none';
                        filterProjects();
                    });
                    suggestionsList.appendChild(li);
                }
            });

            suggestionsList.style.display = matches > 0 ? 'block' : 'none';
        }

        searchInput.addEventListener('input', () => {
            filterProjects();
            showSuggestions();
        });
        catSelect.addEventListener('change', filterProjects);
        sortSelect.addEventListener('change', filterProjects);
        
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
                suggestionsList.style.display = 'none';
            }
        });
    }

    // 4. Form Validation 
    function validateInput(input) {
        let valid = true;
        input.classList.remove('is-invalid', 'is-valid');
        
        if (!input.value.trim()) {
            valid = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            valid = false;
        } else if (input.id === 'cc-number' && !/^\d{16}$/.test(input.value.replace(/\s/g, ''))) {
            valid = false;
        } else if (input.id === 'cc-cvv' && !/^\d{3}$/.test(input.value)) {
            valid = false;
        } else if (input.type === 'number' && input.hasAttribute('min')) {
            // Verifica importo minimo (regola HCI)
            if (parseFloat(input.value) < parseFloat(input.getAttribute('min'))) {
                valid = false;
            }
        }

        if (valid) input.classList.add('is-valid'); else input.classList.add('is-invalid');
        return valid;
    }

    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) validateInput(input);
            });
        });

        form.addEventListener('submit', event => {
            let isValid = true;
            form.querySelectorAll('.form-control').forEach(input => {
                if (!validateInput(input)) isValid = false;
            });

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
            } else if (form.id === "donationForm") {
                event.preventDefault();
                
                const payOverlay = document.getElementById('payment-overlay');
                const payIcon = document.getElementById('payment-icon');
                const payText = document.getElementById('payment-text');
                
                payOverlay.classList.add('active');
                payIcon.className = "bi bi-arrow-repeat spin payment-icon";
                payIcon.style.color = "white";
                payText.innerText = "Elaborazione in corso...";

                setTimeout(() => {
                    payIcon.className = "bi bi-check-circle-fill payment-icon";
                    payIcon.style.color = "#34C759"; 
                    payText.innerText = "Pagamento Confermato!";

                    // Genera PDF Fattura usando jsPDF
                    if (window.jspdf) {
                        const { jsPDF } = window.jspdf;
                        const doc = new jsPDF();
                        const amount = document.getElementById('importo').value;
                        const name = document.getElementById('cc-name').value;
                        const projName = document.getElementById('d-title').innerText;
                        
                        doc.setFontSize(20);
                        doc.text("Ricevuta di Donazione", 20, 20);
                        doc.setFontSize(12);
                        doc.text("Piattaforma: unitoCrowFunding", 20, 35);
                        doc.text("Data: " + new Date().toLocaleDateString(), 20, 45);
                        doc.text("Intestatario: " + name, 20, 60);
                        doc.text("Progetto Sostenuto: " + projName, 20, 70);
                        doc.text("Importo Donato: " + amount + " Euro", 20, 80);
                        doc.setFontSize(10);
                        doc.text("Grazie per aver sostenuto la ricerca dell'Universita' di Torino!", 20, 100);
                        
                        doc.save("Ricevuta_Donazione_UniTo.pdf");
                    }

                    setTimeout(() => {
                        window.location.href = "index.html"; 
                    }, 1500);
                }, 1800);

            } else if (form.id === "proponiForm") {
                event.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Analisi e salvataggio in corso...';
                btn.classList.remove('btn-primary');
                btn.style.backgroundColor = "var(--unito-dark-blue)";
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Bozza salvata e approvata fittiziamente!';
                    btn.style.backgroundColor = "var(--success)";
                    
                    setTimeout(() => { 
                        form.reset(); 
                        btn.innerHTML = originalText; 
                        btn.disabled = false; 
                        btn.classList.add('btn-primary');
                        btn.style.backgroundColor = "";
                        form.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-valid'));
                        alert("La tua bozza di progetto fittizia è stata caricata con successo.");
                    }, 2500);
                }, 2000);
            }
        });
    });

    // 5. Accordion FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            item.classList.toggle('active');
            if (item.classList.contains('active')) content.style.maxHeight = content.scrollHeight + "px";
            else content.style.maxHeight = null;
        });
    });
    
    // 6. Progress Bars Init
    setTimeout(() => {
        document.querySelectorAll('.progress-fill:not([id="p-bar"])').forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) bar.style.width = width;
        });
    }, 300);
});