import React, { useState, useEffect } from "react";

// import css
import "./css/style.css";

// Import components
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  // set constants
  const [searchTerm, setSearchTerm] = useState("Post Malone"); // defaults to Post Malone
  const [searchMedia, setSearchMedia] = useState("all"); // defaults to all

  // Manage data
  const [isDataSet, setIsDataSet] = useState(false);
  const [apiData, setApiData] = useState("");

  // Manage favs + not saving to a local storage or file as its not a requirment for this task - fav resets on every reload
  const [favs, setFavs] = useState([]);
  const [showFavs, setShowFavs] = useState(false);

  // get json feed and save states
  useEffect(() => {
    if (!isDataSet) {
      // if data is false trigger the fetch

      // build api url using saved state info
      let endPoint = "/search?term=" + searchTerm + "&media=" + searchMedia;

      // fetch the data
      fetch(endPoint)
        .then((res) => res.json())
        .then((data) => setApiData(data.results))
        .then(() => setIsDataSet(true));
    }
  }, [isDataSet, setIsDataSet, setApiData, searchTerm, searchMedia]);

  // simple toggle between search and fav list view
  // I could have used a browser route however for a simple toggle I figured its easier to just switch the data
  const loadView = () => {
    if (!showFavs) {
      return (
        <div>
          <a
            href="#"
            className="viewToggle"
            onClick={(e) => handleViewSwitch(e)}
          >
            View Your Favourites
          </a>
          <Results
            isDataSet={isDataSet}
            apiData={apiData}
            favs={favs}
            setFavs={setFavs}
          />
        </div>
      );
    } else {
      return (
        <div>
          <a
            href="#"
            className="viewToggle"
            onClick={(e) => handleViewSwitch(e)}
          >
            Go Back to Search
          </a>
          <Results
            isDataSet={isDataSet}
            apiData={favs} // switch data here
            favs={favs}
            setFavs={setFavs}
          />
        </div>
      );
    }
  };

  // Handle the toggle button click between search and favs view
  function handleViewSwitch(e) {
    e.preventDefault(); // stop default page load

    // if showfavs is true toggle to false and if false toggle to true
    if (showFavs) {
      setShowFavs(false);
    } else {
      setShowFavs(true);
    }
  }

  return (
    <div className="wrapper">
      <Form
        setIsDataSet={setIsDataSet}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMedia={searchMedia}
        setSearchMedia={setSearchMedia}
        setShowFavs={setShowFavs}
      />

      {loadView()}
    </div>
  );
}

export default App;
