// const thaliaVA = {
//     nombre: "Thalia Alejo Villar",
//     profesion: "Estudiante de Desarrollo de Software",

//     descripcion:
//         "Apasionada por el desarrollo web y la programación, enfocada en crear proyectos y aprender nuevas tecnologías.",

//     niveles: {
//         backend: 70,
//         frontend: 30,
//         ia: 80
//     },

//     skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "Bootstrap",
//         "Git",
//         "GitHub"
//     ],

//     additionalSkills: [
//         "QA Testing",
//         "Trabajo en equipo",
//         "Resolución de problemas",
//         "Aprendizaje continuo"
//     ],

//     proyectos: [
//         {
//             nombre: "Portafolio Personal",
//             descripcion: "Mini proyecto web personal",
//             tecnologias: ["HTML", "CSS", "JavaScript"],
//             link: "https://portafolio-navy-six-70.vercel.app/"
//         },
//         {
//             nombre: "Sistema de Reservas",
//             descripcion: "Proyecto de base de datos y gestión",
//             tecnologias: ["SQL", "JavaScript"]
//         }
//     ],

//     redes: {
//         github: "",
//         linkedin: "",
//         instagram: ""
//     },

//     contacto: {
//         email: "thalia@gmail.com",
//         telefono: "+51 942142627"
//     },

//     imgProfile: "./imagenes/perfil.png",

//     galeria: [
//         "./imagenes/proyecto1.png",
//         "./imagenes/proyecto2.png",
//         "./imagenes/proyecto3.png"
//     ]
// };

// console.log(thaliaVA)
const darkModeInput = document.querySelector("#darkmode");

if (darkModeInput) {
  darkModeInput.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark");
  });
}