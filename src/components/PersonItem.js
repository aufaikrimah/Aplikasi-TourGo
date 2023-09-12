import dayjs from "dayjs";
import Swal from 'sweetalert2';

const PersonItem = ({ item }) => {

  const handleButtonClick = () => {
    Swal.fire({
      text: 'Silahkan login terlebih dahulu untuk dapat mulai memesan !',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  };
  
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={item?.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {item?.first_name} {item?.last_name}
          </h5>
          <p className="card-text">{item?.usia}</p>
          <p className="card-text">{item?.gender}</p>
          <p className="card-text">
            {dayjs(item?.date).format("DD MMMM YYYY")}
          </p>
          <h6 className="card-text">{item?.price}</h6>
          
        </div>
        <div>
              <button onClick={handleButtonClick} className="product-add-button">Add to Cart</button>
            </div>
      </div>
    </div>
  );
};

export default PersonItem;