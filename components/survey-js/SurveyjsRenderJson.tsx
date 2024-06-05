"use client"
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import React, { useCallback } from 'react'

const surveyJson = {
    "title": "A random form",
    "description": "It is was it is",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question1",
        "title": "Pick one animal",
        "isRequired": true,
        "choices": [
         {
          "value": "Image 1",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "Image 2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "Image 3",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "Image 4",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         }
        ],
        "imageFit": "cover"
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Who is your favorite celebrity",
        "isRequired": true
       },
       {
        "type": "file",
        "name": "question3",
        "title": "Add a file of your choice"
       },
       {
        "type": "checkbox",
        "name": "question4",
        "title": "Pick on of the items",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Chocolate"
         },
         {
          "value": "Item 2",
          "text": "Apple"
         },
         {
          "value": "Item 3",
          "text": "Orange"
         }
        ]
       },
       {
        "type": "text",
        "name": "question5",
        "title": "What is on your mind?"
       },
       {
        "type": "boolean",
        "name": "question7",
        "title": "Do you think nvidia will you up or not",
        "isRequired": true
       },
       {
        "type": "multipletext",
        "name": "question12",
        "isRequired": true,
        "items": [
         {
          "name": "text1",
          "title": "DO it"
         },
         {
          "name": "text2",
          "title": "Or not"
         }
        ]
       }
      ]
     }
    ]
   }
function SurveyjsRenderJson() {

    const survey = new Model(surveyJson);

    const surveyComplete = useCallback((survey: any) => {
        if (survey === undefined) {
            return
        }
        console.log(survey)
        const userId = '1sa32'
        survey.setValue('userId', userId)
        const formDataJson = JSON.stringify(survey.data)
        alert('Form was completed' + formDataJson)
        //the call a fetch post to insert the data

    }, [])

    survey.onComplete.add(surveyComplete)

    return (
        <div className="h-full"><Survey model={survey} /></div>
    )
}

export default SurveyjsRenderJson