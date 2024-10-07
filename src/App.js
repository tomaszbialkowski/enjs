import "./styles/global/system.css";
// import "./styles/global/App.css";
import "./styles/global/layout.css";
import "./styles/global/footer.css";
import "./styles/shared/buttons.css";
import "./styles/shared/badges.css";
import "./styles/global/game_details.css";
import "./styles/global/main.css";
import "./styles/global/media-max_767.css";
import "./styles/global/media-min_768.css";
import "./styles/global/media-min_1024.css";

import RouterConfig from "./router/RouterConfig";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Logo from "./components/Logo";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import Lists from "./components/Lists";
import Footer from "./components/Footer";
import ModalInfo from "./components/ModalInfo";

function App() {
  const modalInfo = useSelector((state) => state.info);
  const location = useLocation();

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
      <div className="container__main">
        <Lists path={location.pathname} />
        <main className="container__main--gameslist">
          {modalInfo.show && <ModalInfo text={modalInfo.text} />}
          <RouterConfig />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
