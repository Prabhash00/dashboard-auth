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
          <ChartCard />
        </div>

        <div className="card-inner  ">
          <ProfileCard />
        </div>

        <div className="card-inner  ">
          <ImageCarousel/>
        </div>

        <div className="card-inner ">
          <WeatherCard />
        </div>
        <div className="card-inner time-card">
          <TimeCard />
        </div>
        
      </div>
    </main>
  );
}

export default MainFile;
