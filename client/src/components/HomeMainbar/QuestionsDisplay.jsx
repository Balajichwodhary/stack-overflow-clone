import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './index.css'


const QuestionsDisplay = ({question}) => {

    const currquestion=question
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{currquestion.upVote.length-currquestion.downVote.length}</p>
            <p>Votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{currquestion.noOfAnswers}</p>
            <p>answers</p>
        </div>

        <div className='display-questions-details'>
            <Link to={`/Questions/${currquestion._id}`} className='question-title-link'>{currquestion.questionTitle}</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                   {
                    currquestion.questionTags.map((tag)=> (
                        <p key={tag}>{tag}</p>
                    ))
                   }
                </div>
                <p className='display-time'>
                     asked {moment(question.askedOn).fromNow()} {question.userPosted}
                </p>
            </div>
        </div>
    </div>
  )
}

export default QuestionsDisplay