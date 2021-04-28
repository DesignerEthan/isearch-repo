import React from "react";

const ResultSingle = ({ result, favs, setFavs }) => {
  // handle on fav click to decide if I need to add to favs or remove
  function handleFav(e) {
    e.preventDefault();

    // add to fav
    let favData = [];

    let inFavs = false;

    // loop favs (this is also my remove func)
    favs.map((fav) => {
      // check if the current clicked item is in the loop - set to true if it is, skip it then load the rest of the items back in
      if (
        fav.collectionId == result.collectionId &&
        fav.trackId == result.trackId
      ) {
        inFavs = true;
      } else {
        // add original data back
        favData.push(fav);
      }
    });

    // if the current result is not in favs add it
    if (!inFavs) {
      favData.push(result);
    }

    setFavs(favData); // set the new fill list of favs again
  }

  // load button
  // check if its in the current fav list to decide if I need to show add or remove button
  const loadFavButton = () => {
    let check = false;
    favs.map((fav) => {
      if (
        fav.collectionId == result.collectionId &&
        fav.trackId == result.trackId
      ) {
        check = true;
      }
    });

    // if check is true load the remove text else show the add text - triggers the same func
    if (check) {
      return (
        <a href="#" className="favRemove" onClick={(e) => handleFav(e)}>
          Remove from Favourites
        </a>
      );
    } else {
      return (
        <a href="#" className="favAdd" onClick={(e) => handleFav(e)}>
          Add to Favourites
        </a>
      );
    }
  };

  return (
    <div className="singleResult">
      <img src={result.artworkUrl100} alt={result.trackName} />
      <h3>{result.trackName}</h3>
      <span>{result.artistName}</span>
      <span>
        <small>
          <strong>
            {result.kind} - {result.primaryGenreName}
          </strong>{" "}
          | {loadFavButton()}
        </small>
      </span>
      <a href={result.collectionViewUrl} target="_blank" className="viewLink">
        View
      </a>
      <div className="clearfix"></div>
    </div>
  );
};

export default ResultSingle;
