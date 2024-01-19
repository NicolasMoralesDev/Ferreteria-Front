import { Helmet } from 'react-helmet';
import ProductsCarousel from '../../components/ProductsCarousel';
import ProductsHome from '../../components/ProductsHome/ProductsHome';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>El corralon | Inicio</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name="description" content="Bienvenido a Corralon Online! Una web con los mejores precios en del mercado." />
      </Helmet>

        <main className='main-conteiner'>
          <ProductsCarousel/>
          <ProductsHome/>
        </main>

    </>
  );
}
