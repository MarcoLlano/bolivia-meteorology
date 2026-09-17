import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home
  from "./pages/Home";

import Department
  from "./pages/Department";

import "./styles/main.css";
import "./styles/links.css";
import "./styles/department.css";
import "./styles/currentWeather.css";
import "./styles/forecast.css";
import "./styles/buttons.css";
import "./styles/details.css";
import "./styles/card.css";
import "./styles/grid.css";
import "./styles/content.css";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/departamento/:departmentId"
          element={<Department />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;