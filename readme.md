# Node.js API Gateway

This Node.js library is designed to help you easily create an API Gateway for handling microservices. Built using Express.js, it allows users to define configurations for routing requests to various backend services through a central gateway. This library simplifies the process of setting up an API gateway, enabling rapid deployment and ease of use.

# Features

Easy Setup: Install the package, configure your micro services, and start the gateway.
Middleware Support: Implement custom middleware for request processing before forwarding to the target service.
Flexible Configuration: Define multiple services with unique paths and routing options.
Change Origin: Supports changing the request origin for services.

## Installation

To install the package, use npm:

```bash
npm install express-service-gateway
```

## Usage

### 1. Create an index.js File

Create an index.js file in your project directory to define your gateway configuration and initialize the API Gateway.

### 2. Import the Package

In your index.js, import the gatewayMiddleware from the package:

```bash
const { gatewayMiddleware } = require("express-service-gateway");
```

### 3. Setup Configuration JSON

Define your API and server configurations in a JSON object:

```bash
const configJson = {
  api_configurations: [
    {
      target_service_url: "http://service1:3001/",
      changeOrigin: true,
      api_name: "api",
      api_middleware: apiMiddleware,
    },
    {
      target_service_url: "http://service2:3002/",
      changeOrigin: true,
      api_name: "api1",
    },
  ],
  sever_configurations: {
    sever_port: 3000,
    app_listen_callback: app_listen_callback,
  },
};
```

### 4. Define Middleware and Callback Functions

Implement any middleware functions and server callback as needed:

```bash
const apiMiddleware = (req, res, next) => {
  console.log("Request is being processed by middleware.");
  next();
};

const app_listen_callback = (port) => {
  console.log(`API Gateway is running on Port ${port}`);
};
```

### 5. Initialize the Gateway

Pass the configuration JSON to the gatewayMiddleware function:

```bash
gatewayMiddleware(configJson);
```

### 6. Run Your Gateway

Run your index.js file using Node.js:

```bash
node index.js
```

### 7. Accessing Your Services

With the gateway running, you can access your services through the gateway:

#### http://localhost:3000/api will route to http://service1:3001/

#### http://localhost:3000/api1 will route to http://service2:3002/

### Configuration Options

#### api_configurations

    target_service_url: The URL of the microservice.
     changeOrigin: Set to true to change the origin of the request.
     api_name: The name of the API route. Requests to localhost:3000/{api_name} will be routed
              to the corresponding service.

#### api_middleware: (Optional) A middleware function to process requests before they are forwarded to the service.

##### sever_configurations

       sever_port: The port on which the API Gateway will run.
       app_listen_callback: A callback function that is invoked when the server starts listening.

Example Configuration
Here’s an example configuration:

```bash
const configJson = {
  api_configurations: [
    {
      target_service_url: "http://service1:3001/",
      changeOrigin: true,
      api_name: "api",
      api_middleware: apiMiddleware,
    },
    {
      target_service_url: "http://service2:3002/",
      changeOrigin: true,
      api_name: "api1",
    },
  ],
  sever_configurations: {
    sever_port: 3000,
    app_listen_callback: app_listen_callback,
  },
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to discuss improvements or bug fixes.

## License

#### This project is licensed under the MIT License. See the LICENSE file for more details.
