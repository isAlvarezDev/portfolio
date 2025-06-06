import {
  Header,
  Main,
  Footer,
  PageTransition,
  StairTransition,
} from "./components/";
import { changeLangAttr, changeMetaDescr } from "./utils";

import translations from './components/i18n/translations.json'

function App() {
  const currentLang = navigator.language.includes('es') ? 'es' : 'en' 
  changeLangAttr(currentLang)
  changeMetaDescr(currentLang)
  return (
    <>
      <StairTransition></StairTransition>
      <PageTransition>
        <Header translations={translations} currentLang={currentLang} key='header' />
        <Main translations={translations} currentLang={currentLang} key='main' />
        <Footer translations={translations} currentLang={currentLang} key='footer' />
      </PageTransition>
    </>
  );
}

export default App;