import "./App.css";
import { ChartBarMultiple } from "./components/components/BarChart";
import Header from "./components/components/Header";

function App() {
  return (
    <div className="text-foreground min-h-screen min-w-full  m-0">
      <Header />
      <div className="w-full h-full text-2xl font-bold p-6">Dashboard</div>
      <div className="w-full h-full p-0">
        {/*1st Content */}
        <div className="w-full h-full m-0 p-3 grid grid-cols-2">
          <div className="w-full h-full p-3 borderBottom border-r-[#C8CBD9] border-r-2">
            <ChartBarMultiple />
          </div>
          <div className="w-full h-full p-3 borderBottom">Content 2</div>
        </div>
        {/*2nd Content */}
        <div className="w-full h-full m-0 p-6">Content 2</div>
      </div>
    </div>
  );
}

export default App;
