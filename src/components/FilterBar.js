import { useState } from "react";

const FilterBar = ({
  genders,
  onNameFilter,
  onUsiaFilter,
  onGenderFilter,
  onPriceFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    usia: "",
    gender: "",
    price: "",
    from: "",
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
      case "usia":
        onUsiaFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
        case "price":
        onPriceFilter(value);
            break;
      case "from":
        onDateFilter(value, "from");
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="usia">Usia</label>
        <input
          type="text"
          className="form-control"
          id="usia"
          onChange={handleInput("usia")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="price">Harga</label>
        <input
          type="text"
          className="form-control"
          id="price"
          onChange={handleInput("price")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">Menjadi tour guide sejak</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
    </div>
  );
};

export default FilterBar;