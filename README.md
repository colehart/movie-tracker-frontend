[![Waffle.io - Columns and their card count](https://badge.waffle.io/colehart/movie-tracker-frontend.svg?columns=all)](https://waffle.io/colehart/movie-tracker-frontend)

# MovieTracker
## A React Redux front-end app to track your favorite Wes Anderson movies.

Project spec can be found [here](https://github.com/turingschool-examples/movie-tracker).

## See it live
[![Alt text](./src/assets/tracker_screenshot.gif "App Screenshot")](https://colehart.github.io/movie-tracker-frontend/)

## Wireframe
MovieTracker is a single page web app where you can create an account, search and store your favorite Wes Anderson films.

[![Alt text](./src/assets/movietracker_wireframe.jpg "App Wireframe")]

## App Architecture

```
App (stateful)
|
|_ Header (stateless)
|
|
|_ CardContainer (stateless)
    |
    |_ Card (x n depending on API data) (stateful)

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

