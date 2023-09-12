import { useState } from "react";

import WisataItem from "../components/WisataItem";
import { data } from "../components/back/WIS_DATA";
import SearchBar from "../components/SearchBar";
import NavbarComp from "../components/NavbarComp";
import { Container } from "react-bootstrap";


function App() {
  const [allData, setData] = useState(data);


  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div>
      <NavbarComp/>
      <div className="wisata">
      <Container>
      
      <SearchBar
        onNameFilter={handleFilterName}
      />
   
    <div>
      <div>
        {allData.map((item) => (
          <WisataItem item={item} key={item.id} />
        ))}
      </div>
    </div>
      </Container>
       
      
    </div>
    </div>
    
    
  );
}

export default App;