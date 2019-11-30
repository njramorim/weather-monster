# weather-monster

get weather for (almost) all the cities

## Getting Started

Git clone this repo, `npm install` it and run `npm run dev`.
The application will be provided at http://localhost:8080
If you try to access http://localhost:8080?theme=[justTypeAnything] the Application styled theme will change.

Also, if you click in the search-box and type nothing, it will bring the first 30 cities with more than 5 million inhabitants.
If you type anything it will search and bring the first 30 results. You don't need to mind with accentuation or spaces ;).

Obs: after selecting a city, try to click in its name to see it's location.

### Prerequisites

```
node v10
npm v6
```

### Development Modes

There is a server and a client layer.
You can run both together with `npm run dev` or you can run them separately with `npm run dev:client` and `npm run dev:server`.

Alternatively you can also let the server aside and run the lazy mocked version with `npm run dev:mock`

## Running the tests

To run the tests, just use wich one fits you better:

`npm run test` -> run all the tests without coverage

`npm run test:watch` -> useful while developing

`npm run test:coverage` -> run tests and display the code coverage

## Deployment

This is a POC for a weather-api based application.
With that in mind, there is a big TODO in things regarding production mode (profiles, pipelines, envs, etc).
But, still, one can output a production bundle of the client application with `npm start`. This will output the client at `dist/index.html` and start the server.

## Built With

- [Webpack](https://webpack.js.org/) - module bundler
- [Express](https://expressjs.com/) - web framework for Node.js
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- [Styled-Components](https://www.styled-components.com/) - Visual primitives for the component age
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Jest](https://jestjs.io/) - JavaScript Testing Framework with a focus on simplicity
- [Enzyme](https://airbnb.io/enzyme/) - JavaScript Testing utility for React
