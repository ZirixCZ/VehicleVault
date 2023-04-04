// Hook vehicleList<table> & fetchBtn<button>
let vehicleList = document.getElementById("vehicleList");
let fetchLocomotives = document.getElementById("fetchLocomotives");
let fetchCargo = document.getElementById("fetchCargo");
let fetchWagon = document.getElementById("fetchWagon");

const callApi = (vehicle, endpoint) => {
  console.log(vehicle, endpoint);
  fetch(`http://127.0.0.1:8080/add${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: vehicle,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    });
};
// Fetch values from HTML inputs
const getValues = () => [
  {
    uic: document.getElementById("uicInput").value,
    length: document.getElementById("lengthInput").value,
    maxspeed: document.getElementById("speedInput").value,
    locomotiveType: document.getElementById("locomotiveType").value,
    power: document.getElementById("power").value,
    pullPower: document.getElementById("pullPower").value,
    capacity: document.getElementById("capacity").value,
    maxCarryWeight: document.getElementById("maxCarryWeight").value,
  },
];

const type = {
  locomotive: false,
  cargo: false,
  wagon: false,
};
document.querySelectorAll('input[type="radio"]').forEach((button, i) => {
  button.addEventListener("change", () => {
    if (button.id === "locomotiveRadio") {
      type.locomotive = true;
      type.cargo = false;
      type.wagon = false;
    }
    if (button.id === "cargoRadio") {
      type.locomotive = false;
      type.cargo = true;
      type.wagon = false;
    }
    if (button.id === "wagonRadio") {
      type.locomotive = false;
      type.cargo = false;
      type.wagon = true;
    }
  });
});

// Add a new vehicle on click
document
  .getElementById("addVehicleBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    addVehicle(getValues());
  });

// Add a new vehicle on file upload
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    var reader = new FileReader();

    reader.onload = function (event) {
      var jsonObj = JSON.parse(event.target.result);
      addVehicle(jsonObj);
    };

    reader.readAsText(event.target.files[0]);
  });

// Add vehicle function
function addVehicle(vehicle) {
  // return if there is no vehicle to be added
  if (vehicle.length === 0) return;

  // return if there is no uic, length or maxspeed
  for (let i = 0; i < vehicle.length; i++) {
    if (!vehicle[i].uic || !vehicle[i].length || !vehicle[i].maxspeed) return;
  }

  let endpoint;
  let payload = [];
  if (type.locomotive) {
    for (let i = 0; i < vehicle.length; i++) {
      if (
        !vehicle[i].locomotiveType ||
        !vehicle[i].power ||
        !vehicle[i].pullPower
      ) {
        alert("invalid locomotive");
        return;
      }
      payload.push({
        uic: vehicle[i].uic,
        length: vehicle[i].length,
        maxspeed: vehicle[i].maxspeed,
        locomotiveType: vehicle[i].locomotiveType,
        power: vehicle[i].power,
        pullPower: vehicle[i].pullPower,
      });
    }
    endpoint = "Locomotive";
  } else if (type.cargo) {
    for (let i = 0; i < vehicle.length; i++) {
      if (!vehicle[i].maxCarryWeight) {
        alert("invalid cargo");
        return;
      }
      payload.push({
        uic: vehicle[i].uic,
        length: vehicle[i].length,
        maxspeed: vehicle[i].maxspeed,
        maxCarryWeight: vehicle[i].maxCarryWeight,
      });
    }
    endpoint = "Cargo";
  } else if (type.wagon) {
    for (let i = 0; i < vehicle.length; i++) {
      if (!vehicle[i].capacity) {
        alert("invalid wagon");
        return;
      }
      payload.push({
        uic: vehicle[i].uic,
        length: vehicle[i].length,
        maxspeed: vehicle[i].maxspeed,
        capacity: vehicle[i].capacity,
      });
    }
    endpoint = "Wagon";
  }

  callApi(JSON.stringify(payload), endpoint);
}

let vehicles = [];

fetchLocomotives.addEventListener("click", function () {
  fetchVehicles("Locomotives");
});

fetchCargo.addEventListener("click", function () {
  fetchVehicles("Cargo");
});

fetchWagon.addEventListener("click", function () {
  fetchVehicles("Wagon");
});

function fetchVehicles(endpoint) {
  fetch(`http://127.0.0.1:8080/fetch${endpoint}`)
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
