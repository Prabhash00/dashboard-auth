import ProfileCard from "./components/ProfileCard";
import TimeCard from "./components/TimeCard";
import WeatherCard from "./components/WeatherCard";
import ChartCard from "./components/ChartCard";
import ImageCarousel from "./components/ImageCarousel";

function MainFile() {
  return (
    <main className="main-container bg-gray-400 pr-[17px]">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="card-title">
        <div className="card-inner ">
          <ChartCard />
        </div>

        <div className="card-inner  ">
          <ProfileCard />
        </div>

        <div className="card-inner  ">
          <TimeCard />
        </div>

        <div className="card-inner ">
          <WeatherCard />
        </div>
        <div className="card-inner ">
          <ImageCarousel/>
        </div>
        <div className="card-inner bg-red-400">
          <h3>Charts</h3>
        </div>
      </div>
    </main>
  );
}

export default MainFile;
