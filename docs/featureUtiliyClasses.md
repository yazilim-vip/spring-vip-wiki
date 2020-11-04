---
id: featureUtilityClasses
title: Utility Classes
sidebar_label: Utility Classes
---

## jsonRequest Method

To Make an HTTP request to a REST Service

**Parameters**

| Parameters     | Description                                                               |
| :------------- | :------------------------------------------------------------------------ |
| baseUri        | the base URI that request will be made                                    |
| resource       | the resource requested by server                                          |
| typeReference  | the response type of HTTP response will be mapped                         |
| urlParamMap    | URL parameters passed through URI (e.g. /api/car/{brand} => /api/car/BMW) |
| queryParamMap  | URL parameters passed as query params (e.g. /api/car?brand=BMW)           |
| httpMethod     | type of HTTP request (GET, POST, etc.)                                    |
| headerParamMap | the extra fields that could be passed through header                      |
| restTemplate   | the Spring RestTemplate instance to make http requests                    |

Returns HTTP response returned by  endpoint
