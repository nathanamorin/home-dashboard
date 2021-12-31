fetch('/apps.json')
  .then(response => response.json())
  .then(data => {
    const apps = data.apps

    const appBoxes = apps.map(app => {
      return `
            <div class="col s12 m3">
              <div class="card-panel teal">
                <a href="${app.url}">
                    <img style="max-height:100%; max-width:100%;  object-fit: contain;" src="${app.icon}">
                </a>
              </div>
            </div>
      `
    })



    var row = ""
    appBoxes.forEach(box => {
      row += box
    });
    document.getElementById("apps").innerHTML += `
      <div class="row">
          ${row}
      </div>
    `
  })

