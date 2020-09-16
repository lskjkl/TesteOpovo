
import React from 'react';

const Home = props => {
    return (
        <div className="container">
            <div className="row ">
                <div className="container col-xs-12 col-sm-12 col-md-5 col-lg-6">
                    <div className=" text-jutify">
                        <p className="font-title-3 py-5"> <i class="fas fa-arrow-left"></i> voltar </p>
                        <p className="font-title-1">Vagas</p>
                        <h3 className="font-title-2" >Consultor de negócios - vendas publicidade</h3>

                        <p className="font-title-3">Requisitos</p>
                        <p className="font-text">Graduação em Marketing ou Publicidade e propaganda.
                        Experiência com Vendas. Conhecimentos de gestão de
                        indicadores, negociação e informática.</p>


                        <p className="font-title-3">Atividades</p>
                        <p className="font-text">Planejamento de vendas, visitas a clientes,
                        desenvolvimento de propostas comerciais e plano de
                        mídias, acompanhamentos de indicadores e eleboração de orçamentos.</p>

                        <p className="font-title-3">Perfil do candidato</p>
                        <p className="font-text">Comunicativo, negociador, ágil e responsável.
                        </p>

                        <p className="font-title-3">Horáio de trabalho</p>
                        <p className="font-text ">8 - 18h
                        </p>
                    </div>


                    <div className="container div-form-color col-xs-12 col-sm-16 col-md-12 col-lg-12 mt-5">
                        <div className="div-form-2">
                            <span className="form-text col py-5">Enviar currículo</span>
                            <form>
                                <div className="row">
                                    <div className="col px-5 form-text-color mt-2">
                                        <label for="inputNome">Nome</label>
                                        <input type="text" className="input-1 mt-2" id="inputNome"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col px-5 form-text-color mt-2">
                                        <label for="inputEmail">Email</label>
                                        <input type="text" className="input-1 mt-2" id="inputEmail"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col px-5 form-text-color mt-2">
                                        <label for="inputCep">Cep</label>
                                        <input type="text" className="input-1 mt-2" id="inputCep"></input>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col px-5 form-text-color mt-2">
                                        <label for="inputEndereco">Endereço</label>
                                        <input type="text" className="input-1 px-5 mt-2" id="inputEndereco"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-5 px-5 form-text-color mt-2">
                                        <label for="inputNumero">Número</label>
                                        <input type="text" className="input-2" id="inputNumero" />
                                    </div>
                                    <div className="col-7 px-5 form-text-color mt-2">
                                        <label for="inputBairro">Bairro</label>
                                        <input type="text" className="input-2 mt-2" id="inputBairro" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-5 px-5 form-text-color mt-2">
                                        <label for="inputCidade">Cidade</label>
                                        <input type="text" className="input-2 mt-2" id="inputCidade" />
                                    </div>
                                    <div className="col-7 px-5 form-text-color mt-2">
                                        <label for="inputEstado">Estado</label>
                                        <input type="text" className="input-2 mt-2" id="inputEstado" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className=" col-md   px-5 form-text-color">
                                        <p className="form-text-2">Currículo</p>
                                        <button className=" btn btn-1 btn-primary">Anexar currículo</button>
                                    </div>
                                    <div className="col-md px-5 form-text-color ">
                                        <p className="form-text-3">Todos os campos são obrigatorios
                                        Tamanho máximo para upload - 10mb
                                       Tipo de arquivo: .pdf ou .doc</p>
                                    </div>
                                </div>
                                <div className="row py-5">
                                </div>
                            </form>
                        </div>

                        <div className="row">
                            <div className="col px-5">

                            </div>
                            <div className="col form-text-color py-5 text-right">
                                <button type="submit" className="btn btn-2 btn-primary">Enviar currículo</button>
                            </div>
                        </div>
                    </div>
                </div>

               
                    <div className="row">
                        <div className="col-xs">
                            <div className="col-xs " style={{ backgroundColor: "#314163", height: "1590px", widht: "290px", marginTop: "127px" }}>
                                <img className=" col-xs img-vaga " src="../images/vagas.png"></img>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div >


    );
}
export default Home;