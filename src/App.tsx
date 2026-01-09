import "./App.css";
import { ChartBarMultiple } from "./components/components/BarChart";
import Header from "./components/components/Header";
import { ChartLineLinear } from "./components/components/LineChart";
import MostOrderedFood from "./components/components/MostOrderedFood";
import { ChartPieDonut } from "./components/components/PieChart";
import { ChartRadialText } from "./components/components/RatingChart";
import { chartData, MostFoodOrder } from "./data/dummyData";

function App() {
  return (
    <div className="text-foreground min-h-screen min-w-full  m-0">
      <Header />
      <div className="w-full h-full text-2xl font-bold p-6">Dashboard</div>
      <div className="w-full h-full p-0">
        {/*1st Content */}
        <div className="w-full h-full m-0 px-3 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full p-3 borderBottom md:border-r-[#C8CBD9] md:border-r-2">
            <ChartBarMultiple />
          </div>
          <div className="w-full h-full p-3 borderBottom ">
            <ChartPieDonut />
          </div>
        </div>
        {/*2nd Content */}
        <div className="w-full h-full m-0 py-0 grid grid-cols-1 md:grid-cols-3 px-6">
          <div className="w-full h-full">
            <div className="py-4">
              <h2 className="font-medium">Your Rating</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="w-full min-h-[300px] p-3 relative">
              {chartData.map((item) => (
                <div key={item.FoodTaste} className="">
                  <ChartRadialText data={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full p-3 md:border-x-2 md:border-x-[#C8CBD9]">
            <div className="py-4">
              <h2 className="font-medium">Most Ordered Food</h2>
              <p>Adipiscing elit, sed do eiusmod tempor</p>
            </div>
            {MostFoodOrder.map((item, index) => (
              <div
                key={item.title}
                className={`mb-2 p-4 ${
                  index < 3 ? "border-b-[#C8CBD9] border-b-2" : ""
                }`}
              >
                <MostOrderedFood data={item} />
              </div>
            ))}
          </div>
          <div className="w-full h-full p-3">
            <ChartLineLinear />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
