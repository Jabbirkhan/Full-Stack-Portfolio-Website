import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { lazy, Suspense, useContext } from 'react';
import { Context } from './context/Context';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';

const Home = lazy(()=>import('./pages/Home'));
const About = lazy(()=>import('./pages/About'));
const ProjectList = lazy(()=>import('./pages/ProjectList'));
const Contact = lazy(()=>import('./pages/Contact'));
const ProjectDetail = lazy(()=>import('./pages/ProjectDetail'));
const NotFound = lazy(()=>import('./pages/NotFound'));
const VerifyEmail = lazy(() => import('./pages/verifyEmail'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const TermsOfService = lazy(() => import('./pages/termsOfService'));

const App = () => {

  const { authState } = useContext(Context);
  const loadingMessage = "Loading...";
  const location = useLocation();

  if(authState === 'checking'){
    return <Loader message="Checking authentication"/>
  }

  if(authState !== 'authenticated' && location.pathname !== '/login' && location.pathname !== '/forget-password' && location.pathname !== '/privacy-policy' && location.pathname !== '/terms-of-service'){
    return <Navigate to='/login' replace />
  }
  
  return (
    <div>
      <Navbar /> 
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader message={loadingMessage} />}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/projects' element={<ProjectList/>} />
          <Route path='/projects/:id' element={<ProjectDetail/>} />
          <Route path='/login' element={authState === 'authenticated' ? <Navigate to='/' replace /> : <Login/>} />
          <Route path='/verify-email' element={<VerifyEmail/>} />
          <Route path='/forget-password' element={<ForgetPassword/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-of-service' element={<TermsOfService/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App