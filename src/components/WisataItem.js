import Swal from 'sweetalert2';

const WisataItem = ({ item }) => {

  const handleButtonClick = () => {
    Swal.fire({
      text: 'Silahkan login terlebih dahulu untuk dapat mulai memesan !',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  };

    return (
      <div className="wisata-item">
        <div >
          <img src={item?.image} className="card-img-top" alt="" />
            
          </div>
          <div>
                <button onClick={handleButtonClick} className="wisata-add-button">Add to Cart</button>
              </div>
        </div>
    
    );
  };
  
  export default WisataItem;