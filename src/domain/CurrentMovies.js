

const addMovieToCurrentList = async (movie) => {
    /*const current = currentSeries;
    current.push(serie);*/
    /* --> envoie au store */ setCurrentSeries([...current]);
    /* --> envoie en BDD */ addToDB(current);
} 