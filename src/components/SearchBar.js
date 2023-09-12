import { useState } from "react";

const SearchBar = ({
  onNameFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
    }
  };

  return (
    <div className="row my-5">
        <label htmlFor="name"></label>
        <input
          type="text"
          className="form-control"
          placeholder="Cari tujuan wisata"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

  );
};

export default SearchBar;