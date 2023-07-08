import React from 'react'
import { useSelector } from 'react-redux'
import  { useLocation, useNavigate} from "react-router-dom"
import QuestionsDisplay from './QuestionsDisplay'


const HomeMainbar = () => {

  // const user=1
      const user=useSelector((state)=>(state.currentUserReducer))

  // var questionsList=null
//     {_id:1,
//       upVotes:2,
//       downVotes:3,
//      noOfAnswers:2,
//      questionTitle:"What is a function",
//      questionBody:"It meant to be",
//      questionTags:["Javascript","R","Python"],
//      userPosted:"Balaji",
//      userId:1,
//      askedOn:"jan 1",
//      answer:[{
//       answerBody:"Answer",
//       userAnswered:'Susmitha',
//       answerdOn:"jan 2"
//      }]
// },
// { _id:2,
//   upVotes:2,
//   downVotes:3,
//  noOfAnswers:2,
//  questionTitle:"What is a function",
//  questionBody:"It meant to be",
//  questionTags:["Javascript","R","Python"],
//  userPosted:"Susmitha",
//  userId:1,
//  askedOn:"jan 1",
//  answer:[{
//   answerBody:"Answer",
//   userAnswered:'Balaji',
//   answerdOn:"jan 2"
//  }]
// }]

const location=useLocation()
const navigate=useNavigate()
const questionsList =useSelector((state) => state.questionsReducer)
// console.log(questionsList)

// const redirect=()=>{
  
// }

const checkAuth= ()=>{
  if(user===null){
  alert("Login or Signup to AskQuestion")
  navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ?<h1>Top Questions </h1>:<h1>All  Questions</h1>

        }
        <buttuon  onClick={checkAuth} className='ask-btn'>Ask Question</buttuon>
      </div>
      <div>
        {
        questionsList.data ===null ? <h1>Loading...</h1> :
        <>
           
          <p>{questionsList.data.length} questions</p>

         
        </>
        }
         
          { questionsList.data !==null ?questionsList.data.map((question)=>(
              <QuestionsDisplay key={question._id} question={question}/>
           )):<p>No questions</p>
          }
        
         
      </div>
    </div>
  )
}

export default HomeMainbar