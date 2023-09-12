import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = (props) => {
  const [user, setUser] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const fetchData = async (props) => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get('http://127.0.0.1:8000/api/datauser')
        .then((response) => {
            setUser(response.data);
        }) 
    }

    useEffect(() => {
        if(!token) {
            navigate('/');
        }
        fetchData();
    }, []);

    return props.children;
  };
  

export default PrivateRoute;