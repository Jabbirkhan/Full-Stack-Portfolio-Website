import { lazy, Suspense, useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Context } from "./context/Context";
import { ToastContainer, toast } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Login from './pages/Login';

const AddProject = lazy(() => import('./pages/AddProject'));
const UpdateProject = lazy(() => import('./pages/UpdateProject'));
const ProjectList = lazy(() => import('./pages/ProjectList'));
const AddAbout = lazy(() => import('./pages/AddAbout'));
const NotFound = lazy(() => import('./pages/notFound'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));

const App = () => {

  const { authState } = useContext(Context);
  
  const location = useLocation();

  if (authState === 'checking') {
    return <Loader />
  }

  if (authState === 'unauthenticated' && location.pathname !== "/login" && location.pathname !== '/forget-password') {
    return <Navigate to='/login' replace />
  }
  return (
    <section aria-label='main-body'>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<AddProject />} />
            <Route path="/projectlist" element={<ProjectList />} />
            <Route path="/updateproject/:id" element={<UpdateProject />} />
            <Route path="/addAbout" element={<AddAbout />} />
            <Route path="/login" element={authState === 'authenticated' ? <Navigate to='/' replace /> : <Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </section>
  )
}

export default App
