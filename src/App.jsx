import { Route, Routes } from "react-router-dom";
import NavigationElement from "./component/NavigationElement";
import HomePages from "./pages/HomePages";
import NavFooter from "./component/NavFooter";

function App() {
  return (
    <div>
      <NavigationElement />
      <Routes>
        <Route path="/" Component={HomePages} />
      </Routes>
      <NavFooter />
    </div>
  );
}

export default App;
