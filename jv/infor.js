let todo = document.querySelector("#todo");
let botoncito = document.querySelector("#btn");

botoncito.addEventListener("change", function () {
  todo.classList.toggle("dark");
});









const thaliaVA = {
  nombre: "Thalia Villar",

  profesion: "Front-End Developer",

  slogan: "FULL STACK Front-End Developer",

  experiencia: 4,

  descripcion: `
    I am a Front-End Developer focused on creating modern,
    responsive and engaging interfaces.

    I work with technologies such as HTML, CSS,
    Tailwind CSS and JavaScript.

    I am passionate about transforming ideas into
    intuitive digital experiences.
  `,

  expertise: {
    backend: 90,
    cms: 50,
    frontend: 91
  },

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Internet",
    "Tailwind CSS",
    "NodeJS"
  ],

  additionalSkills: [
    "Bootstrap",
    "Axios",
    "Redux",
    "Material UI",
    "Firebase",
    "WordPress",
    "Framer Motion"
  ],

  proyectos: [
    {
      nombre: "Plumbing Company"
    }
  ],

  galeria: [
    "img/imagen.png",
    "img/imagen2.png",
    "img/imagen3.png"
  ],

  contacto: {
    formulario: true
  }
};

console.log(thaliaVA);



document.getElementById("nombre").innerHTML = `
  I'm <em class="text-[#E3FF6A] not-italic text-3xl md:text-5xl">
    ${thaliaVA.nombre}
  </em>
`;
document.getElementById("profesion").textContent = thaliaVA.profesion;
document.getElementById("descripcion").textContent = thaliaVA.descripcion;

