export default function renderMap(lat, lgt) {
  const divCep = document.querySelector("#consult-cep");
  const btnMaps = document.querySelector("#btn-map");

  btnMaps.style.display = "none";

  divCep.innerHTML += `  
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14713.595064253397!2d${lgt}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1657141703121!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        <p>Não foi possível acessar o Google Maps ou seu Navegador não aceita Iframe!.</p>
    </iframe>    
    `;
}
