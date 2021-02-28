import React from 'react';

const Home = (props) => {
    const home = props.home
    // let totalPopulation = 0;
    // for (let i = 0; i < home.length; i++) {
    //     const country = home[i];
    //     totalPopulation = totalPopulation + country.population
    // }
    const totalPopulation = home.reduce((total, country) => total + country.population, 0)
    return (
        <div>
            <h5>This is home : {home.length}</h5>
            <p>Total population : {totalPopulation}</p>
        </div>
    );
};

export default Home;