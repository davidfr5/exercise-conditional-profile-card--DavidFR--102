const variables = {
  includeCover: true,
  background: "https://definicion.de/wp-content/uploads/2008/09/campo-1.jpg",
  avatarURL: "https://i.pinimg.com/736x/c7/af/65/c7af6532002fdc64c47f0a499f3349d8.jpg",
  socialMediaPosition: "right",
  twitter: "", 
  github: "davidfr5",
  linkedin: "https://www.linkedin.com/in/fdezruizdavid/",
  instagram: "",
  name: "David",
  lastName: "Fernández",
  role: "Web Developer",
  country: "Spain",
  city: "Madrid"
};

//Se ejecuta cuando la página termina de cargar (window.onload)

window.onload = () => {
  render(variables);

  const fields = [
    "includeCover", "name", "lastName", "socialMediaPosition",
    "twitter", "github", "linkedin", "instagram", "role", "city", "country"
  ];

  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", event => {
      let value = event.target.value;
      variables[field] =
        field === "includeCover" ? value === "true" :
        field === "linkedin" ? "https://www.linkedin.com/in/fdezruizdavid/" : value;

      variables.avatarURL = "https://i.pinimg.com/736x/c7/af/65/c7af6532002fdc64c47f0a499f3349d8.jpg";
      variables.background = "https://definicion.de/wp-content/uploads/2008/09/campo-1.jpg";

      render(variables);
    });
  });
};

function render(vars = {}) {
  let fullName = `${vars.name || "Name"} ${vars.lastName || "Last Name"}`;
  let location = `${vars.city || "City"}, ${vars.country || "Country"}`;
  let role = vars.role || "Role";

// includeCover permite ocultar o mostrar la imagen de fondo
  let cover = vars.includeCover
    ? `<div class="cover" style="background-image: url(${vars.background})"></div>`
    : `<div class="cover bg-light"></div>`;

  let socialLinks = `
    <a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter"></i></a>
    <a href="https://github.com/${vars.github}" target="_blank"><i class="bi bi-github"></i></a>
    <a href="${vars.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
    <a href="https://instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
  `;

  document.querySelector("#widget_content").innerHTML = `
    <div class="card card-widget text-center">
      ${cover}
      <img class="avatar rounded-circle" src="${vars.avatarURL}" alt="Avatar" />
      <div class="card-body">
        <h4 class="fw-bold">${fullName}</h4>
        <p class="text-muted">${role}</p>
        <p class="text-muted">${location}</p>
      </div>
      <div class="social-bar ${vars.socialMediaPosition}">
        ${socialLinks}
      </div>
    </div>
  `;
}
