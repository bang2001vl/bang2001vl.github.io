---
title: WebPhim API v1.1
language_tabs:
  - javascript
  - shell
  - http
  - python
  - ruby
  - java
  - go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="webphim-api">WebPhim API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an simple api-server for a movie website

Contact Support:
 Email: bang2001vl@outlook.com.vn

Base URLs:

* <a href="http://thunderv-2.southeastasia.cloudapp.azure.com:5000">http://thunderv-2.southeastasia.cloudapp.azure.com:5000</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **token**, in: header. 

<h1 id="webphim-api-auth">auth</h1>

## _auth_destroysession

<a id="opId/auth/destroysession"></a>

> Code samples

```javascript
const inputBody = '{
  "token": "fugiat cillum esse dolore"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Accept: application/json'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/auth/destroysession", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/destroysession`

*/auth/destroysession*

Destroy(logout) session 

> Body parameter

```json
{
  "token": "fugiat cillum esse dolore"
}
```

<h3 id="_auth_destroysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|
|body|body|[authdestroysessionrequest](#schemaauthdestroysessionrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="_auth_destroysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[OK](#schemaok)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api-category">category</h1>

## list

<a id="opIdlist"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /category/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "Hài hước",
        "content": "Coi cảm thấy buồn cười",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "name": "Bi kịch",
        "content": "Coi cảm thấy bi kịch",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[list](#schemalist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## range

<a id="opIdrange"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /category/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "Hài hước",
        "content": "Coi cảm thấy buồn cười",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 2,
        "name": "Tình cảm",
        "content": "Coi cảm thấy tình cảm",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "name": "Bi kịch",
        "content": "Coi cảm thấy bi kịch",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 4,
        "name": "Tâm lý",
        "content": "Coi cảm thấy hack não",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 5,
        "name": "Chiến tranh",
        "content": "Coi cảm thấy chiến tranh",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[range](#schemarange)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## count

<a id="opIdcount"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /category/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "length": 5
  }
}
```

<h3 id="count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[count](#schemacount)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## insert

<a id="opIdinsert"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "name": "Hài hước",
    "content": "Coi cảm thấy buồn cười"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json; charset=utf-8',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json; charset=utf-8"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /category/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "name": "Hài hước",
    "content": "Coi cảm thấy buồn cười"
  }
}
```

<h3 id="insert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest](#schemainsertrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[insert](#schemainsert)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## update

<a id="opIdupdate"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json; charset=utf-8',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json; charset=utf-8"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /category/update`

*update*

> Body parameter

```json
{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest](#schemaupdaterequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[update](#schemaupdate)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## delete

<a id="opIddelete"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/category/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /category/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[delete](#schemadelete)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-celebrity">celebrity</h1>

## Getlist

<a id="opIdGetlist"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /celebrity/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "fullname": "Tome Holland",
        "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "fullname": "Jon Watts",
        "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="getlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[list3](#schemalist3)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange

<a id="opIdGetrange"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /celebrity/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "fullname": "Tome Holland",
        "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 2,
        "fullname": "Zendaya",
        "homepage": "https://en.wikipedia.org/wiki/Zendaya",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "fullname": "Jon Watts",
        "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="getrange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[range1](#schemarange1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount

<a id="opIdGetcount"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /celebrity/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "length": 3
  }
}
```

<h3 id="getcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[count](#schemacount)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert

<a id="opIdPostinsert"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "fullname": "Jon Watts",
    "homepage": "https://en.wikipedia.org/wiki/Jon_Watts"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /celebrity/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "fullname": "Jon Watts",
    "homepage": "https://en.wikipedia.org/wiki/Jon_Watts"
  }
}
```

<h3 id="postinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest1](#schemainsertrequest1)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[insert](#schemainsert)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate

<a id="opIdPostupdate"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /celebrity/update`

*update*

> Body parameter

```json
{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}
```

<h3 id="postupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest](#schemaupdaterequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[update](#schemaupdate)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletedelete

<a id="opIdDeletedelete"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/celebrity/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /celebrity/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="deletedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[delete](#schemadelete)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-food">food</h1>

## Getlist1

<a id="opIdGetlist1"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /food/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": []
  }
}
```

<h3 id="getlist1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[list6](#schemalist6)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange1

<a id="opIdGetrange1"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /food/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": []
  }
}
```

<h3 id="getrange1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[range2](#schemarange2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount1

<a id="opIdGetcount1"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /food/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "length": 0
  }
}
```

<h3 id="getcount1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[count](#schemacount)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert1

<a id="opIdPostinsert1"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "name": "Bắp rang bơ",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /food/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "name": "Bắp rang bơ",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}
```

<h3 id="postinsert1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest2](#schemainsertrequest2)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postinsert1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[insert](#schemainsert)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate1

