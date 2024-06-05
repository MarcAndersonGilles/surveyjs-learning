import SurveyjsRenderJson from "@/components/survey-js/SurveyjsRenderJson"
import SurveyJsWrapper from "@/components/survey-js/SurveyjsWrapper"

function page() {
    return (
        <div className="h-full">
            {/* <SurveyJsWrapper /> */}
            <SurveyjsRenderJson />
        </div>
    )
}

export default page