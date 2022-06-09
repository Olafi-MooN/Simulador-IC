import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Quiz } from "../Pages/Quiz";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:id" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router };
