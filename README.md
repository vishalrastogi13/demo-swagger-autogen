# demo-swagger-autogen
demo for generate oas api documentation automatically with the help of swagger autogen module


Use the command below to generate the documentation at project startup:

```bash
$ npm run start-gendoc
```

Use the command below to start the project without generating the documentation:

```bash
$ npm start
```

Run the project and access the documentation at:

[http://localhost:3000/doc](http://localhost:3000/doc)


## Guidelines
1. An open api skeleton code is to be provided in swagger.js file which contains the metadata for the apis, server and host information, definitions of models, and many such things.
2. Every route or api that needs to be documented must be annotated with #swagger.<something> tag which gives the information to autogen module about the request type, request object, response body etc.
3. To generate the api specification in version 2, omit the openapi version 3 provided while importing the swagger-autogen module
4. swagger-ui-express module is used to read the generated specification (swagger-output.json) and render it in UI for the ease of use.

## Screenshots

![Screenshot 2022-05-17 at 4 06 34 PM](https://user-images.githubusercontent.com/95530856/168792807-dd71a6ff-9501-4bbd-b1ff-af8beb812fe5.png)
![Screenshot 2022-05-17 at 4 06 51 PM](https://user-images.githubusercontent.com/95530856/168792816-760bb5cb-22d5-4706-bc4a-73a3ef0d64e7.png)
![Screenshot 2022-05-17 at 4 07 46 PM](https://user-images.githubusercontent.com/95530856/168792826-05e4650d-17a8-4ce8-83d1-1776fe420ca3.png)
![Screenshot 2022-05-17 at 4 08 51 PM](https://user-images.githubusercontent.com/95530856/168792925-3b838367-19de-4677-ac5b-c0615f407258.png)
