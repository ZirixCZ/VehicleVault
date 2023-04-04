// Hook vehicleList<table> & fetchBtn<button>
let vehicleList = document.getElementById("vehicleList");
let fetchLocomotives = document.getElementById("fetchLocomotives");
let fetchCargo = document.getElementById("fetchCargo");
let fetchWagon = document.getElementById("fetchWagons");

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
      addVehicle(
        jsonObj,
        jsonObj.locomotiveType
          ? "Locomotive"
          : jsonObj.capacity
          ? "Wagon"
          : "Cargo"
      );
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
  } else if (vehicle.bulkType.value === "Locomotive") {
    for (let i = 0; i < vehicle.payload.length; i++) {
      payload.push({
        uic: vehicle.payload[i].uic,
        length: vehicle.payload[i].length,
        maxspeed: vehicle.payload[i].maxspeed,
        locomotiveType: vehicle.payload[i].locomotiveType,
        power: vehicle.payload[i].power,
        pullPower: vehicle.payload[i].pullPower,
      });
    }
    endpoint = "Locomotive";
  } else if (vehicle.bulkType.value === "Wagon") {
    for (let i = 0; i < vehicle.payload.length; i++) {
      payload.push({
        uic: vehicle.payload[i].uic,
        length: vehicle.payload[i].length,
        maxspeed: vehicle.payload[i].maxspeed,
        locomotiveType: vehicle.payload[i].locomotiveType,
        power: vehicle.payload[i].power,
        pullPower: vehicle.payload[i].pullPower,
      });
    }
    endpoint = "Wagons";
  } else if (vehicle.bulkType.value === "Cargo") {
    for (let i = 0; i < vehicle.payload.length; i++) {
      payload.push({
        uic: vehicle.payload[i].uic,
        length: vehicle.payload[i].length,
        maxspeed: vehicle.payload[i].maxspeed,
        locomotiveType: vehicle.payload[i].locomotiveType,
        power: vehicle.payload[i].power,
        pullPower: vehicle.payload[i].pullPower,
      });
    }
    endpoint = "Cargo";
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
  fetchVehicles("Wagons");
});

function fetchVehicles(endpoint) {
  fetch(`http://127.0.0.1:8080/fetch${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      renderVehicles(data, endpoint);
    });
}

function renderVehicles(data, endpoint) {
  vehicleList.innerHTML = "";

  const heading = `
        <tr>
         <th>uic</th>
         <th>length</th>
         <th>max. speed</th>
                ${
                  endpoint === "Locomotives"
                    ? `<th>loc. type</th> 
                       <th>power</th>
                       <th>pull power</th>`
                    : endpoint == "Cargo"
                    ? `<th>max. carry weight</th>`
                    : `<th>capacity</th>`
                }

        </tr>
        `;
  vehicleList.innerHTML = heading;

  console.log(endpoint);
  data.forEach(
    ({
      uic,
      length,
      maxspeed,
      locomotiveType,
      power,
      pullPower,
      maxCarryWeight,
      capacity,
    }) => {
      const tr = `
                <tr>
                <td>${uic}</td>
                <td>${length}</td>
                <td>${maxspeed}</td>
                  ${
                    endpoint === "Locomotives"
                      ? `<td>${locomotiveType}</td><td>${power}</td><td>${pullPower}</td>`
                      : endpoint == "Cargo"
                      ? `<td>${maxCarryWeight}</td>`
                      : `<td>${capacity}</td>`
                  }
                </tr>
    `;

      vehicleList.innerHTML += tr;
    }
  );
}
