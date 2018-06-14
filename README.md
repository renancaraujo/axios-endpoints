# Axios endpoints

Axios endpoints helps you to create a more concise endpoint mapping with a simple but flexible api. It is as wrapper over [axios](https://github.com/axios/axios).

### Getting started

Before anything, install axios-endpoints

```bash
npm install --save axios #axios is a peer dependency
npm install --save axios-endpoints
```

### Simple usage

The simpliest way to use axios-endpoints:

```javascript
// endpoints.js
import { Endpoint } from "axios-endpoints";

export const userEndpoint = new Endpoint("https://localhost:8080/api/user");



// anotherfile.js
import { userEndpoint } from "./endpoints";

function getUserList(callback) {
   userEndpoint.get().then(response=>{
      callback(response.data);
   }).catch(e=>{
      console.log("That didnt go well");
   });
}

// do you like async stuff? so take this async example
async function getUserList(){
   try{
      const { data } = await userEndpoint.get();
      return data;
   } catch (e) {
      console.log("That didnt go well");
   }
}


```

You can user either `.get`  `.post`  `.put` and `.delete` as well:

```javascript
import { Endpoint } from "axios-endpoints";

const cityEndpoint = new Endpoint("https://localhost:8080/api/city");

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

#### 

#### uriParams

Not always your endpoint will be represented by a fixed string. For that, uri params exists.

```javascript
import { Endpoint } from "axios-endpoints";

const postEndpoint = new Endpoint(({postId = ""}) => "https://localhost:8080/api/post/" + postId)

const { data } = await postEndpoint.get({
   uriParams: {
      postId: 1
   }
}); // GET https://localhost:8080/api/post/1
```

For more information about parameters and returned values, check the API section.

### Usage with Factory (recommended)

For a more complete usage of axios settings, you may use the Factory. 

```javascript
import axios from "axios";
import EndpointsFactory from "axios-endpoints";

const axiosInstance = axios.create({
    baseURL: "https://localhost:8080/api"
});

const Endpoint = EndpointsFactory(axiosInstance);

const cityEndpoint = new Endpoint("/city"); // GET https://localhost:8080/api/city
const postEndpoint = new Endpoint(({id = ""}) => "/post/" + id);

// Header changing example
function setAuthorization(MYTOKEN){
  axiosInstance.defaults.headers.common["Authorization"] = MYTOKEN;
}

```

### API



