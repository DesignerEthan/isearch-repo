import React from "react";

import ResultSingle from "./ResultSingle";

const Results = ({ isDataSet, apiData, favs, setFavs }) => {
  // make sure we have our data before we try to loop it
  const loadData = () => {
    if (isDataSet && apiData) {
      // if empty data -
      if (!apiData.length) {
        return "No Results";
      }

      // loop the data we do have
      let loopData = apiData.map((result, index) => {
        return (
          <ResultSingle
            key={index + "-" + result.trackId}
            result={result}
            favs={favs}
            setFavs={setFavs}
          />
        );
      });

      return loopData;
    } else {
      return "Loading"; // display loading text while the fetch happens
    }
  };

  return <div>{loadData()}</div>;
};

export default Results;
