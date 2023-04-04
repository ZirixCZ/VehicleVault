### :warning: Warning
I recommend cloning the repository with sparse-checkout to avoid having to download large files in README.
If it isn't a problem to download extra 70MB of data, you can clone as usual.

# VehicleVault
Vehicle management system for railroad engineers. This demo allows you to view, add and delete vehicles of three types: Locomotive, Wagon and Cargo. It uses Spring Boot for the API and vanilla javascript for the frontend. All data is stored in a postgres database running in a Docker container.

## Component Diagram

### GET
###### See all locomotives stored in the database

`{{baseUri}}/fetchLocomotives`

###### See all wagons stored in the database

`{{baseUri}}/fetchWagons`

###### See all cargo trains stored in the database

`{{baseUri}}/fetchCargo`

### POST

###### Store locomotives in the database

`{{baseUri}}/addLocomotive`
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

###### Store cargo trains in the database

`{{baseUri}}/addCargo`
Params:
```
id: number
uic: number
maxSpeed: number
length: number
maxCarryWeight: number
```

###### Store cargo trains in the database

`{{baseUri}}/addWagons`
Params:
```
id: number
uic: number
maxSpeed: number
length: number
capacity: number
```

https://user-images.githubusercontent.com/49836430/229745384-b0970e9a-3689-47ee-9896-ed4073e9564a.mov


https://user-images.githubusercontent.com/49836430/229745355-dc829fa2-fd33-4ea0-b583-cdbec3025508.mov

## Homework answers

### Inheritance

Inheritance is a process that allows creating new classes based on existing ones. With inheritance, a new class can inherit properties and methods from another class, which makes coding easier and more organized. This allows for more efficient and less error-prone program development.


### Polymorphism

Polymorphism allows classes to share the same method names, but these methods can have different implementations. This enables programmers to write code that can work with different types of objects without having to write specific code for each type.

There are two types of polymorphism: static and dynamic. Static polymorphism pertains to method overloading, where the same method is used for different types of inputs. Dynamic polymorphism pertains to method overriding, where the same method is used for different classes.


### Generics

Generics allow writing code that can work with different types of data. Generic classes and methods are very useful for writing general-purpose code that can work with various data types. This enables writing code that is much more flexible.
