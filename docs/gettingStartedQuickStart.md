---
id: gettingStartedQuickStart
title: Quick Start
sidebar_label: Quick Start
---

import Gist from 'react-gist';

## Add library as dependency
```xml
<dependency>
    <groupId>vip.yazilim.libs</groupId>
    <artifactId>spring-vip</artifactId>
    <version>VERSION</version>
</dependency>
```

## Create Generic CRUD Service and REST
At the end of the day, you will have the following;
1. **IPersonService:** provides basic CRUD methods for `Person` entity. [see](featureGenericCrudService.md)
2. **RestPerson:** provides selected REST api resources for `Person` entity. [see](featureGenericCrudRest.md)

### 1) Create an Entity class
<Gist id="868d2ef37d839123f05f189ec4fd9a76" file="Person.java" />

### 2) Create a new repository 
<Gist id="868d2ef37d839123f05f189ec4fd9a76" file="IPersonRepo.java" />

### 3) Create a new service interface
<Gist id="868d2ef37d839123f05f189ec4fd9a76" file="IPersonService.java" />

### 4) Implement service
<Gist id="868d2ef37d839123f05f189ec4fd9a76" file="PersonServiceImpl.java" />

### 5) Create generic rest controller
<Gist id="868d2ef37d839123f05f189ec4fd9a76" file="RestPerson.java" />

