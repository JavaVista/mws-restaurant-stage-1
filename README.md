# Mobile Web Specialist Certification Course

## Project Restaurant Reviews App

---
> **NOTE:** These are my updated README instructions and work information about the project.
---
Converted a static webpage to a mobile-ready web application.

## Features added to project

* Responsiveness
* Accessibility - Lighthouse v2 Accessibility Score of 89
* Offline experience

![Restaurant Reviews App Screenshot](RestaurantReviewsApp.png)

## Installation/Getting Started

Clone the project from Github. This repository uses leafletjs with Mapbox and it requires a [Mapbox](https://www.mapbox.com/) Public Token Key. Mapbox is free to use, and does not require any payment information.

Create a `map_key.js` file in the root of the project and add the following code:

`const MAPBOX_API_KEY = '<type your MAPBOX API KEY HERE>';`

Using VSCode download and run the Live Server extension. Open your browser and visit site: http://localhost:5500.

## App Features

* View restaurants in New York City
* Filter by neighborhoods and cuisines
* View Restaurant details
* View pages already loaded when offline
* View pages across multiple viewports and devices
* Use app with screen reader or keyboard-only

## Resources

* [YouTube](https://www.youtube.com/watch?v=ksXwaWHCW6k&t=0s&list=PLfYR7oYhwToYr0uQXVcs3Mifq_5lmtpkt&index=35) - Intro To Service Workers & Caching

---
> **NOTE:** Original README instructions notes are below.
---

#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.



