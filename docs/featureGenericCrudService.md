---
id: featureGenericCrudService
title: Generic CRUD Service
sidebar_label: Generic CRUD Service
---

import Gist from 'react-gist';

## Introduction

You can manage the flow from the Entity level to the REST or View (MVC's View) level with the SpringVIP Library. 
 
![res](/img/spring_core_diagram_rev3.png)
 

`JPARepository`, `IGenericServiceCrud` and `AGenericServiceCrud` components could be seen on the figure above already provided by library and Spring Framework to the developer.


* `JPARepository` which is a generic repository, already provided by `Sping Data`. 
* In additon to that `IGenericServiceCrud` and `AGenericServiceCrud` provided by `SpringVIP` library.


The core feature provided by `SpringVIP` library is that  `Generic CRUD Service` implementation for service layer. `Generic CRUD Service` consists of two components.

* **IGenericServiceCrud** provides definiitons of generic CRUD methods for entities
* **AGenericServiceCrud** implements methods defined in `IGenericServiceCrud`  in a generic manner.

Services extends to AGenericServiceCrud inherits methods from SpringVIP Library, like create, read, update, delete methods and so on. Thus developers can use boilerplate service methods quickly.

## Methods
All DB operations are done via `JPARepository` in `Generic CRUD Service`. All exceptions occurred on `JPARepository` layer is handled by `Generic CRUD Service` then an exception thrown. There are some methods for basic CRUD operations are included in `Generic CRUD Service`. They are;

|                |            Description             |
| :------------: | :--------------------------------: |
|   **GetAll**   | To get all records on the database |
|  **GetById**   |   To get record that matching id   |
|    **Save**    |  To save(create or update) entity  |
|   **Create**   |    To create a record by entity    |
|   **Update**   |    To update a record by entity    |
|   **Delete**   |    To delete a record by entity    |
| **DeleteById** |       To delete record by Id       |


## Exceptions
There are some general exceptions can be thrown by generic CRUD service implementation (`AGenericServiceCrud`). 

|                             |                    Description                    |
| :-------------------------: | :-----------------------------------------------: |
| **DatabaseCreateException** | indicates there is an error on `Create` operation |
| **DatabaseDeleteException** | indicates there is an error on `Delete` operation |
|  **DatabaseReadException**  |  indicates there is an error on `Read` operation  |
|  **DatabaseSaveException**  |  indicates there is an error on `Save` operation  |
| **DatabaseUpdateException** | indicates there is an error on `Update` operation |


## Example Usage
To use `Generic CRUD Service` feature you need following;

Let's assume you have an entity named as `Person` on database and you have entity repository named as `IPersonRepo`

### 1) Create a new service interface
<Gist id="868d2ef37d839123f05f189ec4fd9a76"
      file="IPersonService.java"
/>

### 2) Implement service created on previous step
<Gist id="868d2ef37d839123f05f189ec4fd9a76"
      file="PersonServiceImpl.java"
/>
