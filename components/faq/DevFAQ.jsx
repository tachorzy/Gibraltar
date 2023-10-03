import { devFAQContent } from '../../utils/faqdata.jsx'

export default function DevFAQ(){
    return(<div>
      {Array.from(devFAQContent.entries()).map(([devFAQQuestions, devFAQParagraph]) => {
        return(
        <details key={devFAQQuestions}>
          <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 ml-16 cursor-pointer"}>
          {devFAQQuestions}
          </summary>
          <div className={"text-stone-700 text-xl ml-24 mb-7 w-1/2 leading-relaxed"}>
            {devFAQParagraph}
          </div>
        </details>
        )
      })}
    </div>)
  }
  
  