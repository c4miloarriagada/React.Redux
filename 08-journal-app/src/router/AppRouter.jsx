import { Route , Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
   <Routes>
    
    <Route path='/auth/*' element={ <AuthRoute/> }/>
    <Route path='/*' element={ <JournalRoutes/> }/>

   </Routes>
  )
}
