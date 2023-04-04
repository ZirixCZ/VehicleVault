### :warning: Warning
I recommend cloning the repository with sparse-checkout to avoid having to download large files in README.
If it isn't a problem to download extra 70MB of data, you can clone as usual.

# VehicleVault
Vehicle management system for railroad engineers. This demo allows you to view, add and delete vehicles of three types: Locomotive, Wagon and Cargo. It uses Spring Boot for the API and vanilla javascript for the frontend. All data is stored in a postgres database running in a Docker container.

## Component Diagram

#### HTTP
###### GET
See all locomotives stored in the database

`{{baseUri}}/fetchLocomotives`

See all wagons stored in the database

`{{baseUri}}/fetchWagons`

See all cargo trains stored in the database

`{{baseUri}}/fetchCargo`

###### POST

Store locomotives in the database

`{{baseUri}}/fetchCargo`
Params:
```
id: number
uic: number
maxSpeed: number
length: number
locomotiveType: String
power: number
pullPower: number
```


https://user-images.githubusercontent.com/49836430/229745384-b0970e9a-3689-47ee-9896-ed4073e9564a.mov


https://user-images.githubusercontent.com/49836430/229745355-dc829fa2-fd33-4ea0-b583-cdbec3025508.mov

