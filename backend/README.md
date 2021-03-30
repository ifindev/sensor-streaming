## Available Endpoints
- GET: /sensor/fetch --> Fetch all data in json (Not implemented yet)
- GET: /sensor/fetch/{id} --> Implemented and tested. Stable on Postman but return Promise error when we hit it using axios or fetch API. 
- POST: /sensor/add. The post body should have the following data:
  - id: Number
  - temperature: Number
  - humidity: Number
  - roomArea: String
- Example of the request body for the POST request:
```js
{
  "id": 1,
  "temperature": 21.279782079384667,
  "humidity": 87.2525512400796,
  "roomArea": "roomArea1"
}
```

## Todo for the backend part:

- [ **DONE** ] Write a basic skeleton for sensor data model, controller, and router.
- [ **DONE** ] Implement a `POST` request to add data to `db.json` in `sensor-controller` and `sensor-model`. The request body's data field will have a structure like this:

```js
{
  "id": 1,
  "temperature": 21.279782079384667,
  "humidity": 87.2525512400796,
  "roomArea": "roomArea1"
}
```

- [ **DONE** ] For an input validation, write a custom dataValidation logic that will validates whether all the required request's body is filled.

  - If all the required field is filled, then the data will be stored.
  - If one field is missing, then status error will be send.

- [ **DONE** ] On the `sensor-model` which handles the data addition into `db.json`, add a timestamp data into the received data before storing it on the data storage. So the final data will look something like this:

```js
{
  "temperature": 21.279782079384667,
  "humidity": 87.2525512400796,
  "roomArea": "roomArea1",
  "id": 1,
  "timestamp": 1593666000000
},
```

- [ **DONE** ] Write util functions for adding and reading data to and from the json file storage.

- Handle GET request for all the data from json file.

- [ **DONE** ]  Handle GET request for a single data in the json file.
  - The GET request is stable when it was tested using Postman. 
  - It is still unstable when we hit the endpoint using axios or fetch from the Frontend. 
