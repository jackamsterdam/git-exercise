document.onreadystatechange = function() {
    debugger
    if (document.readyState === "complete") {
        createMoviewBox();
    }
}

function createMoviewBox() {
    // movie box main container
    let mainContainer = document.createElement('div');
    mainContainer.className = 'movies-container';
    document.body.appendChild(mainContainer)

    // create 4 movies
    let moview1 = createMoview();
    let moview2 = createMoview();
    let moview3 = createMoview();
    let moview4 = createMoview();



    // append the movies to the main container
    mainContainer.appendChild(moview1);
    mainContainer.appendChild(moview2);
    mainContainer.appendChild(moview3);
    mainContainer.appendChild(moview4);
}

function createMoview(mainContainer) {
    // moview box creation
    let moview = document.createElement('div');
    moview.className = 'movie';

    // first child
    var moviewImg = document.createElement("IMG");
    moviewImg.setAttribute("src", "prettyWoman.PNG");
    moviewImg.className = 'movie-image';

    // append the moviewImg to moview  as a direct child
    moview.appendChild(moviewImg);

    // second child
    const anchor = document.createElement('a');
    anchor.href = 'http://google.com';
    anchor.className = 'play-button';

    // image element creation
    var playImg = document.createElement("IMG");
    playImg.setAttribute("src", "play.png");
    playImg.className = 'play-image';

    // append the play image to a moview as a direct child
    anchor.appendChild(playImg);

    // append the anchor to moview  as a direct child
    moview.appendChild(anchor);

    return moview;
}