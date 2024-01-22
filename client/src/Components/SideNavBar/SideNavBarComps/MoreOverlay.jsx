import React from 'react';
import axios from 'axios';
import "./MoreOverlay.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const MoreOverlay = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            const response = await axios.post("https://twitter-backend-gbfe.onrender.com/api/logoff", {}, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            // Additional logic after successful logoff
            Cookies.remove('tokencookie')
            console.log("logoff successful")
        } catch (err) {
            console.error(err);
            console.log(err.message);
        }
        navigate("/signin")
    };

    return (
        <div className='moreOverlay'>
            <div className='overlayItem' onClick={handleClick}>Logoff</div>
        </div>
    );
};

export default MoreOverlay;
