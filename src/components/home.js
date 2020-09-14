
import React from 'react';

const Home = props => {
    return (

        <div className="container">

            <section className="jumbotron text-center bg-light">
                <div className="container">
                    <h2 className="jumbotron-heading">TesteOpovo</h2>
                    <p className="lead text-muted">Página web feita para teste de aprediz front end.</p>
                </div>
            </section>

            <div className="card text-white bg-secondary my-5 py-4 text-center bg-info">
                <div className="card-body">
                    <p className="text-white m-0">Página web responsiva feita com React e Bootstrap.</p>
                </div>
            </div>
        </div>

    );
}
export default Home;