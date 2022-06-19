import React from "react";

export interface IAccordionQuizMainModel {
    title: string;
    id: string;
    children: JSX.Element | JSX.Element[];
}

const AccordionQuizMain: React.FC<IAccordionQuizMainModel> = ({title, id, children}) => {
    return <>
        <section className="accordion-action m-2">
            <div className="accordion accordion-flush" id={title.replace("?", "")}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed title-questions" type="button"
                            data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false"
                            aria-controls={id}>
                            <h3>{title}</h3>
                        </button>
                    </h2>
                    <div id={id} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent={title.replace("?", "")}>
                        {children}
                    </div>
                </div>
            </div>
        </section>

    </>
}

export { AccordionQuizMain };