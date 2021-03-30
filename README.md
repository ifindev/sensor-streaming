# Sensor Streaming

## What is it?

Sensor streaming is my attempt to build an integrated IoT system consisted of three different applications. The three are:

- Client: This is a nodejs client built for simulating an IoT sensor gateway client, such as Raspberry Pi, whose function is to periodically send sensor data to backend through a POST request.
- Backend: A simple express backend which handles GET and POST requests from a client, i.e. sensor gateway, and also from the frontend part of the app. For now the data is stored in a json file for a demo purpose.
- Frontend: A frontend application which fetchs data from storage through GET request endpoint provided by the express backend. Hopefully we can create a simple dashboard which can graph the data, which is the temperature and humidity data by room area and also by date time.

Basically, the underlying architecture for this application can be understood from this diagram.
![Basic architecture](/img/system.png)

## Progress

Currently, the Backend and the Client are the only two that's been working fine. The front end is still having a problem to get the data from the Express endpoint. But it is already working for fetching and updating data on the DOM fetched from the json api. so I will continue it later.

## Guide to Use

To use this application, do the followings:

- Clone this repo.
- On the root file which is where this readme exist, run `npm install`.
- Then, `cd` into `backend` and run `node app.js` on your terminal. The server will run automatically.
- Then go into the `client` directory. Run `node client.js`. The client will start to fill up `sensor_data.json`.
- Terminate the client on terminal using `ctrl+c`. Then go into `backend/data/sensor_data.json`. You will see that the json file will have a data for five different room areas.
- For the front-end, just open it on google-chrome. It will start fetching data from jsonplaceholder. 

Cheers! ✌️✌️

P.S:
The code was written and tested on linux ubuntu 20.04. So if you run it on windows and have a trouble, please post an issue or probably just reach me out directly. Thank you!

## Copyright

&copy; Muhammad Arifin - 2021
