import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({ searchTerm: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
      }}
    >
      <label class="" htmlFor="search">
        Search Term
      </label>
      <input
        id="search"
        type="text"
        value={state.searchTerm}
        onChange={(e) => {
          setState({ searchTerm: e.target.value });
        }}
      />
      <button>Submit</button>

      <br />
      <span>{state.searchTerm}</span>
    </form>
  );
};

export default Form;
