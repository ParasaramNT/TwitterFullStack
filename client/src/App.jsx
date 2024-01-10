import "./App.css";
import Feed from "./Components/FeedPage/Feed";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Widgets from "./Components/Widgets/Widgets";

const App = () => {
  return (
    <div className="app">
      <SideNavBar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
