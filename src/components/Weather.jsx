import React, { useEffect, useRef, useState } from 'react';
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Weather.css';

const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setweatherData] = useState(false);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };

    const search = async (city) => {
        if (city === "") {
            toast.warn("Please enter a city name!");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                toast.error("City not found!");
                setweatherData(false);
                return;
            }
            toast.success("CITY WEATHER DATA FOUND...");
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setweatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            });
            console.log(data);
        } catch (error) {
            setweatherData(false);
            toast.error("ERROR IN FETCHING THE DATA .");
            console.error("ERROR IN FETCHING THE DATA ......", error);
        }
    };

    useEffect(() => {
        search("greenland");
    }, []);

    return (
        <div className='weather font-sans place-self-center p-[40px] rounded-lg bg-[linear-gradient(45deg,#2f4680,#500ae4)] flex flex-col items-center'>
            <div className="search-bar flex flex-row items-center gap-[12px] w-full max-w-[400px]">
                <input ref={inputRef} className='h-[50px] border-none outline-none rounded-full pl-[25px] text-[#626262] bg-[#ebfffc] text-[18px] flex-grow' type="text" placeholder='Search' />
                <img className='h-[50px] w-[50px] p-[15px] rounded-full bg-[#ebfffc] cursor-pointer hover:rounded-2xl' src={search_icon} alt="icon" onClick={() => search(inputRef.current.value)} />
            </div>
            {weatherData ?
                <>
                    <img className='weather-icon w-[150px] mx-[30px]' src={weatherData.icon} alt="" />
                    <p className='temperature text-[#fff] text-[60px]'>{weatherData.temperature}°C</p>
                    <p className='location text-[#fff] text-[30px]'>{weatherData.location}</p>
                    <div className="weather-data w-full mt-[40px] text-[#fff] flex justify-between max-w-[400px]">
                        <div className="col flex flex-start gap-[12px] text-[22px] items-center">
                            <img className='h-[26px]' src={humidity_icon} alt="" />
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span className='block text-[16px]'>Humidity</span>
                            </div>
                        </div>

                        <div className="col flex flex-start gap-[12px] text-[22px] items-center">
                            <img className='h-[26px]' src={wind_icon} alt="" />
                            <div>
                                <p>{weatherData.windSpeed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <img className='weather-icon w-[150px] mx-[30px]' src={clear_icon} alt="" />
                    <p className='temperature text-[#fff] text-[60px]'>Temp °C</p>
                    <p className='location text-[#fff] text-[30px]'>Location</p>
                    <div className="weather-data w-full mt-[40px] text-[#fff] flex justify-between max-w-[400px]">
                        <div className="col flex flex-start gap-[12px] text-[22px] items-center">
                            <img className='h-[26px]' src={humidity_icon} alt="" />
                            <div>
                                <p>- %</p>
                                <span className='block text-[16px]'>Humidity</span>
                            </div>
                        </div>

                        <div className="col flex flex-start gap-[12px] text-[22px] items-center">
                            <img className='h-[26px]' src={wind_icon} alt="" />
                            <div>
                                <p>- Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            }
            <ToastContainer />
        </div>
    );
};

export default Weather;