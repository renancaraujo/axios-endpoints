# Axios endpoints

[![Build Status](https://travis-ci.org/renancaraujo/axios-endpoints.svg?branch=master)](https://travis-ci.org/renancaraujo/axios-endpoints)

Axios endpoints helps you to create a more concise endpoint mapping with a simple but flexible api. It is as wrapper over [axios](https://github.com/axios/axios).

### Getting started

Before anything, install axios-endpoints

```bash
npm install --save axios #axios is a peer dependency
npm install --save axios-endpoints
```

### Usage with Factory (recommended)

For a more complete usage of axios settings, you may use the Factory. 

```javascript
import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
    baseURL: "https://localhost:8080/api"
});

const Endpoint = EndpointFactory(axiosInstance);

const cityEndpoint = new Endpoint("/city"); // GET https://localhost:8080/api/city
const postEndpoint = new Endpoint(({id = ""}) => "/post/" + id);

// Header changing example
function setAuthorization(MYTOKEN){
  axiosInstance.defaults.headers.common["Authorization"] = MYTOKEN;
}



function getCityList(callback) {
   cityEndpoint.get().then(response=>{
      callback(response.data);
   }).catch(e=>{
      console.log("That didnt go well");
   });
}

// do you like async stuff? so take this async example
async function getCityList(){
   try{
      const { data } = await cityEndpoint.get();
      return data;
   } catch (e) {
      console.log("That didnt go well");
   }
}


```


### Usage without factory

The fastest way to use axios-endpoints. ideal when you dont want to set any axios configs:

```javascript
// endpoints.js
import { Endpoint } from "axios-endpoints";

export const userEndpoint = new Endpoint("https://localhost:8080/api/user");


// anotherfile.js
import { userEndpoint } from "./endpoints";

async function getUserList(){
   try{
      const { data } = await userEndpoint.get();
      return data;
   } catch (e) {
      console.log("That didnt go well");
   }
}


```

### HTTP methods

You can user either `.get`  `.post`  `.put` and `.delete` as well:

```javascript

const cityEndpoint = new Endpoint("/city");

const { data } = await cityEndpoint.get(); // GET https://localhost:8080/api/city
const { data } = await cityEndpoint.get({
    params: {country:"brazil"}
}); // GET https://localhost:8080/api/city?country=brazil


const { data } = await cityEndpoint.post({
   name: "Hortolandia", 
   country: "Brazil", 
   hazardLevel: 10000
}, {
  params: { someParam: "icecream" }
}); 
/*
curl --request POST \  
  --url https://localhost:8080/api/city?someParam=icecream \
  --header 'Content-Type: application/json' \
  --data '{
   "name": "Hortolandia", 
   "country": "Brazil", 
   "hazardLevel": 10000
  }'
*/
```


#### uriParams

Not always your endpoint will be represented by a fixed string. For that, uri params exists.

```javascript
const postEndpoint = new Endpoint(({postId = ""}) => "/post/" + postId)

const { data } = await postEndpoint.get({
   uriParams: {
      postId: 1
   }
}); // GET https://localhost:8080/api/post/1
```

For more information about parameters and returned values, check the API section.



### API

#### `EndpointFactory`
```javascript
import axios from "axios";
import EndpointFactory from "axios-endpoints"

const axiosInstance = axios.create(config);
const Enpoint = EndpointFactory(axiosInstance);
```

Type: function

| Parameters    |                |
|---------------|----------------|
| axiosInstance | Axios instance |

`axiosInstance` is generated via `axios.create` function. For more information, check [axios documentation](https://github.com/axios/axios#axioscreateconfig).

Return: `Endpoint`


#### `Endpoint`
```javascript
import axios from "axios";
import EndpointFactory from "axios-endpoints"

const axiosInstance = axios.create(config);
const Enpoint = EndpointFactory(axiosInstance);
```
Type: class

##### Constructor

| Constructor Parameters    | Type |
|---------------|----------------|
| endpointIdentifier | `String` or `Function any => String` |

##### Instance methods

###### `endpoint#get(options)`
###### `endpoint#post(payload, options)`
###### `endpoint#put(payload, options)`
###### `endpoint#patch(payload, options)`
###### `endpoint#delete(options)`

| Parameters    | Type     |
|---------------|----------------|
| options | The same object as the [Request Config](https://github.com/axios/axios#request-config) with the extra property `uriParams`. <br /> You may use  `params` and `uriParams` more often.|
| payload | The object that will be carried as json payload of the request |




## Contributing

If you got so far reading this README, you are maybe thinking about contributing. Pull requests are welcome.







