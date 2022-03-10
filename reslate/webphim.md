---
title: WebPhim API v1.0
language_tabs:
  - shell: curl
  - javascript: JavaScript
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="webphim-api">WebPhim API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an simple api-server for a movie website

Base URLs:

* <a href="https://thunderv-2.southeastasia.cloudapp.azure.com:5000">https://thunderv-2.southeastasia.cloudapp.azure.com:5000</a>

Email: <a href="mailto:bang2001vl@outlook.com.vn">Support</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="webphim-api-auth">auth</h1>

All thing about auth

## post__auth_destroysession

> Code samples

```shell
# You can also use wget
curl -X POST https://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```javascript
const inputBody = '{
  "token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /auth/destroysession`

Destroy(logout) session 

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="post__auth_destroysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|false|none|

> Example responses

> Destroyed session successful

```json
{
  "result": true
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="post__auth_destroysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="post__auth_destroysession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api-login">login</h1>

All thing about login

## post__login

> Code samples

```shell
# You can also use wget
curl -X POST https://thunderv-2.southeastasia.cloudapp.azure.com:5000/login \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```javascript
const inputBody = '{
  "account": {
    "username": "string",
    "password": "string"
  },
  "deviceInfo": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /login`

Authorize by account data

> Body parameter

```json
{
  "account": {
    "username": "string",
    "password": "string"
  },
  "deviceInfo": "string"
}
```

<h3 id="post__login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account|body|object|false|none|
|»» username|body|string|false|none|
|»» password|body|string|false|none|
|» deviceInfo|body|string|false|none|

> Example responses

> Login successful and return a token for further api accesss

```json
{
  "result": true,
  "data": {
    "token": "YOUR_TOKEN_HERE"
  }
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="post__login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="post__login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api-movie">movie</h1>

All thing about movie

## get__movie_list

> Code samples

```shell
# You can also use wget
curl -X GET https://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list \
  -H 'Accept: application/json'

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /movie/list`

Get list movie include on-air and coming-soon

> Example responses

> Return lists that contain on-air and coming-soon movies

```json
{
  "result": true,
  "data": {
    "movies": {
      "onAir": [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "coming": [
        8,
        9
      ]
    }
  }
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="get__movie_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="get__movie_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>

## get__movie_overview

> Code samples

```shell
# You can also use wget
curl -X GET https://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overview \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```javascript
const inputBody = '{
  "movieID": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overview',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /movie/overview`

Get list movie include on-air and coming-soon

> Body parameter

```json
{
  "movieID": 1
}
```

<h3 id="get__movie_overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» movieID|body|number|false|none|

> Example responses

> Return overview info of an movie

```json
{
  "result": true,
  "data": {
    "movieOverview": {
      "id": 1,
      "title": "Spider-Man: No Way Home",
      "restrictTypeID": 1,
      "subtittleTypeID": 1,
      "durations": 120,
      "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
      "releaseDate": "2021-10-20",
      "description": "Phim này hay lắm. Studio thích lừa lắm",
      "status": 2,
      "avatar": [
        "/uploads/movie/avatar/test.jpg"
      ],
      "banner": [
        "/uploads/movie/banner/test.jpg"
      ],
      "cast": [
        {
          "id": 1,
          "name": "Tome Holland",
          "homepageURI": "https://en.wikipedia.org/wiki/Tom_Holland"
        },
        {
          "id": 2,
          "name": "Zendaya",
          "homepageURI": "https://en.wikipedia.org/wiki/Zendaya"
        }
      ],
      "director": [
        {
          "id": 3,
          "name": "Jon Watts",
          "homepageURI": "https://en.wikipedia.org/wiki/Jon_Watts"
        }
      ],
      "studio": [
        {
          "id": 1,
          "name": "Marvel",
          "homepageURI": "https://www.marvel.com"
        }
      ]
    }
  }
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="get__movie_overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="get__movie_overview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api-signup">signup</h1>

All thing about signup

## post__signup

> Code samples

```shell
# You can also use wget
curl -X POST https://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```javascript
const inputBody = '{
  "account": {
    "username": "string",
    "password": "string"
  },
  "userInfo": {
    "fullname": "string",
    "email": "string",
    "gender": 0,
    "address": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /signup`

Send a comfirm email to user

> Body parameter

```json
{
  "account": {
    "username": "string",
    "password": "string"
  },
  "userInfo": {
    "fullname": "string",
    "email": "string",
    "gender": 0,
    "address": "string"
  }
}
```

<h3 id="post__signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account|body|object|false|none|
|»» username|body|string|false|none|
|»» password|body|string|false|none|
|» userInfo|body|object|false|none|
|»» fullname|body|string|false|none|
|»» email|body|string|false|none|
|»» gender|body|number|false|none|
|»» address|body|string|false|none|

> Example responses

> Data has been insert to db. An confirmation email has been sent to user's email address. But email not being active yet

```json
{
  "result": true
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="post__signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="post__signup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>

## post__signup_confirm

> Code samples

```shell
# You can also use wget
curl -X POST https://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm \
  -H 'Accept: application/json'

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /signup/confirm`

Confirm registeration data

<h3 id="post__signup_confirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|

> Example responses

> Email has been confirmed successfully

```json
{
  "result": true
}
```

> This response would be sent back when occur an error

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="post__signup_confirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Normal|Inline|

<h3 id="post__signup_confirm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|boolean|true|none|Return true if request has been complete|
|» data|object|false|none|Data return from request, maybe undefined|
|» errorCode|number|false|none|Undefined if there was no error|
|» errorMeassage|string|false|none|Undefined if there was no error|

<aside class="success">
This operation does not require authentication
</aside>
