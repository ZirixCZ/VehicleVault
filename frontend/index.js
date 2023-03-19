let vehicleList = document.getElementById("vehicleList");
let fetchBtn = document.getElementById("fetch");

// submit
let submitBtn = document.getElementById("addVehicleBtn");
let uic = document.getElementById("uicInput");
let length = document.getElementById("lengthInput");
let maxspeed = document.getElementById("uicInput");

submitBtn.addEventListener("click", function () {
  addVehicle(uic, length, maxspeed);
});

function addVehicle(uic, length, maxspeed) {
  const vehicle = {
    uic: uic.value,
    length: length.value,
    maxspeed: maxspeed.value,
  };

  fetch("http://127.0.0.1:8080/vehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([vehicle]),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    });
}

let vehicles = [];

fetchBtn.addEventListener("click", function () {
  fetchVehicles();
});

function fetchVehicles() {
  fetch("http://127.0.0.1:8080/fetchVehicles")
    .then((response) => response.json())
    .then((data) => {
      renderVehicles(data);
    });
}

function renderVehicles(data) {
  vehicleList.innerHTML = "";

  const heading = `
        <tr>
         <th>uic</th>
         <th>length</th>
         <th>max. speed</th>
        </tr>
        `;
  vehicleList.innerHTML = heading;

  data.forEach(({ uic, length, maxspeed }) => {
    const tr = `
                <tr>
                <td>${uic}</td>
                <td>${length}</td>
                <td>${maxspeed}</td>
                </tr>
    `;

    vehicleList.innerHTML += tr;
  });
}
