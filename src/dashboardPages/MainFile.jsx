import ProfileCard from "./components/ProfileCard";
import TimeCard from "./components/TimeCard";
import WeatherCard from "./components/WeatherCard";
import ChartCard from "./components/ChartCard";
import ImageCarousel from "./components/ImageCarousel";

function MainFile() {
  return (
    <main className="main-container bg-transparent pr-[17px] ">
      <div className="card-title">
        <div className="card-inner ">
          <h3>Charts</h3>
          <ChartCard />
        </div>

        <div className="card-inner  ">
          <h3>Account Info</h3>
          <ProfileCard />
        </div>

        <div className="card-inner ">
          <h3>Image Carousel</h3>
          <ImageCarousel />
        </div>

        <div className="card-inner ">
          <h3>Weather</h3>
          <WeatherCard />
        </div>
        <div className="card-inner time-card">
          <h3>Current Time & Date</h3>
          <TimeCard />
        </div>
      </div>
    </main>
  );
}

export default MainFile;