<a id="opIdPostupdate1"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 1,
  "data": {
    "name": "Bắp rang bơ - 2",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /food/update`

*update*

> Body parameter

```json
{
  "key": 1,
  "data": {
    "name": "Bắp rang bơ - 2",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}
```

<h3 id="postupdate1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest2](#schemaupdaterequest2)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postupdate1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[update](#schemaupdate)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletedelete1

<a id="opIdDeletedelete1"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/food/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /food/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="deletedelete1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[delete](#schemadelete)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-login">login</h1>

## index

<a id="opIdindex"></a>

> Code samples

```javascript
const inputBody = '{
  "account": {
    "username": "admin",
    "password": "admin"
  },
  "deviceInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json; charset=utf-8
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json; charset=utf-8',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json; charset=utf-8"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /login`

*index*

Authorize by account data

> Body parameter

```json
{
  "account": {
    "username": "admin",
    "password": "admin"
  },
  "deviceInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
}
```

<h3 id="index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|
|body|body|[indexrequest](#schemaindexrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "token": "a192ffc0-a8e7-11ec-b292-6d9d204d6ddb"
  }
}
```

<h3 id="index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[OK1](#schemaok1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-movie">movie</h1>

## homepage

<a id="opIdhomepage"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage \
  -H 'Accept: application/json' \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/homepage", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie/homepage`

*homepage*

Get list movie include on-air and coming-soon

<h3 id="homepage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|

> Example responses

> 200 Response

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

<h3 id="homepage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[OK2](#schemaok2)|

<aside class="success">
This operation does not require authentication
</aside>

## overviews

<a id="opIdoverviews"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/overviews", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie/overviews`

*overviews*

Get list movie include on-air and coming-soon

<h3 id="overviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Accept|header|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "movieOverviews": [
      {
        "id": 1,
        "title": "Spider-Man: No Way Home",
        "duration": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20T00:00:00.000Z",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "restrictTypeId": 1,
        "subtitleTypeId": 1,
        "status": 2,
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z",
        "illustrates": [
          {
            "image_uri": {
              "id": 1,
              "uri": "/uploads/movie/avatar/test.jpg",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "banners": [
          {
            "image_uri": {
              "id": 2,
              "uri": "/uploads/movie/banner/test.jpg",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "casts": [
          {
            "celebrity": {
              "id": 1,
              "fullname": "Tome Holland",
              "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          },
          {
            "celebrity": {
              "id": 2,
              "fullname": "Zendaya",
              "homepage": "https://en.wikipedia.org/wiki/Zendaya",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "directors": [
          {
            "celebrity": {
              "id": 3,
              "fullname": "Jon Watts",
              "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "studios": [
          {
            "studio": {
              "id": 1,
              "name": "Marvel",
              "homepage": "https://www.marvel.com",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "categories": []
      },
      {
        "id": 3,
        "title": "Spider-Man: No Way Home",
        "duration": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20T00:00:00.000Z",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "restrictTypeId": 1,
        "subtitleTypeId": 1,
        "status": 2,
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z",
        "illustrates": [],
        "banners": [],
        "casts": [],
        "directors": [],
        "studios": [],
        "categories": []
      }
    ]
  }
}
```

<h3 id="overviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[overviews](#schemaoverviews)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getlist2

<a id="opIdGetlist2"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie/list`

*list*

> Example responses

> default Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 3,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      }
    ]
  }
}
```

<h3 id="getlist2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[normal](#schemanormal)|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange2

<a id="opIdGetrange2"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie/range`

*range*

> Example responses

> default Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 2,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 3,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 4,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 5,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 6,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 7,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 8,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 9,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      }
    ]
  }
}
```

<h3 id="getrange2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[normal](#schemanormal)|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount2

<a id="opIdGetcount2"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "length": 9
  }
}
```

<h3 id="getcount2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[normal2](#schemanormal2)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert2

<a id="opIdPostinsert2"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "title": "Spider-Man: No Way Home",
    "duration": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20T00:00:00.000Z",
    "description": "Phim này hay lắm. Studio thích lừa lắm",
    "restrictTypeId": 1,
    "subtitleTypeId": 1,
    "illustrates": [
      1,
      2
    ],
    "banners": [
      1,
      2
    ],
    "categories": [
      1,
      3,
      4
    ],
    "studios": [
      1
    ],
    "directors": [
      3
    ],
    "casts": [
      1,
      2
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json; charset=utf-8',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json; charset=utf-8"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /movie/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "title": "Spider-Man: No Way Home",
    "duration": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20T00:00:00.000Z",
    "description": "Phim này hay lắm. Studio thích lừa lắm",
    "restrictTypeId": 1,
    "subtitleTypeId": 1,
    "illustrates": [
      1,
      2
    ],
    "banners": [
      1,
      2
    ],
    "categories": [
      1,
      3,
      4
    ],
    "studios": [
      1
    ],
    "directors": [
      3
    ],
    "casts": [
      1,
      2
    ]
  }
}
```

<h3 id="postinsert2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest3](#schemainsertrequest3)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="postinsert2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[insert](#schemainsert)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate2

<a id="opIdPostupdate2"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 10,
  "data": {
    "title": "Spider-Man: No Way Home - Updated"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /movie/update`

*update*

> Body parameter

```json
{
  "key": 10,
  "data": {
    "title": "Spider-Man: No Way Home - Updated"
  }
}
```

<h3 id="postupdate2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest3](#schemaupdaterequest3)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="postupdate2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[update](#schemaupdate)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Deletedelete2

<a id="opIdDeletedelete2"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /movie/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="deletedelete2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[delete](#schemadelete)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-movieshow">movieShow</h1>

## Getlist3

<a id="opIdGetlist3"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movieShow/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieID": 1,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 06:00:00",
        "dateTimeEnd": "2022-03-01 14:08:00"
      },
      {
        "id": 3,
        "movieID": 3,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 10:00:00",
        "dateTimeEnd": "2022-03-01 12:00:00"
      }
    ]
  }
}
```

<h3 id="getlist3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[list9](#schemalist9)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange3

<a id="opIdGetrange3"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movieShow/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieID": 1,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 06:00:00",
        "dateTimeEnd": "2022-03-01 14:08:00"
      },
      {
        "id": 2,
        "movieID": 2,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 08:00:00",
        "dateTimeEnd": "2022-03-01 14:10:00"
      }
    ]
  }
}
```

<h3 id="getrange3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[range3](#schemarange3)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount3

<a id="opIdGetcount3"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movieShow/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "length": 112
  }
}
```

<h3 id="getcount3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[count](#schemacount)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## findByMovieID

<a id="opIdfindByMovieID"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/findByMovieID", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movieShow/findByMovieID`

*findByMovieID*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T03:00:00.000Z",
        "dateTimeEnd": "2022-04-30T05:00:00.000Z",
        "createdAt": "2022-03-23T09:36:20.000Z",
        "updatedAt": "2022-03-23T09:36:20.000Z"
      },
      {
        "id": 2,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:09:17.000Z",
        "updatedAt": "2022-03-23T10:09:17.000Z"
      },
      {
        "id": 3,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:15:27.000Z",
        "updatedAt": "2022-03-23T10:15:27.000Z"
      },
      {
        "id": 4,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:24:02.000Z",
        "updatedAt": "2022-03-23T10:24:02.000Z"
      },
      {
        "id": 5,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:24:39.000Z",
        "updatedAt": "2022-03-23T10:24:39.000Z"
      },
      {
        "id": 6,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T12:00:00.000Z",
        "dateTimeEnd": "2022-04-30T14:00:00.000Z",
        "createdAt": "2022-03-23T10:27:17.000Z",
        "updatedAt": "2022-03-23T10:27:17.000Z"
      }
    ]
  }
}
```

<h3 id="findbymovieid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[findByMovieID](#schemafindbymovieid)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert3

<a id="opIdPostinsert3"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 1,
    "dateTimeStart": "2022-04-30T12:00:00Z",
    "dateTimeEnd": "2022-04-30T14:00:00Z"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /movieShow/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 1,
    "dateTimeStart": "2022-04-30T12:00:00Z",
    "dateTimeEnd": "2022-04-30T14:00:00Z"
  }
}
```

<h3 id="postinsert3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest4](#schemainsertrequest4)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postinsert3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[insert](#schemainsert)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate3

<a id="opIdPostupdate3"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 1,
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 2,
    "dateTimeStart": "2022-04-30 10:00:00",
    "dateTimeEnd": "2022-04-30 12:00:00"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /movieShow/update`

*update*

> Body parameter

```json
{
  "key": 1,
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 2,
    "dateTimeStart": "2022-04-30 10:00:00",
    "dateTimeEnd": "2022-04-30 12:00:00"
  }
}
```

<h3 id="postupdate3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest4](#schemaupdaterequest4)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="postupdate3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[update](#schemaupdate)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletedelete3

<a id="opIdDeletedelete3"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movieShow/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /movieShow/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

```json
{
  "result": true
}
```

<h3 id="deletedelete3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[delete](#schemadelete)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-restrict_type">restrict_type</h1>

## Getlist4

<a id="opIdGetlist4"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /restrictType/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "C13",
        "content": "Khán giả trên 13 tuổi",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="getlist4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[list](#schemalist)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange4

<a id="opIdGetrange4"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /restrictType/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "C13",
        "content": "Khán giả trên 13 tuổi",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}
```

<h3 id="getrange4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[range](#schemarange)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount4

<a id="opIdGetcount4"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json; charset=utf-8'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count \
  -H 'Accept: application/json; charset=utf-8'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json; charset=utf-8

```

```python
import requests
headers = {
  'Accept': 'application/json; charset=utf-8'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json; charset=utf-8'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json; charset=utf-8"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /restrictType/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": true,
  "data": {
    "length": 1
  }
}
```

<h3 id="getcount4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[count](#schemacount)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Powered-By|undefined||none|
|200|Content-Length|undefined||none|
|200|ETag|undefined||none|
|200|Date|undefined||none|
|200|Connection|undefined||none|
|200|Keep-Alive|undefined||none|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert4

<a id="opIdPostinsert4"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "name": "Hài hước",
    "content": "Coi cảm thấy buồn cười"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert \
  -H 'Content-Type: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrictType/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /restrictType/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "name": "Hài hước",
    "content": "Coi cảm thấy buồn cười"
  }
}
```

<h3 id="postinsert4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest](#schemainsertrequest)|true|none|

<h3 id="postinsert4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate4

