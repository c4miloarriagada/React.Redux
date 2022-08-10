import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "../heroes/routes/PrivateRoutes";
import { PublicRoutes } from "../heroes/routes/PublicRoutes";

export const AppRouter = () => {
  return (
    <>
     <Routes>
           <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />

        {/*  <Route path='/*' element={<HeroesRoutes/>}/>    */}
      </Routes>
    </>
  );
};
