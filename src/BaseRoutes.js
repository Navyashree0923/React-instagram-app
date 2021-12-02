import { Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import Basichome from "./pages/Basichome";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Like from "./pages/Like";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default function BaseRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <Basichome />
          </BaseLayout>
        }
      />
      <Route
        path="/home"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        path="/search"
        element={
          <BaseLayout>
            <Search />
          </BaseLayout>
        }
      />
      <Route
        path="/Like"
        element={
          <BaseLayout>
            <Like />
          </BaseLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <BaseLayout>
            <Profile />
          </BaseLayout>
        }
      />
      <Route
        path="/add"
        element={
          <BaseLayout>
            <Add/>
          </BaseLayout>
        }
      />
    </Routes>
  );
}