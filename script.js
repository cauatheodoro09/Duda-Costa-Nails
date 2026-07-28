// ==============================
// Duda Costa Nails - Script
// ==============================

// Confirmação do formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("💖 Agendamento enviado com sucesso!\nEm breve entraremos em contato.");

    form.reset();
});

// Animação ao rolar a página
const sections = document.querySelectorAll("section");

const reveal = () => {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();



window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// Zoom nas imagens da galeria
const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
});

// Destaque do menu conforme a seção visível
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

console.log("Bella Nails carregado com sucesso! 💅");