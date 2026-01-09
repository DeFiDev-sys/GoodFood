import "./App.css";
import Header from "./components/components/Header";

function App() {
  return (
    <div className="text-foreground min-h-screen min-w-full  m-0">
      <Header />
      <div className="w-full h-full text-2xl font-bold p-6">Dashboard</div>
      <div className="w-full h-full p-6">
        {/*1st Content */}
        <div className="w-full h-full m-0 p-0"></div>
        {/*2nd Content */}
        <div className="w-full h-full m-0 p-0"></div>
      </div>
    </div>
  );
}

export default App;
