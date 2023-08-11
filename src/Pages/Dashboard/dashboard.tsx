import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();

    const [user, setUser] = useState<any>();
    useEffect(() => {
        const token = localStorage.getItem("user")
        if (token) {
            setUser(jwtDecode(token))
            // console.log(jwtDecode(token));
        }

    }, [])

    const handleExit = (e: any) => {
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div style={{ marginTop: "150px" }}>
            {
                user &&
                <>
                    <h1>{user.userName}</h1>
                    <button onClick={handleExit}>خروج</button>
                </>

            }

        </div>
    )
}

export default Dashboard