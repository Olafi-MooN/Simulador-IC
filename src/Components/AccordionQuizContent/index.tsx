import React from "react";
import "./AccordionQuizContent.css";

export interface IAccordionQuizContentModel {
    title: string;
    response: string;
    id: any;
}

const AccordionQuizContent: React.FC<IAccordionQuizContentModel> = ({ title, response, id }) => {
    return <>
        <button className="button-accordion-quiz-content px-4" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseWidthExample" + id} aria-expanded="false" aria-controls={"collapseWidthExample" + id}>
            {title}
        </button>
        <div>
            <div className="collapse" id={"collapseWidthExample" + id}>
                <div className="description-accordion-quiz-content px-4">
                    {response}
                </div>
            </div>
        </div>
    </>
}

export { AccordionQuizContent };