import { useState } from "react";

import WisataItem from "./dataws/WisataItem";
import { data } from "./dataws/WIS_DATA";
import SearchBar from "./dataws/SearchBar";
import Navbarws from "./Navbarws";
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
      <Navbarws/>
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