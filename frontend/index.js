let vehicleList = document.getElementById("vehicleList");
let fetchBtn = document.getElementById("fetch");

// submit
let submitBtn = document.getElementById("addVehicleBtn");
let uic = document.getElementById("uicInput");
let length = document.getElementById("lengthInput");
let maxspeed = document.getElementById("speedInput");
let locomotiveType = document.getElementById("locomotiveType");
let power = document.getElementById("power");
let pullPower = document.getElementById("pullPower");
let capacity = document.getElementById("capacity");
let maxCarryWeight = document.getElementById("maxCarryWeight");

let fileUpload = document.getElementById("fileInput");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const vehicle = [
    {
      uic: uic.value,
      length: length.value,
      maxspeed: maxspeed.value,
      locomotiveType: locomotiveType.value,
      power: power.value,
      pullPower: pullPower.value,
      capacity: capacity.value,
      maxCarryWeight: maxCarryWeight.value,
    },
  ];
  addVehicle(vehicle);
});

fileUpload.addEventListener("change", function (event) {
  var reader = new FileReader();

  reader.onload = function (event) {
    var jsonObj = JSON.parse(event.target.result);
    addVehicle(jsonObj);
  };

  reader.readAsText(event.target.files[0]);
});

function addVehicle(vehicle) {
  if (vehicle.length === 0) return;
  // check of global properties
  for (let i = 0; i < vehicle.length; i++) {
    if (!vehicle[i].uic || !vehicle[i].length || !vehicle[i].maxspeed) return;
  }

  fetch("http://127.0.0.1:8080/vehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicle),
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
