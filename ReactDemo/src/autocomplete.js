import React, { useEffect, useState } from "react";
import classnames from "classnames";
// you should import `lodash` as a whole module
import lodash from "lodash";
import axios from "axios";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({ onSelectItem }) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const items = await fetch(`${ITEMS_API_URL}?q=${query}`);
      setItems(items);
    };
    let timeoutId;
    if (query) {
      timeoutId = setTimeout(fetchItems, DEBOUNCE_DELAY);
    }

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="wrapper">
      <div className={`control ${isLoading ? "is-loading" : ""}`}>
        <input
          type="text"
          className="input"
          value={query}
          onChange={onQueryChange}
        />
      </div>
      {items.length > 0 && (
        <div className="list is-hoverable">
          {items.map((item) => (
            <a class="list-item" onClick={() => onSelectItem(item)}>
              item
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
