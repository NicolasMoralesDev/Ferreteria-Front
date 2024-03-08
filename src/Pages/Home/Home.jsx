import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
const LazyProductsCarousel = lazy(() => import('../../components/ProductsCarousel'));
const LazyProductsHome = lazy(() => import('../../components/ProductsHome/ProductsHome'));
const LazyUsersProHome = lazy(() => import('../../components/CarouselUsersPro/CarouselUsersPro'));
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';
import '../../App.css';
import Loading from '../../components/Loading/Loading';
import { Toaster } from 'react-hot-toast';
import ReactWhatsappButton from "react-whatsapp-button";



export default function Home() {
  return (
    <>
      <Helmet className="App">
        <meta charSet='utf-8' />
        <title>Te lo LLevo | Inicio</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name="description" content="Bienvenido a Te lo llevo! Una web con los mejores precios en del mercado." />
      </Helmet>
      <Navbar />
      <main className='main-conteiner App'>
        <Suspense fallback={<Loading />}>
          <LazyProductsCarousel />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <LazyProductsHome />
        </Suspense>
        <Suspense fallback={<Loading/>}>
          <LazyUsersProHome/>
        </Suspense>
        <ReactWhatsappButton 
        countryCode="54"
        phoneNumber="2364380471"
        />
      </main>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Footer />
    </>
  );
}
