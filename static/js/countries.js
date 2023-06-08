
async function listAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const jsonData = await response.json();
  return jsonData;
}

async function listCountry(countryName) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const jsonData = await response.json();
  return jsonData;
}

function retrieveDataForSchool(countryName) {
  var jsonData = listCountry(countryName).then(json => {
    let country = []
    return jsonData;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded")
  document.getElementById("countryForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("formSubmitted")
    var countryName = document.getElementById("countryName").value;
    var countryList = document.getElementById("countryList");

    var country = await listCountry(countryName);
    country = country[0]
    console.log(country)
    if (country) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<h2>" + country.name.official + "</h2>" +
            "<p>Capital: " + country.capital + "</p>" +
            "<p>Population: " + country.population + "</p>" +
            "<p>Area: " + country.area + "</p>";
        countryList.appendChild(listItem);
    } else {
        var listItem = document.createElement("li");
        listItem.textContent = "Country not found.";
        countryList.appendChild(listItem);
    }
  });
});

function findCountry(name) {
  for (var i = 0; i < countries.length; i++) {
      if (countries[i].name.toLowerCase() === name.toLowerCase()) {
          return countries[i];
      }
  }
  return null;
}