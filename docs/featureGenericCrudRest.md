---
id: featureGenericCrudRest
title: Generic CRUD Rest
sidebar_label: Generic CRUD Rest
---

import Gist from 'react-gist';

## Introduction

Generic CRUD operations defined in service layer can be used in REST layer too. 

To use `Generic CRUD Rest Controller` feature you need following; Let's assume you have a table named as `User` on database. Then you need;

## Requirements
1. Entity for User
2. `Generic CRUD Service` for `User` entity.

## Usage
1. extending a `AGenericRest`
2. annotate class with `@GenericRest` annotation
3. Then select some of the following annotations depending on your needs.

## Method Annotations
| Annotation |       Description       | HTTP Method | Default URI | Request Body |
| :--------: | :---------------------: | :---------: | :---------: | :----------: |
|   GetAll   |    get all entitites    |     GET     |      /      |      -       |
|  GetById   |    get entity by id     |     GET     |    /{id}    |      -       |
|   Create   |      create entity      |    POST     |      /      |    entity    |
|    Save    | create or update entity |    POST     |      /      |    entity    |
|   Update   |      update entity      |     PUT     |      /      |    entity    |
| DeleteAll  |   delete all entities   |   DELETE    |      /      |      -       |
| DeleteById |   delete entity by id   |   DELETE    |    /{id}    |      -       |
|   Delete   |      delete entity      |   DELETE    |      /      |    entity    |

## Exmaple RestController

<Gist id="868d2ef37d839123f05f189ec4fd9a76"
      file="RestPerson.java"
/>

## Rest Response Builder

### Default Respone Builder
* RestError
* RestErrorResponse
* RestResponse
