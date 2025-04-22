# React Weather Application

This is a simple React weather application that allows users to search for weather information by city name. It fetches data from the OpenWeatherMap API and displays details such as temperature, location, humidity, and wind speed, along with a relevant weather icon.

## Features

- **Search by City:** Users can input a city name to retrieve the current weather conditions.
- **Display Current Weather:** Shows temperature, location, a weather icon, humidity, and wind speed.
- **Error Handling:** Provides user-friendly notifications for empty search queries and when a city is not found.
- **Loading State (Implicit):** The UI updates once the weather data is fetched.
- **Responsive Design:** The layout adapts to different screen sizes for a better user experience on various devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **OpenWeatherMap API:** A service that provides weather data.
- **`react-toastify`:** A library for displaying elegant toast notifications.
- **CSS:** For styling and responsive design.
- **Assets:** Includes icons for search, clear, cloud, drizzle, humidity, rain, snow, and wind.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project_directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Set up environment variables:**
    - Create a `.env.local` file in the root of your project.
    - Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to the `.env.local` file:
      ```
      VITE_APP_ID=your_openweathermap_api_key
      ```
      **Note:** This application uses Vite, so environment variables are prefixed with `VITE_APP_`.
5.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the application, usually at `http://localhost:5173`.

## Project Structure
react-weather-app/
├── assets/
│   ├── clear.png
│   ├── cloud.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
├── src/
│   ├── components/
│   │   └── Weather.jsx         # Main weather component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx
│   ├── Weather.css             # Styles for the Weather component
│   └── ...
├── .env.local                  # Environment variables
├── .gitignore
├── README.md                   # This file
├── package.json
├── package-lock.json
├── vite.config.js              # Vite configuration
└── ...



## Usage

1.  Run the application using the setup instructions.
2.  Enter a city name in the search bar.
3.  Click the search icon.
4.  The application will fetch and display the current weather information for the entered city.
5.  If the city is not found or the input is empty, a notification will be displayed.

## Further Improvements

- **Forecast Display:** Show a multi-day weather forecast.
- **Location Services:** Allow users to get weather based on their current location.
- **More Detailed Information:** Include details like feels-like temperature, pressure, etc.
- **Unit Switching:** Allow users to switch between Celsius and Fahrenheit.
- **Theming:** Implement light and dark themes.
- **Caching:** Store previously searched cities for faster retrieval.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
"# Weather-App"
