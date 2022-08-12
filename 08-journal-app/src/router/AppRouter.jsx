import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
 
  const { status }  = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoute />} />
      )}

    <Route path='/*' element={<Navigate to='/auth/login'/>}/>

      {/* <Route path='/auth/*' element={ <AuthRoute/> }/>
    <Route path='/*' element={ <JournalRoutes/> }/> */}
    </Routes>
  );
};
