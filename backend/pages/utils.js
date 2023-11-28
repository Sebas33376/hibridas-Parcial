function createPageProyects(title, content) {
  let html = "";

  html += `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>`;
  html += "<title>" + title + "</title></head><body>";
  html += `<nav class="navbar navbar-expand-lg bg-primary">
    <div class=" container-fluid">
    <a class="navbar-brand text-primary bg-light px-3 fs-4 rounded" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects">Proyectos</a></li>
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects?section=mobile">Mobile</a></li>
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects?section=landing">LandingPage</a></li>
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects?section=webapp">Web app</a></li>
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects?section=ecommerce">e-Commerce</a></li>
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/proyects?section=game">Games</a></li>
    </ul>
    </div>
    </div>
    </nav>`;
  html += "<h1 class='text-center text-primary m-5'>" + title + "</h1>";
  html += content;
  html += `<footer class="bg-primary p-5 mt-5"> 
    <p class="text-center text-light"> AH20232CP1 made by Tomas Friz, Sebastián Daniel Loria y Josefina Nocelli
     </p></footer></body > </html >`;

  return html;
}

function createPageClients(title, content) {
  let html = "";

  html += `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>`;
  html += "<title>" + title + "</title></head><body>";
  html += `<nav class="navbar navbar-expand-lg bg-primary">
    <div class=" container-fluid">
    <a class="navbar-brand text-primary bg-light px-3 fs-4 rounded" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link text-light fs-4" href="/client">Clientes</a></li>
    </ul>
    </div>
    </div>
    </nav>`;
  html += "<h1 class='text-center text-primary m-5'>" + title + "</h1>";
  html += content;
  html += `<footer class="bg-primary p-5 mt-5"> 
    <p class="text-center text-light"> AH20232CP1 made by Tomas Friz, Sebastián Daniel Loria y Josefina Nocelli
     </p></footer></body > </html >`;

  return html;
}

export {
  createPageProyects,
  createPageClients
}