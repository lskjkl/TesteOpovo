import React from 'react';

const About = props => {
    return (
        <div className='container'>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Lucas Daurte Colares</h1>
                    <p className="lead text-muted">Estudante de sistemas de informação, 19 anos</p>
                </div>
            </section>
            <h3 className='text-center'>Ferramentas utilizadas</h3>
            <div className="row">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">React</h2>
                            <p className="card-text">O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Bootstrap</h2>
                            <p className="card-text">Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Visual Studio Code</h2>
                            <p className="card-text">O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;