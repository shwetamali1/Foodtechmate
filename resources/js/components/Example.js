import React, { useState, useEffect } from 'react';
import { getControllerTest, getTestCall } from './services/sample';

function Example() {
const [checkres, setServerres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTestCall();
            setServerres(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
<div className="card-body">
                            <p>I'm an example component!</p>
                            {checkres.success ? (
                                <div>
                                    <p>Data from server:</p>
                                    <ul>
                                        {Object.entries(checkres.data).map(([key, value]) => (
                                            <li key={key}>
                                                <strong>{key}:</strong> {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
