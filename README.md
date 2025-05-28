# 🌤️ Mausam Edge - Weather Forecasting App

A modern, responsive weather forecasting web application that provides real-time weather information with a beautiful user interface.

## ✨ Features

- 🌡️ **Current Weather**: Real-time weather conditions for any location
- 📅 **5-Day Forecast**: Extended weather predictions
- ⏰ **Hourly Forecast**: Detailed hourly weather data
- 📍 **Current Location**: Automatic weather detection for your location
- 🔍 **City Search**: Search weather for any city worldwide
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎥 **Background Video**: Beautiful aerial mountain view background
- ⚡ **Fast Performance**: Optimized vanilla JavaScript implementation

## 🚀 Live Demo

[View Live Demo]([https://adarshxkumar.github.io/Weather-Dashboard/])

## 📸 Screenshots

![Mausam Edge Weather App](https://github.com/AdarshXKumAR/Weather-Dashboard/blob/main/image.png)

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **OpenWeatherMap API** - Weather data source
- **Google Fonts** - Inter and Roboto font families

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdarshXKumAR/mausam-edge-weather-app.git
   cd mausam-edge-weather-app
   ```

2. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

3. **Configure API Key**
   - Open `assets/js/api.js` (or wherever your API configuration is)
   - Replace `YOUR_API_KEY` with your actual OpenWeatherMap API key
   ```javascript
   const API_KEY = "your_openweathermap_api_key_here";
   ```

4. **Run the Application**
   - Open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

5. **Access the App**
   - Open your browser and go to `http://localhost:8000`

## 📁 Project Structure

```
mausam-edge-weather-app/
│
├── index.html                 # Main HTML file
├── favicon.svg               # Favicon
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── app.js           # Main application logic
│   │   └── route.js         # Routing functionality
│   ├── images/
│   │   ├── logo files       # Logo and branding
│   │   └── openweather.png  # OpenWeather attribution
│   └── videos/
│       └── background.mov   # Background video
└── README.md
```

## 🌐 API Integration

This app uses the OpenWeatherMap API to fetch:
- Current weather conditions
- 5-day weather forecast
- Hourly weather predictions
- Location-based weather data

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 📲 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)
- 🖥️ Large screens (1200px and up)

## 🎨 Key Features Explained

### Current Weather Section
- Displays current temperature, weather condition, and location
- Shows additional details like humidity, pressure, and wind speed

### 5-Day Forecast
- Extended weather predictions
- Daily high and low temperatures
- Weather condition icons

### Hourly Forecast
- Hour-by-hour weather predictions
- Temperature trends
- Weather condition changes

### Search Functionality
- Real-time city search
- Auto-suggestions
- Error handling for invalid locations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Adarsh Kumar**
- GitHub: [@AdarshXKumAR](https://github.com/AdarshXKumAR)
- LinkedIn: [Abhishek Adarsh](https://linkedin.com/in/abhishekadarsh0670)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the beautiful typography
- Video background by Vecteezy

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

⭐ If you found this project helpful, please give it a star on GitHub!
