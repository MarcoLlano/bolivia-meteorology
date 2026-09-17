# bolivia-meteorology
This web page displays the weather information from Bolivia from the next 7 days, the information is related to the principal cities from Bolivia.

# Pre-requisites

- Node.js
- npm
- API Key from Visual Crossing.
- Ports 300 and 5173 available

# How to use
Clone the repository in local environment. Checkout to master branch and then follow the steps below:

Backend: 

1. Install backend dependencies, navigate to backend folder and open command line console, then run the commands:
> npm install

> npm install express //if not installed

> npm install cors //if not installed

> npm install dotenv //if not installed

2. update backend\.env file by adding the Visual Crossing API key.
3. run the backend by executing the next command:
- npm run dev

Frontend:
1. Open a new command line console and then navigate to frontend folder and then install the required dependencies by running the command:
> npm install

> npm install react-router-dom //if not installed

2. Build the project by executing the command:
> npm run build

3. Start the frontend by running the command from frontend folder:
> npm run dev

Navigate to http://localhost:5173 and have fun using the project.

# Technologies used

React > Used for the frontend view.
Javascript > main development language.
Css3 > Responsive style
Node.js > To execute the backend.
Express.js > Used for the API REST.
CORS > Allows the communication between Reackt and Express in different ports.
npm > Manage dependencies.

# API used in the project

Express.js to connect to Visual Crossing platform

# Why Crossing Platform?

Because this platform allowed to get information for future 7 days as a free user, Open Weathermap api allowed only get the next 5 days as a free user.

# Advantages

It was possible to configure without problems, as a free user I was able to get the information for the next 15 days as maximum with free user.

# Disadvantages

The information retrieved by the API is incomplete, there are 3 cities that shows empty information in home page.

# Main tech desitions

I decied to try with React instead of .net (I have more experience in this) because, when I first met this technology, I was able to view in person the power of this for UI design, when the web page is too dynamic and it must be responsive according to each screen resolution. React is a great tool for systems like this.

# AI Usage

I used ChatGPT as a main AI tool in order to learn about React as this was my first time developing a project in this technology.
Also used copilot in order to fix some configuration issues with the dependencies in the backend.

I decided to modify the information to show in the forntend given by the ChatGPT tool, because it was missing the min and max temps displayed in the home page.

I decied to split the main.css file into multiple files in order to improve the organization, previously all the styles were in only one file, and this was difficult to understand.