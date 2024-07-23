import './App.css';
import "./styles/shared/buttons.css";
import "./styles/shared/badges.css";
import "./styles/game_details.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Logo from "./components/Logo";
// import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <SearchBar />
        <div className="buttonWrapper">
          <Button
            text={<FontAwesomeIcon icon={faInfo} />}
            className="btn_icon btn_icon--info"
          />
          <Button
            text={<FontAwesomeIcon icon={faUserAstronaut} />}
            className="btn_icon btn_icon--author"
          />
        </div>
      </Header>
      {/* <div className="container__main">
        <Lists path={location.pathname} />
        <main className="container__main--gameslist">
          {modalInfo.show && <ModalInfo text={modalInfo.text} />}
          <RouterConfig />
        </main>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
