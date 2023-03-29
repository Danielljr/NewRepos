/*const buildHTML = (userData) => {
    const nome = userData.name;
    const avatarUrl = userData.avatar_url;
    // ...outros campos do objeto JSON
  
    // Cria o HTML usando os dados
    const html = `
        <div>
          <h1>${nome}</h2>
          <h2>${userData.bio}</h2>
          <h3>${userData.location}</h3>
          <img src="${avatarUrl}">
          <!-- outros campos do objeto JSON -->
        </div>
      `;
  
    // Adiciona o HTML à página
    document.querySelector("#container").innerHTML = html;
  };
  
  async function getData() {
    const response = await fetch("https://api.github.com/users/MateusCastro2203");
    const data = await response.json();
    buildHTML(data);
    console.log(data);
  }
  
  getData();*/
