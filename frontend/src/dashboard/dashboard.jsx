import React from 'react';

const Dashboard = ({jwt}) => {

    return (
        <div>
            <h1>Hello World!</h1>
            <div>Jwt value is {jwt}</div>
        </div>
    );
};

export default Dashboard;