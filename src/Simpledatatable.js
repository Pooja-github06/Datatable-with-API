import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from './ThemeContext'; // Import the custom hook

const SimpleDataTable = () => {
    const [data, setData] = useState([]);
    const { theme, toggleTheme } = useTheme(); // Use theme context

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.restful-api.dev/objects');
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={theme} style={{ padding: "20px" }}>
            <h4>DataTable with API</h4>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SimpleDataTable;
