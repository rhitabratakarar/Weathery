# Description:

A simple weather app made using NodeJS.


# Dependencies:

1. dotenv

2. Axios

**(Optional Dependencies):**

1. Nodemon
   
2. Eslint


# Setup Instructions:

1. This application required NodeJS to run, thus it is recommended to install.
   
2. Git clone the directory using the below mentioned command:

        $ git clone https://github.com/rhitabratakarar/Weathery.git

3. Change the directory

        $ cd Weathery

4. Install the dependencies (note: `npm` is required)

        $ npm install

5. Setup the API Key.


# Setup API Keys:

The setup is required for the below mentioned websites. For saving the API Keys, a `.env` file is required. So creating that file inside the project directory is recommended.

## weatherstack.com
   
1. Signup or Login into the [WeatherStack.com](https://weatherstack.com) and get an API Key from the dashboard.

2. Open the `.env` file and paste the key in the following format:

        WEATHERSTACK_API_KEY=<Your Api Key goes here>

        For Example:
        WEATHERSTACK_API_KEY=A1SK21DJ75kajsdhash1xay...
    
    **Note**: *The API_KEY is just an example. Get your own API KEY. This won't work.*

3. Save the file and close.

## positionstack.com
   
1. Signup or Login into the [PositionStack.com](https://positionstack.com) and get an API Key from the dashboard.

2. Open the `.env` file and paste the key in the following format:

        POSITIONSTACK_API_KEY=<Your Api Key goes here>

        For Example:
        POSITIONSTACK_API_KEY=A1SK21DJ75kajsdhash1xay...
    
    **Note**: *The API_KEY is just an example. Get your own API KEY. This won't work.*

3. Save the file and close.

# Usage

1. Get inside the Project Folder and run the following command:

        $ node app.js <location>

