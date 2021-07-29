import React, { useEffect, useState } from "react";

const CustomSearch = ({ render: ResultView, ...customSearchProps }) => {
  const [state, setState] = useState({
    isSearching: false,
    data: null,
    error: null,
  });

  const onCustomSearch = (e) => {
    if (!state.isSearching) {
      setState({ ...state, isSearching: true });
    }
  };

  return (
    <>
      <div className={"custom-search-button"}>
        <button onClick={onCustomSearch}></button>
      </div>
      {state.isSearching && (
        <div className="custom-search-loader">...Loading</div>
      )}
      {!state.isSearching && !state.error && state.data && (
        <ResultView className="custom-search-result-view" />
      )}
      {state.error && <div className="custom-search-error">Error</div>}
    </>
  );
};

export default CustomSearch;

const useCustomSearchWithRedux = ({ setDataHandler }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isSearching) {
      // DO ASYNC SEARCH
      // setIsSearching to false
      // Dispatch action to setData
    }
  }, [isSearching]);
};
