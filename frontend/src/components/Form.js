import React from "react";

const Form = ({
  setIsDataSet,
  searchTerm,
  setSearchTerm,
  setSearchMedia,
  setShowFavs,
}) => {
  // on input search change update the term state
  function handleTermChange(e) {
    setSearchTerm(e.target.value);
  }

  // on input search change update the term state
  function handleMediaChange(e) {
    setSearchMedia(e.target.value);
  }

  // on setup reset to isDataSet state to false which will trigger the useEffect to get a fresh fetch
  function handleSubmit(e) {
    e.preventDefault();
    setIsDataSet(false);
    setShowFavs(false); // make sure on new search if you viewing favs it sets you back to search view
  }

  // frontend - form with input and select field
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleTermChange(e)}
        />
        <select name="media" onChange={(e) => handleMediaChange(e)}>
          <option value="all">All</option>
          <option value="audiobook">Audio Book</option>
          <option value="ebook">eBook</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="musicVideo">Music Video</option>
          <option value="podcast">Podcast</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
        </select>
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};

export default Form;
