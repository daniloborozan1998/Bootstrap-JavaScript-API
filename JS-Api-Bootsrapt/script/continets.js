import { data as dataFromFile } from './data.js';

let promise = new Promise(function(resolve, reject) {
    resolve(dataFromFile);
})

const html = {
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.getElementById("searchBtn"),
    resetBtn: document.getElementById("resetBtn"),
    spiner: document.getElementById("spiner"),
    cardContainer: document.getElementById("cardContainer"),
    notification: document.getElementById("notification"),
    btnEuropa: document.getElementById("btnEuropa"),
    btnAfrica: document.getElementById("btnAfrica"),
    btnAsia: document.getElementById("btnAsia"),
    btnNoAmerica: document.getElementById("btnNoAmerica"),
    btnSoAmerica: document.getElementById("btnSoAmerica"),
    btnAustralia: document.getElementById("btnAustralia"),
    carouselExampleCaptions: document.getElementById("carouselExampleCaptions")
}


function createCard(country) {
    return `
    <div class="col mb-4">
        <div class="card">
            <img src="${country.flag}" alt="${country.name} Flag">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <p class="card-text">${country.name} is country with population of ${country.population} with the capital city ${country.capital}. Official language is: ${country.languages[0].name}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${createWikiLink(country.name)}" target="_blank">Wikipedia</a></small>
            </div>
        </div>
    </div>`
}

function createWikiLink(name) {
    return name.split(" ").join("_");
}

function spinerLoader(state) {
    if (state) {
        html.spiner.style.display = "block";
    } else {
        html.spiner.style.display = "none";
    }
}

function creatCarpuselEuropa() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/europa3.png" class="d-block w-100" alt="Map of europa">
    </div>
    <div class="carousel-item">
      <img src="../img/europa4.png" class="d-block w-100" alt="Map of europa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}

function creatCarpuselAfrica() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/africa2.png" class="d-block w-100" alt="Map of africa">
    </div>
    <div class="carousel-item">
      <img src="../img/africa3.png" class="d-block w-100" alt="Map of africa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}

function creatCarpuselAsia() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/asia2.png" class="d-block w-100" alt="Map of africa">
    </div>
    <div class="carousel-item">
      <img src="../img/asia3.png" class="d-block w-100" alt="Map of africa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}

function creatCarpuselNorthAmerica() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/noamerica2.png" class="d-block w-100" alt="Map of africa">
    </div>
    <div class="carousel-item">
      <img src="../img/noamerica3.png" class="d-block w-100" alt="Map of africa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}

function creatCarpuselSouthAmerica() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/soamerica2.png" class="d-block w-100" alt="Map of africa">
    </div>
    <div class="carousel-item">
      <img src="../img/soamerica3.png" class="d-block w-100" alt="Map of africa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}

function creatCarpuselAustralia() {
    return `
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/australia2.png" class="d-block w-100" alt="Map of africa">
    </div>
    <div class="carousel-item">
      <img src="../img/australia3.png" class="d-block w-100" alt="Map of africa">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    `
}



html.searchBtn.addEventListener("click", function() {
    spinerLoader(true);
    fetch(`https://restcountries.eu/rest/v2/name/${html.searchInput.value}`)
        .then(data => data.json())
        .then(function(result) {
            spinerLoader(false);
            html.notification.innerHTML = "";
            html.cardContainer.innerHTML = "";
            try {
                for (let country of result) {
                    html.cardContainer.innerHTML += createCard(country);
                }
            } catch (error) {
                html.notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
                You have entered a wrong country name, please try again!
            </div>
            `
            }
        })
})

html.searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinerLoader(true);
        fetch(`https://restcountries.eu/rest/v2/name/${html.searchInput.value}`)
            .then(data => data.json())
            .then(function(result) {
                spinerLoader(false);
                html.cardContainer.innerHTML = "";
                html.notification.innerHTML = "";
                try {
                    for (let country of result) {
                        html.cardContainer.innerHTML += createCard(country);
                    }
                } catch (error) {
                    html.notification.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    You have entered a wrong country name, please try again!
                </div>`
                }
            })
    }
})

html.resetBtn.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.searchInput.innerHTML = "";
    html.searchInput.value = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
})



html.btnEuropa.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";

    html.carouselExampleCaptions.innerHTML += creatCarpuselEuropa();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.region == "Europe");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})
html.btnAfrica.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
    html.carouselExampleCaptions.innerHTML += creatCarpuselAfrica();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.region == "Africa");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})
html.btnAsia.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
    html.carouselExampleCaptions.innerHTML += creatCarpuselAsia();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.region == "Asia");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})
html.btnSoAmerica.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
    html.carouselExampleCaptions.innerHTML += creatCarpuselSouthAmerica();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.subregion == "South America");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})
html.btnNoAmerica.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
    html.carouselExampleCaptions.innerHTML += creatCarpuselNorthAmerica();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.subregion == "Northern America");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})
html.btnAustralia.addEventListener("click", function() {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = "";
    html.carouselExampleCaptions.innerHTML = creatCarpuselAustralia();
    promise.then(function(dataFromFile) {
        let result = dataFromFile.filter(x => x.region == "Oceania");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})