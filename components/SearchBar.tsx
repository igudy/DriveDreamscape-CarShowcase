"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form>
      <div className="searhbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
