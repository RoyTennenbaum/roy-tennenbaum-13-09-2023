# Weather Task

*Note: The API used for this assignment is limited to 50 calls a day! 
Page will show continuous "Oops! unexpected error!" popups while attempting to use it, that's when you know you're out :)

This is a home assignment I recently received, it shows the weather in all the cities across the globe, more below!

## Tech Stack
- Next.js
- Typescript
- Tailwind CSS
- Context API -> State Management
- react-toastify -> User Error Handling
- Vercel -> Deployment

## Functionality
#### Navbar
- Toggle button for switching between Celsius and Fahrenheit
- Toggle button for switching between light mode and dark mode
#### Home Page
- Search bar to search for cities by name, and by selecting one -
- View the selected city's name & current weather
- Button to add a currently viewed city to favorites (saving it to local storage), the same button removes the city from favorites
- 5 weather cards showcasing a 5 day daily forecast, each containing an image representing the forecasted weather, and below the day of the week and weather
#### Favorites Page
- Fetch the latest weather for every city every time (On purpose!) to get the latest weather. city names are in local storage
- Each city viewable in a weather card of its own, featuring the name, current weather icon and current weather, from top to bottom

## Development Environment Setup
### Daily API calls are done but you're curious to view the website in it's full glory? here's how:

#### Prerequisites
- Node.js v18+
- Create an account on [Accuweather account](https://developer.accuweather.com/)https://developer.accuweather.com/

#### Installing
1. Clone the repository:
   
```$ git clone https://github.com/RoyTennenbaum/roy-tennenbaum-13-09-2023.git```

2. Navigate to the project directory:
   
```$ cd roy-tennenbaum-13-09-2023```

3. Install dependencies:

```$ npm i```

**4. Configuration**
Create a .env file in the project root and insert the apikey you got from Accuweather like so:

```NEXT_PUBLIC_WEATHER_API = insert key here```

5. Run the development server

```$ npm run dev```

6. Enjoy :D








