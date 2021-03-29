# Sensor Streaming

## What is it?

Sensor streaming is my attempt to build an integrated IoT system consisted of three different applications. The three are:

- Client: This is a nodejs client built for simulating an IoT sensor gateway client, such as Raspberry Pi, whose function is to periodically send sensor data to backend through a POST request.
- Backend: A simple express backend which handles GET and POST requests from a client, i.e. sensor gateway, and also from the frontend part of the app. For now the data is stored in a json file for a demo purpose.
- Frontend: A frontend application which fetchs data from storage through GET request endpoint provided by the express backend. Hopefully we can create a simple dashboard which can graph the data, which is the temperature and humidity data by room area and also by date time.

Basically, the underlying architecture for this code can be understood from this diagram.
![Basic architecture](/img/system.png)

## Guide to Use

This application is still in a development process. So there will be no guide until one part of the system is done. For now, my focus will be on the backend side which will do much of the heavy-lifting functionalities.

## Copyright

&copy; Muhammad Arifin - 2021
