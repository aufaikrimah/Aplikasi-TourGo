import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from 'axios';
import { Link } from "react-router-dom";
import FilterBar from "./dataws/FilterBar";
import Navbarws from "./Navbarws";

import spinnerLogo from "./dataws/logo-warna.png";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const Guidews = ({ product }) =>{

  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchProducts()
  },[])

  const fetchProducts = async () => {
      await axios.get(`http://127.0.0.1:8000/api/products`).then(({data})=>{
        setProducts(data);
        setIsLoading(false);
      })
  }

  
  const generateGenderDataForDropdown = () => {
    return [...new Set(products.map((product) => product.gender))];
  };

  const handleFilterName = (name) => {
    const filteredData = products.filter((product) => {
      const Name = `${product.name}`;
      if (Name.toLowerCase().includes(name.toLowerCase())) {
        return product;
      }
    });

    setProducts(filteredData);
  };

  const handleFilterUsia = (umur) => {
    const filteredData = products.filter((product) => {
      if (product.umur.toLowerCase().includes(umur.toLowerCase())) {
        return product;
      }
    });

    setProducts(filteredData);
  };

  const handleFilterGender = (gender) => {
    const filteredData = products.filter((product) => {
      if (product.gender === gender) {
        return product;
      }
    });

    setProducts(filteredData);
  };

  const handleFilterPrice = (price) => {
    const filteredData = products.filter((product) => {
      if (product.price.toLowerCase().includes(price.toLowerCase())) {
        return product;
      }
    });

    setProducts(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = products.filter((product) => {
      if (field === "from" && dayjs(product.date).isSameOrAfter(dayjs(date))) {
        return product;
      }
    });

    setProducts(filteredData);
  };

 

  return (
    <div className="products">
      <Navbarws/>
      {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
        <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            genders={generateGenderDataForDropdown()}
            onNameFilter={handleFilterName}
            onUsiaFilter={handleFilterUsia}
            onGenderFilter={handleFilterGender}
            onPriceFilter={handleFilterPrice}
            onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-4">
          <div className="product-grid">

      {products.map((product) => (
        <div className="product-item" key={product.id_tourguide}>
          <div className="card my-2">
          <img src={`http://127.0.0.1:8000/storage/${product.photo}`} alt="" height={260} width={260} />
        <div className="card-body">
          <h5 className="card-text">{product.status}</h5>
          <h1 className="card-title">
                {product.name}
          </h1>
          <p className="card-text">Usia : {product.umur}</p>
          <p className="card-text">{product.gender}</p>
          <p className="card-text"> Sejak : {dayjs(product.date).format("DD MMMM YYYY")}
          </p>
          <h6 className="card-text">Rp.{product.price}/hari</h6>
          
        </div>
        <Link to={`/products/${product.id_tourguide}`} className="link">Lihat Detail</Link>
        
        </div>
        </div>
    ))}
  </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
    
  );
}

export default Guidews;