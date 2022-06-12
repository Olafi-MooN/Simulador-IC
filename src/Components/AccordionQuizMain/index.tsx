import React from "react";

export interface IAccordionQuizMainModel {
    title: string;
    children: JSX.Element;
}

const AccordionQuizMain: React.FC<IAccordionQuizMainModel> = ({title,children}) => {
    return <>
        <section className="accordion-action">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed title-questions" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            <h3>{title}</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <ul className="list-group list-group-flush accordion-body">
                            <li className="list-group-item">
                                {children}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export { AccordionQuizMain };