<a id="opIdPostupdate4"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 2,
  "data": {
    "name": "C13",
    "content": "Khán giả trên 13 tuổi",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update \
  -H 'Content-Type: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /restrict_type/update`

*update*

> Body parameter

```json
{
  "key": 2,
  "data": {
    "name": "C13",
    "content": "Khán giả trên 13 tuổi",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}
```

<h3 id="postupdate4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest5](#schemaupdaterequest5)|true|none|

<h3 id="postupdate4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletedelete4

<a id="opIdDeletedelete4"></a>

> Code samples

```javascript

const headers = {
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000

```

```python
import requests
headers = {
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/restrict_type/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /restrict_type/delete`

*delete*

<h3 id="deletedelete4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="webphim-api-signup">signup</h1>

## _signup

<a id="opId/signup"></a>

> Code samples

```javascript
const inputBody = '{
  "account": {
    "username": "est incididunt deserunt",
    "password": "adipisicing aute velit quis in"
  },
  "userInfo": {
    "fullname": "ex",
    "email": "sint incidi",
    "gender": 91011132.12474537,
    "address": "cillum exercitation sed anim"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Accept: application/json'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /signup`

*/signup*

Send a comfirm email to user

> Body parameter

```json
{
  "account": {
    "username": "est incididunt deserunt",
    "password": "adipisicing aute velit quis in"
  },
  "userInfo": {
    "fullname": "ex",
    "email": "sint incidi",
    "gender": 91011132.12474537,
    "address": "cillum exercitation sed anim"
  }
}
```

<h3 id="_signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|
|body|body|[signuprequest](#schemasignuprequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="_signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[OK](#schemaok)|

<aside class="success">
This operation does not require authentication
</aside>

## _signup_confirm

<a id="opId/signup/confirm"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm?token=ullamco%20Ut%20sunt%20con',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm?token=ullamco%20Ut%20sunt%20con \
  -H 'Accept: application/json' \
  -H 'Accept: application/json'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm?token=ullamco%20Ut%20sunt%20con HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm', params={
  'token': 'ullamco Ut sunt con'
}, headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm',
  params: {
  'token' => 'string'
}, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm?token=ullamco%20Ut%20sunt%20con");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/signup/confirm", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /signup/confirm`

*/signup/confirm*

Confirm registeration data

<h3 id="_signup_confirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|Accept|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

<h3 id="_signup_confirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[OK](#schemaok)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api-subtitle_type">subtitle_type</h1>

## Getlist5

<a id="opIdGetlist5"></a>

> Code samples

```javascript

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000

```

```python
import requests

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list',
  params: {
  }

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie_show/list`

*list*

<h3 id="getlist5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange5

<a id="opIdGetrange5"></a>

> Code samples

```javascript

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000

```

```python
import requests

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range',
  params: {
  }

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie_show/range`

*range*

<h3 id="getrange5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount5

<a id="opIdGetcount5"></a>

> Code samples

```javascript

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000

```

```python
import requests

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count',
  params: {
  }

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/movie_show/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /movie_show/count`

*count*

<h3 id="getcount5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webphim-api--test-only-defaultcrud"><test-only>defaultCRUD</h1>

## Getlist6

<a id="opIdGetlist6"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /route/list`

*list*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="getlist6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Getrange6

<a id="opIdGetrange6"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/range", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /route/range`

*range*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="getrange6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Getcount6

<a id="opIdGetcount6"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count',
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

```shell
# You can also use wget
curl -X GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count \
  -H 'Accept: application/json'

```

```http
GET http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/count", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /route/count`

*count*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="getcount6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Postinsert6

<a id="opIdPostinsert6"></a>

> Code samples

```javascript
const inputBody = '{
  "data": {
    "title": "Spider-Man: No Way Home",
    "restrictTypeID": 1,
    "subtittleTypeID": 1,
    "durations": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20",
    "description": "Phim này hay lắm. Studio thích lừa lắm"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/insert", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /route/insert`

*insert*

> Body parameter

```json
{
  "data": {
    "title": "Spider-Man: No Way Home",
    "restrictTypeID": 1,
    "subtittleTypeID": 1,
    "durations": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20",
    "description": "Phim này hay lắm. Studio thích lừa lắm"
  }
}
```

<h3 id="postinsert6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[insertrequest6](#schemainsertrequest6)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="postinsert6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Postupdate6

<a id="opIdPostupdate6"></a>

> Code samples

```javascript
const inputBody = '{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update',
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

```shell
# You can also use wget
curl -X POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
POST http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Content-Type: application/json
Accept: application/json

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.post('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.post 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/update", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /route/update`

*update*

> Body parameter

```json
{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}
```

<h3 id="postupdate6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[updaterequest](#schemaupdaterequest)|true|none|

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="postupdate6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Deletedelete6

<a id="opIdDeletedelete6"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'token':'API_KEY'
};

fetch('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete \
  -H 'Accept: application/json' \
  -H 'token: API_KEY'

```

```http
DELETE http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete HTTP/1.1
Host: thunderv-2.southeastasia.cloudapp.azure.com:5000
Accept: application/json

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'token': 'API_KEY'
}

r = requests.delete('http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'token' => 'API_KEY'
}

result = RestClient.delete 'http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```java
URL obj = new URL("http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://thunderv-2.southeastasia.cloudapp.azure.com:5000/route/delete", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /route/delete`

*delete*

> Example responses

> 200 Response

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}
```

<h3 id="deletedelete6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_authdestroysessionrequest">authdestroysessionrequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthdestroysessionrequest"></a>
<a id="schema_authdestroysessionrequest"></a>
<a id="tocSauthdestroysessionrequest"></a>
<a id="tocsauthdestroysessionrequest"></a>

```json
{
  "token": "fugiat cillum esse dolore"
}

```

authdestroysessionrequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_OK">OK</h2>
<!-- backwards compatibility -->
<a id="schemaok"></a>
<a id="schema_OK"></a>
<a id="tocSok"></a>
<a id="tocsok"></a>

```json
{
  "result": true
}

```

OK

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|

<h2 id="tocS_list">list</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_list"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "Hài hước",
        "content": "Coi cảm thấy buồn cười",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "name": "Bi kịch",
        "content": "Coi cảm thấy bi kịch",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}

```

list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data](#schemadata)|true|none|none|

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
{
  "list": [
    {
      "id": 1,
      "name": "Hài hước",
      "content": "Coi cảm thấy buồn cười",
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z"
    },
    {
      "id": 3,
      "name": "Bi kịch",
      "content": "Coi cảm thấy bi kịch",
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z"
    }
  ]
}

```

Data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[List1](#schemalist1)]|true|none|none|

<h2 id="tocS_List1">List1</h2>
<!-- backwards compatibility -->
<a id="schemalist1"></a>
<a id="schema_List1"></a>
<a id="tocSlist1"></a>
<a id="tocslist1"></a>

```json
{
  "id": 1,
  "name": "Hài hước",
  "content": "Coi cảm thấy buồn cười",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

List1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|name|string|true|none|none|
|content|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_range">range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "Hài hước",
        "content": "Coi cảm thấy buồn cười",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 2,
        "name": "Tình cảm",
        "content": "Coi cảm thấy tình cảm",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "name": "Bi kịch",
        "content": "Coi cảm thấy bi kịch",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 4,
        "name": "Tâm lý",
        "content": "Coi cảm thấy hack não",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 5,
        "name": "Chiến tranh",
        "content": "Coi cảm thấy chiến tranh",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}

```

range

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data](#schemadata)|true|none|none|

<h2 id="tocS_count">count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
{
  "result": true,
  "data": {
    "length": 5
  }
}

```

count

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data2](#schemadata2)|true|none|none|

<h2 id="tocS_Data2">Data2</h2>
<!-- backwards compatibility -->
<a id="schemadata2"></a>
<a id="schema_Data2"></a>
<a id="tocSdata2"></a>
<a id="tocsdata2"></a>

```json
{
  "length": 5
}

```

Data2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|integer(int32)|true|none|none|

<h2 id="tocS_insertrequest">insertrequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest"></a>
<a id="schema_insertrequest"></a>
<a id="tocSinsertrequest"></a>
<a id="tocsinsertrequest"></a>

```json
{
  "data": {
    "name": "Hài hước",
    "content": "Coi cảm thấy buồn cười"
  }
}

```

insertrequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data3](#schemadata3)|true|none|none|

<h2 id="tocS_Data3">Data3</h2>
<!-- backwards compatibility -->
<a id="schemadata3"></a>
<a id="schema_Data3"></a>
<a id="tocSdata3"></a>
<a id="tocsdata3"></a>

```json
{
  "name": "Hài hước",
  "content": "Coi cảm thấy buồn cười"
}

```

Data3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_insert">insert</h2>
<!-- backwards compatibility -->
<a id="schemainsert"></a>
<a id="schema_insert"></a>
<a id="tocSinsert"></a>
<a id="tocsinsert"></a>

```json
{
  "result": true
}

```

insert

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|

<h2 id="tocS_updaterequest">updaterequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest"></a>
<a id="schema_updaterequest"></a>
<a id="tocSupdaterequest"></a>
<a id="tocsupdaterequest"></a>

```json
{
  "key": 6,
  "data": {
    "name": "Name Updated",
    "content": "Content Updated"
  }
}

```

updaterequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|true|none|none|
|data|[Data3](#schemadata3)|true|none|none|

<h2 id="tocS_update">update</h2>
<!-- backwards compatibility -->
<a id="schemaupdate"></a>
<a id="schema_update"></a>
<a id="tocSupdate"></a>
<a id="tocsupdate"></a>

```json
{
  "result": true
}

```

update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|

<h2 id="tocS_deleterequest">deleterequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterequest"></a>
<a id="schema_deleterequest"></a>
<a id="tocSdeleterequest"></a>
<a id="tocsdeleterequest"></a>

```json
{
  "keys": [
    6
  ]
}

```

deleterequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[integer]|true|none|none|

<h2 id="tocS_delete">delete</h2>
<!-- backwards compatibility -->
<a id="schemadelete"></a>
<a id="schema_delete"></a>
<a id="tocSdelete"></a>
<a id="tocsdelete"></a>

```json
{
  "result": true
}

```

delete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "result": false,
  "errorCode": 1,
  "errorMessage": "Error message"
}

```

error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|errorCode|integer(int32)|true|none|none|
|errorMessage|string|true|none|none|

<h2 id="tocS_list3">list3</h2>
<!-- backwards compatibility -->
<a id="schemalist3"></a>
<a id="schema_list3"></a>
<a id="tocSlist3"></a>
<a id="tocslist3"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "fullname": "Tome Holland",
        "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "fullname": "Jon Watts",
        "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}

```

list3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data5](#schemadata5)|true|none|none|

<h2 id="tocS_Data5">Data5</h2>
<!-- backwards compatibility -->
<a id="schemadata5"></a>
<a id="schema_Data5"></a>
<a id="tocSdata5"></a>
<a id="tocsdata5"></a>

```json
{
  "list": [
    {
      "id": 1,
      "fullname": "Tome Holland",
      "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z"
    },
    {
      "id": 3,
      "fullname": "Jon Watts",
      "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z"
    }
  ]
}

```

Data5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[List4](#schemalist4)]|true|none|none|

<h2 id="tocS_List4">List4</h2>
<!-- backwards compatibility -->
<a id="schemalist4"></a>
<a id="schema_List4"></a>
<a id="tocSlist4"></a>
<a id="tocslist4"></a>

```json
{
  "id": 1,
  "fullname": "Tome Holland",
  "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

List4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|fullname|string|true|none|none|
|homepage|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_range1">range1</h2>
<!-- backwards compatibility -->
<a id="schemarange1"></a>
<a id="schema_range1"></a>
<a id="tocSrange1"></a>
<a id="tocsrange1"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "fullname": "Tome Holland",
        "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 2,
        "fullname": "Zendaya",
        "homepage": "https://en.wikipedia.org/wiki/Zendaya",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      },
      {
        "id": 3,
        "fullname": "Jon Watts",
        "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    ]
  }
}

```

range1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data5](#schemadata5)|true|none|none|

<h2 id="tocS_insertrequest1">insertrequest1</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest1"></a>
<a id="schema_insertrequest1"></a>
<a id="tocSinsertrequest1"></a>
<a id="tocsinsertrequest1"></a>

```json
{
  "data": {
    "fullname": "Jon Watts",
    "homepage": "https://en.wikipedia.org/wiki/Jon_Watts"
  }
}

```

insertrequest1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data8](#schemadata8)|true|none|none|

<h2 id="tocS_Data8">Data8</h2>
<!-- backwards compatibility -->
<a id="schemadata8"></a>
<a id="schema_Data8"></a>
<a id="tocSdata8"></a>
<a id="tocsdata8"></a>

```json
{
  "fullname": "Jon Watts",
  "homepage": "https://en.wikipedia.org/wiki/Jon_Watts"
}

```

Data8

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullname|string|true|none|none|
|homepage|string|true|none|none|

<h2 id="tocS_list6">list6</h2>
<!-- backwards compatibility -->
<a id="schemalist6"></a>
<a id="schema_list6"></a>
<a id="tocSlist6"></a>
<a id="tocslist6"></a>

```json
{
  "result": true,
  "data": {
    "list": []
  }
}

```

list6

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data10](#schemadata10)|true|none|none|

<h2 id="tocS_Data10">Data10</h2>
<!-- backwards compatibility -->
<a id="schemadata10"></a>
<a id="schema_Data10"></a>
<a id="tocSdata10"></a>
<a id="tocsdata10"></a>

```json
{
  "list": []
}

```

Data10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[string]|true|none|none|

<h2 id="tocS_range2">range2</h2>
<!-- backwards compatibility -->
<a id="schemarange2"></a>
<a id="schema_range2"></a>
<a id="tocSrange2"></a>
<a id="tocsrange2"></a>

```json
{
  "result": true,
  "data": {
    "list": []
  }
}

```

range2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data10](#schemadata10)|true|none|none|

<h2 id="tocS_insertrequest2">insertrequest2</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest2"></a>
<a id="schema_insertrequest2"></a>
<a id="tocSinsertrequest2"></a>
<a id="tocsinsertrequest2"></a>

```json
{
  "data": {
    "name": "Bắp rang bơ",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}

```

insertrequest2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data13](#schemadata13)|true|none|none|

<h2 id="tocS_Data13">Data13</h2>
<!-- backwards compatibility -->
<a id="schemadata13"></a>
<a id="schema_Data13"></a>
<a id="tocSdata13"></a>
<a id="tocsdata13"></a>

```json
{
  "name": "Bắp rang bơ",
  "price": 20000,
  "description": "Bao gồm 1 bắp rang",
  "avatarImageId": 1
}

```

Data13

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|price|integer(int32)|true|none|none|
|description|string|true|none|none|
|avatarImageId|integer(int32)|true|none|none|

<h2 id="tocS_updaterequest2">updaterequest2</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest2"></a>
<a id="schema_updaterequest2"></a>
<a id="tocSupdaterequest2"></a>
<a id="tocsupdaterequest2"></a>

```json
{
  "key": 1,
  "data": {
    "name": "Bắp rang bơ - 2",
    "price": 20000,
    "description": "Bao gồm 1 bắp rang",
    "avatarImageId": 1
  }
}

```

updaterequest2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|true|none|none|
|data|[Data13](#schemadata13)|true|none|none|

<h2 id="tocS_indexrequest">indexrequest</h2>
<!-- backwards compatibility -->
<a id="schemaindexrequest"></a>
<a id="schema_indexrequest"></a>
<a id="tocSindexrequest"></a>
<a id="tocsindexrequest"></a>

```json
{
  "account": {
    "username": "admin",
    "password": "admin"
  },
  "deviceInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
}

```

indexrequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|true|none|none|
|deviceInfo|string|true|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "username": "admin",
  "password": "admin"
}

```

Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_OK1">OK1</h2>
<!-- backwards compatibility -->
<a id="schemaok1"></a>
<a id="schema_OK1"></a>
<a id="tocSok1"></a>
<a id="tocsok1"></a>

```json
{
  "result": true,
  "data": {
    "token": "a192ffc0-a8e7-11ec-b292-6d9d204d6ddb"
  }
}

```

OK1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data15](#schemadata15)|true|none|none|

<h2 id="tocS_Data15">Data15</h2>
<!-- backwards compatibility -->
<a id="schemadata15"></a>
<a id="schema_Data15"></a>
<a id="tocSdata15"></a>
<a id="tocsdata15"></a>

```json
{
  "token": "a192ffc0-a8e7-11ec-b292-6d9d204d6ddb"
}

```

Data15

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_OK2">OK2</h2>
<!-- backwards compatibility -->
<a id="schemaok2"></a>
<a id="schema_OK2"></a>
<a id="tocSok2"></a>
<a id="tocsok2"></a>

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

OK2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data16](#schemadata16)|true|none|none|

<h2 id="tocS_Data16">Data16</h2>
<!-- backwards compatibility -->
<a id="schemadata16"></a>
<a id="schema_Data16"></a>
<a id="tocSdata16"></a>
<a id="tocsdata16"></a>

```json
{
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

```

Data16

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movies|[Movies](#schemamovies)|true|none|none|

<h2 id="tocS_Movies">Movies</h2>
<!-- backwards compatibility -->
<a id="schemamovies"></a>
<a id="schema_Movies"></a>
<a id="tocSmovies"></a>
<a id="tocsmovies"></a>

```json
{
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

```

Movies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onAir|[integer]|true|none|none|
|coming|[integer]|true|none|none|

<h2 id="tocS_overviews">overviews</h2>
<!-- backwards compatibility -->
<a id="schemaoverviews"></a>
<a id="schema_overviews"></a>
<a id="tocSoverviews"></a>
<a id="tocsoverviews"></a>

```json
{
  "result": true,
  "data": {
    "movieOverviews": [
      {
        "id": 1,
        "title": "Spider-Man: No Way Home",
        "duration": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20T00:00:00.000Z",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "restrictTypeId": 1,
        "subtitleTypeId": 1,
        "status": 2,
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z",
        "illustrates": [
          {
            "image_uri": {
              "id": 1,
              "uri": "/uploads/movie/avatar/test.jpg",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "banners": [
          {
            "image_uri": {
              "id": 2,
              "uri": "/uploads/movie/banner/test.jpg",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "casts": [
          {
            "celebrity": {
              "id": 1,
              "fullname": "Tome Holland",
              "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          },
          {
            "celebrity": {
              "id": 2,
              "fullname": "Zendaya",
              "homepage": "https://en.wikipedia.org/wiki/Zendaya",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "directors": [
          {
            "celebrity": {
              "id": 3,
              "fullname": "Jon Watts",
              "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "studios": [
          {
            "studio": {
              "id": 1,
              "name": "Marvel",
              "homepage": "https://www.marvel.com",
              "createdAt": "2022-03-16T13:04:32.000Z",
              "updatedAt": "2022-03-16T13:04:32.000Z"
            }
          }
        ],
        "categories": []
      },
      {
        "id": 3,
        "title": "Spider-Man: No Way Home",
        "duration": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20T00:00:00.000Z",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "restrictTypeId": 1,
        "subtitleTypeId": 1,
        "status": 2,
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z",
        "illustrates": [],
        "banners": [],
        "casts": [],
        "directors": [],
        "studios": [],
        "categories": []
      }
    ]
  }
}

```

overviews

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data17](#schemadata17)|true|none|none|

<h2 id="tocS_Data17">Data17</h2>
<!-- backwards compatibility -->
<a id="schemadata17"></a>
<a id="schema_Data17"></a>
<a id="tocSdata17"></a>
<a id="tocsdata17"></a>

```json
{
  "movieOverviews": [
    {
      "id": 1,
      "title": "Spider-Man: No Way Home",
      "duration": 120,
      "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
      "releaseDate": "2021-10-20T00:00:00.000Z",
      "description": "Phim này hay lắm. Studio thích lừa lắm",
      "restrictTypeId": 1,
      "subtitleTypeId": 1,
      "status": 2,
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z",
      "illustrates": [
        {
          "image_uri": {
            "id": 1,
            "uri": "/uploads/movie/avatar/test.jpg",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        }
      ],
      "banners": [
        {
          "image_uri": {
            "id": 2,
            "uri": "/uploads/movie/banner/test.jpg",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        }
      ],
      "casts": [
        {
          "celebrity": {
            "id": 1,
            "fullname": "Tome Holland",
            "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        },
        {
          "celebrity": {
            "id": 2,
            "fullname": "Zendaya",
            "homepage": "https://en.wikipedia.org/wiki/Zendaya",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        }
      ],
      "directors": [
        {
          "celebrity": {
            "id": 3,
            "fullname": "Jon Watts",
            "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        }
      ],
      "studios": [
        {
          "studio": {
            "id": 1,
            "name": "Marvel",
            "homepage": "https://www.marvel.com",
            "createdAt": "2022-03-16T13:04:32.000Z",
            "updatedAt": "2022-03-16T13:04:32.000Z"
          }
        }
      ],
      "categories": []
    },
    {
      "id": 3,
      "title": "Spider-Man: No Way Home",
      "duration": 120,
      "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
      "releaseDate": "2021-10-20T00:00:00.000Z",
      "description": "Phim này hay lắm. Studio thích lừa lắm",
      "restrictTypeId": 1,
      "subtitleTypeId": 1,
      "status": 2,
      "createdAt": "2022-03-16T13:04:32.000Z",
      "updatedAt": "2022-03-16T13:04:32.000Z",
      "illustrates": [],
      "banners": [],
      "casts": [],
      "directors": [],
      "studios": [],
      "categories": []
    }
  ]
}

```

Data17

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieOverviews|[[MovieOverview](#schemamovieoverview)]|true|none|none|

<h2 id="tocS_MovieOverview">MovieOverview</h2>
<!-- backwards compatibility -->
<a id="schemamovieoverview"></a>
<a id="schema_MovieOverview"></a>
<a id="tocSmovieoverview"></a>
<a id="tocsmovieoverview"></a>

```json
{
  "id": 1,
  "title": "Spider-Man: No Way Home",
  "duration": 120,
  "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
  "releaseDate": "2021-10-20T00:00:00.000Z",
  "description": "Phim này hay lắm. Studio thích lừa lắm",
  "restrictTypeId": 1,
  "subtitleTypeId": 1,
  "status": 2,
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z",
  "illustrates": [
    {
      "image_uri": {
        "id": 1,
        "uri": "/uploads/movie/avatar/test.jpg",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    }
  ],
  "banners": [
    {
      "image_uri": {
        "id": 2,
        "uri": "/uploads/movie/banner/test.jpg",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    }
  ],
  "casts": [
    {
      "celebrity": {
        "id": 1,
        "fullname": "Tome Holland",
        "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    },
    {
      "celebrity": {
        "id": 2,
        "fullname": "Zendaya",
        "homepage": "https://en.wikipedia.org/wiki/Zendaya",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    }
  ],
  "directors": [
    {
      "celebrity": {
        "id": 3,
        "fullname": "Jon Watts",
        "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    }
  ],
  "studios": [
    {
      "studio": {
        "id": 1,
        "name": "Marvel",
        "homepage": "https://www.marvel.com",
        "createdAt": "2022-03-16T13:04:32.000Z",
        "updatedAt": "2022-03-16T13:04:32.000Z"
      }
    }
  ],
  "categories": []
}

```

MovieOverview

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|title|string|true|none|none|
|duration|integer(int32)|true|none|none|
|trailerURI|string|true|none|none|
|releaseDate|string|true|none|none|
|description|string|true|none|none|
|restrictTypeId|integer(int32)|true|none|none|
|subtitleTypeId|integer(int32)|true|none|none|
|status|integer(int32)|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|illustrates|[oneOf]|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Illustrate](#schemaillustrate)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[oneOf]|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Banner](#schemabanner)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|casts|[oneOf]|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Cast](#schemacast)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directors|[oneOf]|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Director](#schemadirector)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studios|[oneOf]|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Studio](#schemastudio)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|true|none|none|

<h2 id="tocS_Illustrate">Illustrate</h2>
<!-- backwards compatibility -->
<a id="schemaillustrate"></a>
<a id="schema_Illustrate"></a>
<a id="tocSillustrate"></a>
<a id="tocsillustrate"></a>

```json
{
  "image_uri": {
    "id": 1,
    "uri": "/uploads/movie/avatar/test.jpg",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

Illustrate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_uri|[ImageUri](#schemaimageuri)|false|none|none|

<h2 id="tocS_ImageUri">ImageUri</h2>
<!-- backwards compatibility -->
<a id="schemaimageuri"></a>
<a id="schema_ImageUri"></a>
<a id="tocSimageuri"></a>
<a id="tocsimageuri"></a>

```json
{
  "id": 1,
  "uri": "/uploads/movie/avatar/test.jpg",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

ImageUri

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|uri|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_Banner">Banner</h2>
<!-- backwards compatibility -->
<a id="schemabanner"></a>
<a id="schema_Banner"></a>
<a id="tocSbanner"></a>
<a id="tocsbanner"></a>

```json
{
  "image_uri": {
    "id": 2,
    "uri": "/uploads/movie/banner/test.jpg",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

Banner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_uri|[ImageUri](#schemaimageuri)|false|none|none|

<h2 id="tocS_Cast">Cast</h2>
<!-- backwards compatibility -->
<a id="schemacast"></a>
<a id="schema_Cast"></a>
<a id="tocScast"></a>
<a id="tocscast"></a>

```json
{
  "celebrity": {
    "id": 1,
    "fullname": "Tome Holland",
    "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

Cast

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrity|[Celebrity](#schemacelebrity)|false|none|none|

<h2 id="tocS_Celebrity">Celebrity</h2>
<!-- backwards compatibility -->
<a id="schemacelebrity"></a>
<a id="schema_Celebrity"></a>
<a id="tocScelebrity"></a>
<a id="tocscelebrity"></a>

```json
{
  "id": 1,
  "fullname": "Tome Holland",
  "homepage": "https://en.wikipedia.org/wiki/Tom_Holland",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

Celebrity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|fullname|string|true|none|none|
|homepage|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_Director">Director</h2>
<!-- backwards compatibility -->
<a id="schemadirector"></a>
<a id="schema_Director"></a>
<a id="tocSdirector"></a>
<a id="tocsdirector"></a>

```json
{
  "celebrity": {
    "id": 3,
    "fullname": "Jon Watts",
    "homepage": "https://en.wikipedia.org/wiki/Jon_Watts",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

Director

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrity|[Celebrity](#schemacelebrity)|false|none|none|

<h2 id="tocS_Studio">Studio</h2>
<!-- backwards compatibility -->
<a id="schemastudio"></a>
<a id="schema_Studio"></a>
<a id="tocSstudio"></a>
<a id="tocsstudio"></a>

```json
{
  "studio": {
    "id": 1,
    "name": "Marvel",
    "homepage": "https://www.marvel.com",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

Studio

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|[Studio1](#schemastudio1)|false|none|none|

<h2 id="tocS_Studio1">Studio1</h2>
<!-- backwards compatibility -->
<a id="schemastudio1"></a>
<a id="schema_Studio1"></a>
<a id="tocSstudio1"></a>
<a id="tocsstudio1"></a>

```json
{
  "id": 1,
  "name": "Marvel",
  "homepage": "https://www.marvel.com",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

Studio1

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|name|string|true|none|none|
|homepage|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_normal">normal</h2>
<!-- backwards compatibility -->
<a id="schemanormal"></a>
<a id="schema_normal"></a>
<a id="tocSnormal"></a>
<a id="tocsnormal"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      },
      {
        "id": 3,
        "title": "Spider-Man: No Way Home",
        "restrictTypeID": 1,
        "subtittleTypeID": 1,
        "durations": 120,
        "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
        "releaseDate": "2021-10-20",
        "description": "Phim này hay lắm. Studio thích lừa lắm",
        "status": 2
      }
    ]
  }
}

```

normal

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data18](#schemadata18)|true|none|none|

<h2 id="tocS_Data18">Data18</h2>
<!-- backwards compatibility -->
<a id="schemadata18"></a>
<a id="schema_Data18"></a>
<a id="tocSdata18"></a>
<a id="tocsdata18"></a>

```json
{
  "list": [
    {
      "id": 1,
      "title": "Spider-Man: No Way Home",
      "restrictTypeID": 1,
      "subtittleTypeID": 1,
      "durations": 120,
      "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
      "releaseDate": "2021-10-20",
      "description": "Phim này hay lắm. Studio thích lừa lắm",
      "status": 2
    },
    {
      "id": 3,
      "title": "Spider-Man: No Way Home",
      "restrictTypeID": 1,
      "subtittleTypeID": 1,
      "durations": 120,
      "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
      "releaseDate": "2021-10-20",
      "description": "Phim này hay lắm. Studio thích lừa lắm",
      "status": 2
    }
  ]
}

```

Data18

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[List7](#schemalist7)]|true|none|none|

<h2 id="tocS_List7">List7</h2>
<!-- backwards compatibility -->
<a id="schemalist7"></a>
<a id="schema_List7"></a>
<a id="tocSlist7"></a>
<a id="tocslist7"></a>

```json
{
  "id": 1,
  "title": "Spider-Man: No Way Home",
  "restrictTypeID": 1,
  "subtittleTypeID": 1,
  "durations": 120,
  "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
  "releaseDate": "2021-10-20",
  "description": "Phim này hay lắm. Studio thích lừa lắm",
  "status": 2
}

```

List7

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|title|string|true|none|none|
|restrictTypeID|integer(int32)|true|none|none|
|subtittleTypeID|integer(int32)|true|none|none|
|durations|integer(int32)|true|none|none|
|trailerURI|string|true|none|none|
|releaseDate|string|true|none|none|
|description|string|true|none|none|
|status|integer(int32)|true|none|none|

<h2 id="tocS_normal2">normal2</h2>
<!-- backwards compatibility -->
<a id="schemanormal2"></a>
<a id="schema_normal2"></a>
<a id="tocSnormal2"></a>
<a id="tocsnormal2"></a>

```json
{
  "result": true,
  "data": {
    "length": 9
  }
}

```

normal2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data2](#schemadata2)|true|none|none|

<h2 id="tocS_insertrequest3">insertrequest3</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest3"></a>
<a id="schema_insertrequest3"></a>
<a id="tocSinsertrequest3"></a>
<a id="tocsinsertrequest3"></a>

```json
{
  "data": {
    "title": "Spider-Man: No Way Home",
    "duration": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20T00:00:00.000Z",
    "description": "Phim này hay lắm. Studio thích lừa lắm",
    "restrictTypeId": 1,
    "subtitleTypeId": 1,
    "illustrates": [
      1,
      2
    ],
    "banners": [
      1,
      2
    ],
    "categories": [
      1,
      3,
      4
    ],
    "studios": [
      1
    ],
    "directors": [
      3
    ],
    "casts": [
      1,
      2
    ]
  }
}

```

insertrequest3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data21](#schemadata21)|true|none|none|

<h2 id="tocS_Data21">Data21</h2>
<!-- backwards compatibility -->
<a id="schemadata21"></a>
<a id="schema_Data21"></a>
<a id="tocSdata21"></a>
<a id="tocsdata21"></a>

```json
{
  "title": "Spider-Man: No Way Home",
  "duration": 120,
  "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
  "releaseDate": "2021-10-20T00:00:00.000Z",
  "description": "Phim này hay lắm. Studio thích lừa lắm",
  "restrictTypeId": 1,
  "subtitleTypeId": 1,
  "illustrates": [
    1,
    2
  ],
  "banners": [
    1,
    2
  ],
  "categories": [
    1,
    3,
    4
  ],
  "studios": [
    1
  ],
  "directors": [
    3
  ],
  "casts": [
    1,
    2
  ]
}

```

Data21

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|duration|integer(int32)|true|none|none|
|trailerURI|string|true|none|none|
|releaseDate|string|true|none|none|
|description|string|true|none|none|
|restrictTypeId|integer(int32)|true|none|none|
|subtitleTypeId|integer(int32)|true|none|none|
|illustrates|[integer]|true|none|none|
|banners|[integer]|true|none|none|
|categories|[integer]|true|none|none|
|studios|[integer]|true|none|none|
|directors|[integer]|true|none|none|
|casts|[integer]|true|none|none|

<h2 id="tocS_updaterequest3">updaterequest3</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest3"></a>
<a id="schema_updaterequest3"></a>
<a id="tocSupdaterequest3"></a>
<a id="tocsupdaterequest3"></a>

```json
{
  "key": 10,
  "data": {
    "title": "Spider-Man: No Way Home - Updated"
  }
}

```

updaterequest3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|true|none|none|
|data|[Data22](#schemadata22)|true|none|none|

<h2 id="tocS_Data22">Data22</h2>
<!-- backwards compatibility -->
<a id="schemadata22"></a>
<a id="schema_Data22"></a>
<a id="tocSdata22"></a>
<a id="tocsdata22"></a>

```json
{
  "title": "Spider-Man: No Way Home - Updated"
}

```

Data22

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|

<h2 id="tocS_list9">list9</h2>
<!-- backwards compatibility -->
<a id="schemalist9"></a>
<a id="schema_list9"></a>
<a id="tocSlist9"></a>
<a id="tocslist9"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieID": 1,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 06:00:00",
        "dateTimeEnd": "2022-03-01 14:08:00"
      },
      {
        "id": 3,
        "movieID": 3,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 10:00:00",
        "dateTimeEnd": "2022-03-01 12:00:00"
      }
    ]
  }
}

```

list9

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data23](#schemadata23)|true|none|none|

<h2 id="tocS_Data23">Data23</h2>
<!-- backwards compatibility -->
<a id="schemadata23"></a>
<a id="schema_Data23"></a>
<a id="tocSdata23"></a>
<a id="tocsdata23"></a>

```json
{
  "list": [
    {
      "id": 1,
      "movieID": 1,
      "theatreID": 1,
      "roomID": 1,
      "dateTimeStart": "2022-03-01 06:00:00",
      "dateTimeEnd": "2022-03-01 14:08:00"
    },
    {
      "id": 3,
      "movieID": 3,
      "theatreID": 1,
      "roomID": 1,
      "dateTimeStart": "2022-03-01 10:00:00",
      "dateTimeEnd": "2022-03-01 12:00:00"
    }
  ]
}

```

Data23

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[List10](#schemalist10)]|true|none|none|

<h2 id="tocS_List10">List10</h2>
<!-- backwards compatibility -->
<a id="schemalist10"></a>
<a id="schema_List10"></a>
<a id="tocSlist10"></a>
<a id="tocslist10"></a>

```json
{
  "id": 1,
  "movieID": 1,
  "theatreID": 1,
  "roomID": 1,
  "dateTimeStart": "2022-03-01 06:00:00",
  "dateTimeEnd": "2022-03-01 14:08:00"
}

```

List10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|movieID|integer(int32)|true|none|none|
|theatreID|integer(int32)|true|none|none|
|roomID|integer(int32)|true|none|none|
|dateTimeStart|string|true|none|none|
|dateTimeEnd|string|true|none|none|

<h2 id="tocS_range3">range3</h2>
<!-- backwards compatibility -->
<a id="schemarange3"></a>
<a id="schema_range3"></a>
<a id="tocSrange3"></a>
<a id="tocsrange3"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieID": 1,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 06:00:00",
        "dateTimeEnd": "2022-03-01 14:08:00"
      },
      {
        "id": 2,
        "movieID": 2,
        "theatreID": 1,
        "roomID": 1,
        "dateTimeStart": "2022-03-01 08:00:00",
        "dateTimeEnd": "2022-03-01 14:10:00"
      }
    ]
  }
}

```

range3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data23](#schemadata23)|true|none|none|

<h2 id="tocS_findByMovieID">findByMovieID</h2>
<!-- backwards compatibility -->
<a id="schemafindbymovieid"></a>
<a id="schema_findByMovieID"></a>
<a id="tocSfindbymovieid"></a>
<a id="tocsfindbymovieid"></a>

```json
{
  "result": true,
  "data": {
    "list": [
      {
        "id": 1,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T03:00:00.000Z",
        "dateTimeEnd": "2022-04-30T05:00:00.000Z",
        "createdAt": "2022-03-23T09:36:20.000Z",
        "updatedAt": "2022-03-23T09:36:20.000Z"
      },
      {
        "id": 2,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:09:17.000Z",
        "updatedAt": "2022-03-23T10:09:17.000Z"
      },
      {
        "id": 3,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:15:27.000Z",
        "updatedAt": "2022-03-23T10:15:27.000Z"
      },
      {
        "id": 4,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:24:02.000Z",
        "updatedAt": "2022-03-23T10:24:02.000Z"
      },
      {
        "id": 5,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T05:00:00.000Z",
        "dateTimeEnd": "2022-04-30T07:00:00.000Z",
        "createdAt": "2022-03-23T10:24:39.000Z",
        "updatedAt": "2022-03-23T10:24:39.000Z"
      },
      {
        "id": 6,
        "movieId": 1,
        "theatreId": 1,
        "roomId": 1,
        "dateTimeStart": "2022-04-30T12:00:00.000Z",
        "dateTimeEnd": "2022-04-30T14:00:00.000Z",
        "createdAt": "2022-03-23T10:27:17.000Z",
        "updatedAt": "2022-03-23T10:27:17.000Z"
      }
    ]
  }
}

```

findByMovieID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|true|none|none|
|data|[Data26](#schemadata26)|true|none|none|

<h2 id="tocS_Data26">Data26</h2>
<!-- backwards compatibility -->
<a id="schemadata26"></a>
<a id="schema_Data26"></a>
<a id="tocSdata26"></a>
<a id="tocsdata26"></a>

```json
{
  "list": [
    {
      "id": 1,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T03:00:00.000Z",
      "dateTimeEnd": "2022-04-30T05:00:00.000Z",
      "createdAt": "2022-03-23T09:36:20.000Z",
      "updatedAt": "2022-03-23T09:36:20.000Z"
    },
    {
      "id": 2,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T05:00:00.000Z",
      "dateTimeEnd": "2022-04-30T07:00:00.000Z",
      "createdAt": "2022-03-23T10:09:17.000Z",
      "updatedAt": "2022-03-23T10:09:17.000Z"
    },
    {
      "id": 3,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T05:00:00.000Z",
      "dateTimeEnd": "2022-04-30T07:00:00.000Z",
      "createdAt": "2022-03-23T10:15:27.000Z",
      "updatedAt": "2022-03-23T10:15:27.000Z"
    },
    {
      "id": 4,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T05:00:00.000Z",
      "dateTimeEnd": "2022-04-30T07:00:00.000Z",
      "createdAt": "2022-03-23T10:24:02.000Z",
      "updatedAt": "2022-03-23T10:24:02.000Z"
    },
    {
      "id": 5,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T05:00:00.000Z",
      "dateTimeEnd": "2022-04-30T07:00:00.000Z",
      "createdAt": "2022-03-23T10:24:39.000Z",
      "updatedAt": "2022-03-23T10:24:39.000Z"
    },
    {
      "id": 6,
      "movieId": 1,
      "theatreId": 1,
      "roomId": 1,
      "dateTimeStart": "2022-04-30T12:00:00.000Z",
      "dateTimeEnd": "2022-04-30T14:00:00.000Z",
      "createdAt": "2022-03-23T10:27:17.000Z",
      "updatedAt": "2022-03-23T10:27:17.000Z"
    }
  ]
}

```

Data26

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[List12](#schemalist12)]|true|none|none|

<h2 id="tocS_List12">List12</h2>
<!-- backwards compatibility -->
<a id="schemalist12"></a>
<a id="schema_List12"></a>
<a id="tocSlist12"></a>
<a id="tocslist12"></a>

```json
{
  "id": 1,
  "movieId": 1,
  "theatreId": 1,
  "roomId": 1,
  "dateTimeStart": "2022-04-30T03:00:00.000Z",
  "dateTimeEnd": "2022-04-30T05:00:00.000Z",
  "createdAt": "2022-03-23T09:36:20.000Z",
  "updatedAt": "2022-03-23T09:36:20.000Z"
}

```

List12

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|movieId|integer(int32)|true|none|none|
|theatreId|integer(int32)|true|none|none|
|roomId|integer(int32)|true|none|none|
|dateTimeStart|string|true|none|none|
|dateTimeEnd|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_insertrequest4">insertrequest4</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest4"></a>
<a id="schema_insertrequest4"></a>
<a id="tocSinsertrequest4"></a>
<a id="tocsinsertrequest4"></a>

```json
{
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 1,
    "dateTimeStart": "2022-04-30T12:00:00Z",
    "dateTimeEnd": "2022-04-30T14:00:00Z"
  }
}

```

insertrequest4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data27](#schemadata27)|true|none|none|

<h2 id="tocS_Data27">Data27</h2>
<!-- backwards compatibility -->
<a id="schemadata27"></a>
<a id="schema_Data27"></a>
<a id="tocSdata27"></a>
<a id="tocsdata27"></a>

```json
{
  "movieId": 1,
  "theatreId": 1,
  "roomId": 1,
  "dateTimeStart": "2022-04-30T12:00:00Z",
  "dateTimeEnd": "2022-04-30T14:00:00Z"
}

```

Data27

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieId|integer(int32)|true|none|none|
|theatreId|integer(int32)|true|none|none|
|roomId|integer(int32)|true|none|none|
|dateTimeStart|string|true|none|none|
|dateTimeEnd|string|true|none|none|

<h2 id="tocS_updaterequest4">updaterequest4</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest4"></a>
<a id="schema_updaterequest4"></a>
<a id="tocSupdaterequest4"></a>
<a id="tocsupdaterequest4"></a>

```json
{
  "key": 1,
  "data": {
    "movieId": 1,
    "theatreId": 1,
    "roomId": 2,
    "dateTimeStart": "2022-04-30 10:00:00",
    "dateTimeEnd": "2022-04-30 12:00:00"
  }
}

```

updaterequest4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|true|none|none|
|data|[Data27](#schemadata27)|true|none|none|

<h2 id="tocS_updaterequest5">updaterequest5</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequest5"></a>
<a id="schema_updaterequest5"></a>
<a id="tocSupdaterequest5"></a>
<a id="tocsupdaterequest5"></a>

```json
{
  "key": 2,
  "data": {
    "name": "C13",
    "content": "Khán giả trên 13 tuổi",
    "createdAt": "2022-03-16T13:04:32.000Z",
    "updatedAt": "2022-03-16T13:04:32.000Z"
  }
}

```

updaterequest5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|true|none|none|
|data|[Data33](#schemadata33)|true|none|none|

<h2 id="tocS_Data33">Data33</h2>
<!-- backwards compatibility -->
<a id="schemadata33"></a>
<a id="schema_Data33"></a>
<a id="tocSdata33"></a>
<a id="tocsdata33"></a>

```json
{
  "name": "C13",
  "content": "Khán giả trên 13 tuổi",
  "createdAt": "2022-03-16T13:04:32.000Z",
  "updatedAt": "2022-03-16T13:04:32.000Z"
}

```

Data33

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|content|string|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|

<h2 id="tocS_signuprequest">signuprequest</h2>
<!-- backwards compatibility -->
<a id="schemasignuprequest"></a>
<a id="schema_signuprequest"></a>
<a id="tocSsignuprequest"></a>
<a id="tocssignuprequest"></a>

```json
{
  "account": {
    "username": "est incididunt deserunt",
    "password": "adipisicing aute velit quis in"
  },
  "userInfo": {
    "fullname": "ex",
    "email": "sint incidi",
    "gender": 91011132.12474537,
    "address": "cillum exercitation sed anim"
  }
}

```

signuprequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|true|none|none|
|userInfo|[UserInfo](#schemauserinfo)|true|none|none|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "fullname": "ex",
  "email": "sint incidi",
  "gender": 91011132.12474537,
  "address": "cillum exercitation sed anim"
}

```

UserInfo

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullname|string|true|none|none|
|email|string|true|none|none|
|gender|number|true|none|none|
|address|string|true|none|none|

<h2 id="tocS_insertrequest6">insertrequest6</h2>
<!-- backwards compatibility -->
<a id="schemainsertrequest6"></a>
<a id="schema_insertrequest6"></a>
<a id="tocSinsertrequest6"></a>
<a id="tocsinsertrequest6"></a>

```json
{
  "data": {
    "title": "Spider-Man: No Way Home",
    "restrictTypeID": 1,
    "subtittleTypeID": 1,
    "durations": 120,
    "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
    "releaseDate": "2021-10-20",
    "description": "Phim này hay lắm. Studio thích lừa lắm"
  }
}

```

insertrequest6

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data34](#schemadata34)|true|none|none|

<h2 id="tocS_Data34">Data34</h2>
<!-- backwards compatibility -->
<a id="schemadata34"></a>
<a id="schema_Data34"></a>
<a id="tocSdata34"></a>
<a id="tocsdata34"></a>

```json
{
  "title": "Spider-Man: No Way Home",
  "restrictTypeID": 1,
  "subtittleTypeID": 1,
  "durations": 120,
  "trailerURI": "https://www.youtube.com/watch?v=OB3g37GTALc",
  "releaseDate": "2021-10-20",
  "description": "Phim này hay lắm. Studio thích lừa lắm"
}

```

Data34

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|restrictTypeID|integer(int32)|true|none|none|
|subtittleTypeID|integer(int32)|true|none|none|
|durations|integer(int32)|true|none|none|
|trailerURI|string|true|none|none|
|releaseDate|string|true|none|none|
|description|string|true|none|none|

