import React from "react";

export interface IAccordionQuizContentModel {
    title: string;
    response: string;
    id:any;
}

const AccordionQuizContent: React.FC<IAccordionQuizContentModel> = ({title,response, id}) => {
    return <>
        <section className="accordion-action m-0 p-0">
            <div className="accordion accordion-flush" id={title.replace("?", "")+id}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={title.replace("?", "")+id+"labelledby"}>
                        <button className="accordion-button collapsed title-questions" type="button"
                            data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false"
                            aria-controls={id}>
                            <p className="questions">{title}</p>
                        </button>
                    </h2>
                    <div id={id} className="accordion-collapse collapse"
                        aria-labelledby={title.replace("?", "")+id+"labelledby"} data-bs-parent={"#"+title.replace("?", "")+id}>
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