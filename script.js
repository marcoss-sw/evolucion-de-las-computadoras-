const events = [
    { year: "3000 a.C.", title: "Ábaco", 
      description: "Primera herramienta de cálculo usada por civilizaciones antiguas como Mesopotamia y China. Utilizaban cuentas móviles para realizar operaciones aritméticas básicas como sumas y restas." },
    { year: "1642", title: "Pascalina", 
      description: "Inventada por Blaise Pascal, fue la primera calculadora mecánica. Utilizaba ruedas dentadas para realizar cálculos automáticos y ayudó en tareas contables." },
    { year: "1801", title: "Telar de Jacquard", 
      description: "Telar automático que usaba tarjetas perforadas para crear patrones textiles complejos. Este invento inspiró futuros sistemas de computación." },
    { year: "1837", title: "Máquina Analítica", 
      description: "Diseñada por Charles Babbage, se considera la primera computadora programable. Podía realizar cálculos complejos y almacenar información temporal." },
    { year: "1936", title: "Máquina de Turing", 
      description: "Modelo teórico creado por Alan Turing que definió los conceptos de computación y algoritmos, sentando las bases para las computadoras modernas." },
    { year: "1940-1956", title: "Primera Generación", 
      description: "Usaban tubos de vacío para procesar datos. Eran enormes, costosas y generaban mucho calor. Ejemplos: ENIAC, UNIVAC I." },
    { year: "1956-1964", title: "Segunda Generación", 
      description: "Se sustituyeron los tubos de vacío por transistores, lo que hizo a las computadoras más pequeñas, rápidas y fiables. Ejemplo: IBM 1401." },
    { year: "1964-1971", title: "Tercera Generación", 
      description: "Los circuitos integrados mejoraron la velocidad y eficiencia. Aparecieron las primeras minicomputadoras." },
    { year: "1971-1980", title: "Cuarta Generación", 
      description: "Los microprocesadores llevaron a computadoras más pequeñas y potentes. Surgieron las primeras PCs como Apple II y IBM PC." },
    { year: "1980-1990", title: "Quinta Generación", 
      description: "Se desarrollaron redes, almacenamiento masivo e IA. Surgieron sistemas operativos como Windows y Mac OS." },
    { year: "1990-2000", title: "Sexta Generación", 
      description: "Se popularizaron computadoras portátiles, teléfonos inteligentes e Internet. La conectividad global creció rápidamente." },
    { year: "2000-Actualidad", title: "Era Moderna", 
      description: "IA avanzada, computación en la nube, redes 5G y dispositivos inteligentes son parte de la vida diaria." }
];

const intro = document.getElementById("intro");
const content = document.getElementById("content");
const timeline = document.getElementById("timeline");

// Mostrar contenido tras la presentación
setTimeout(() => {
    intro.style.display = "none";
    content.classList.remove("hidden");
}, 5000);

// Crear secciones
events.forEach(event => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${event.year} - ${event.title}</h2>
        <div class="card-content">
            <p>${event.description}</p>
        </div>
    `;
    timeline.appendChild(card);

    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
