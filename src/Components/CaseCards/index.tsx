import React from "react";
import { Link } from "react-router-dom";

export interface ICaseCardsModel {
  id: string | number;
  title: string;
  description: string;
  scenery: string;
}

const CaseCards: React.FC<ICaseCardsModel> = ({ description, id, scenery, title }) => {
  return (
    <>
      <div className="card-caso d-flex justify-content-between" key={id}>
        <img src="img/img-caso.png" alt="" className="image-caso" />
        <div className="info-caso d-flex flex-column justify-content-start align-self-center">
          <h3 className="title-caso">
            {title}
          </h3>
          <h4 className="text-caso">
            {description}
          </h4>
          <h6 className="text-caso-1">
            {scenery}
          </h6>
        </div>
        <Link to={`quiz/${id}`} className="select-caso d-flex justify-content-center align-items-center flex-column">
          <i className="bi bi-arrow-right-circle-fill icon-enter-caso"></i>
          <p className="text-enter-caso">Entrar</p>
        </Link>
      </div>
    </>
  )
}

export { CaseCards };