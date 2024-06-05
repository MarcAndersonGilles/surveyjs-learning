'use client'
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

export function SurveyCreatorWidget() {
    const creator = new SurveyCreator(creatorOptions);
    console.log(creator)
    creator.saveSurveyFunc = (saveNo: any, callback: any) => {
        console.log(saveNo)
        window.localStorage.setItem('survey-json', creator.text)
        callback(saveNo, true)

    }
    return (
        <SurveyCreatorComponent creator={creator} />
    )
}

function SurveyJsWrapper() {

    return (
        <div className="h-full"><SurveyCreatorWidget /></div>
    )
}

export default SurveyJsWrapper