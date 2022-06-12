import React from "react";

export interface IAccordionQuizContentModel {
    title: string;
    response: string;
}

const AccordionQuizContent: React.FC<IAccordionQuizContentModel> = ({title,response}) => {
    return <>
        {/* <section className="accordion-action">
            <div className="accordion accordion-flush" id="qualquercoisa">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="bosta">
                        <button className="accordion-button collapsed title-questions" type="button"
                            data-bs-toggle="collapse" data-bs-target="#coco" aria-expanded="false"
                            aria-controls="coco">
                            <h3>{title}</h3>
                        </button>
                    </h2>
                    <div id="coco" className="accordion-collapse collapse"
                        aria-labelledby="bosta" data-bs-parent="#qualquercoisa">
                        <ul className="list-group list-group-flush accordion-body">
                            <li className="list-group-item">
                                {response}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="accordion-action">
            <div className="accordion accordion-flush" id={"target"}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={title+"labelledby"}>
                        <button className="accordion-button collapsed title-questions" type="button"
                            data-bs-toggle="collapse" data-bs-target={title+"target"} aria-expanded="false"
                            aria-controls={title+"target"}>
                            <h3>{title}</h3>
                        </button>
                    </h2>
                    <div id={title+"target"} className="accordion-collapse collapse"
                        aria-labelledby={title+"labelledby"} data-bs-parent={"target"}>
                        <ul className="list-group list-group-flush accordion-body">
                            <li className="list-group-item">
                                {response}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export { AccordionQuizContent };