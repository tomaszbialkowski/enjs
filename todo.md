- w GameDetails na końcu jest jakaś wiocha, powielone <div>&nbsp;</div>
- w infoModal, gamedetails i gdzies jeszcze usunałęś tablice zależności
- dziwne przeladowanie kolejnosci kart po zniknieciu modala
- poprawić wysokosc kart w SearchResult zeby była taka sama jak w listach - TO CHYBA NIE JEST DOBRY POMYSŁ
- poprawić css dla game details
- poprawić strukture głównej strony: scroll, kilka kart w tym samym rzedzie
- loader
- rwd

wypełnienie całej strony cartami

.container\_\_main--gameslist {
height: 100vh;
overflow-y: scroll;
scrollbar-width: none;
scroll-behavior: smooth;
width: 70vw;
display: flex;
/_ flex-direction: column; _/
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
gap: 24px;
padding-left: 24px;
padding-top: 24px;
}

///////////////////////////////////
zooomowanie obrazka
.container_main--game a {
width: 200px;
height: auto;
overflow: hidden;
position: relative;
border-radius: 32px;
margin-top: var(--space_sm);
}
.container_main--game a img,
.imageWrapper img {
width: 100%;
height: 100%;
transition: transform 0.2s ease-in-out;
}

.game_poster--thumb {
position: relative;
z-index: 0;
margin: 0 auto;
}

.imageWrapper {
width: 200px;
height: 300;
overflow: hidden;
position: relative;
border-radius: 32px;
margin-top: var(--space_sm);
}
