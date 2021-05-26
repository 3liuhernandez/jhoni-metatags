import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import MetaTags from 'react-meta-tags';
import NewPage from './components/NewPage/NewPage';
import imagen_promo from './images/sumate_a_nuestro_equipo.jpg'

function App() {
  return (
    <>
      {/* <Helmet>
          <title>Buscamos Gente</title>
          <meta property="og:url" content="https://rrhh.balanz.com/aplicar/33" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Buscamos Desarrollador iOS" />
          <meta property="og:description" content="Entre sus principales responsabilidades se" />
          <meta property="og:image" content={imagen_promo} />
          
          <link rel="canonical" href="http://mysite.com/example" />
          </Helmet> */}
          <Helmet>
            <title>gomuf Es</title>
            <meta name="title" content="gomuf Es" />
            <meta name="description" content="esta es una descripcion" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://rrhh.balanz.com/aplicar/33" />
            <meta property="og:title" content="gomuf Es" />
            <meta property="og:description" content="esta es una descripcion" />
            <meta property="og:image" content={imagen_promo} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://rrhh.balanz.com/aplicar/33" />
            <meta property="twitter:title" content="gomuf Es" />
            <meta property="twitter:description" content="esta es una descripcion" />
            <meta property="twitter:image" content={imagen_promo} />

        </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <NewPage />
    </>
  );
}

export default App;
