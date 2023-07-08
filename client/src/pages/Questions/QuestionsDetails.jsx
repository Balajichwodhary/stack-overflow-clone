import React ,{useState} from 'react'
import { useParams,  useNavigate ,useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import copy from "copy-to-clipboard"

import './QuestionDetails.css'
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer';
import { postAnswer,deleteQuestion,voteQuestion }  from '../../actions/askQuestion';


const QuestionsDetails = () => {

    const {id}=useParams();
    // console.log(id)
    const questionsList =useSelector((state) => state.questionsReducer)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation()
    const url='http://localhost:3000'
    
    const [answer,setAnswer]=useState('')
    const User=useSelector((state=>(state.currentUserReducer)));

    
    const hadlePostAns=(e,answerLength)=>{
        e.preventDefault()
        if(User==null){
            alert('Login or SignUp to answer a Question')
            navigate('/Auth')
        }else{
            if(answer===''){
                alert('Enter an answer before submitting')
                
            }
            
            else{
                // console.log(id,answerLength,answer,User.result.name)
                
                dispatch(postAnswer({id,noOfAnswers:(answerLength+1),answerBody:answer,userAnswered : User?.result.name,userId:User?.result._id}))
                setAnswer(" ")
            }
        }
    }
     
     const handleShare=()=>{
        copy(url+location.pathname)
        alert("url copied: " + url+location.pathname )
     }

     const handelDelete=()=>{
        dispatch(deleteQuestion(id,navigate))
     }

     const handleUpvote=()=>{
        
          dispatch(voteQuestion(id,'upVote',User.result._id))
     }


     const handleDownvote=()=>{
        
          dispatch(voteQuestion(id,'downVote',User.result._id))
      
     }


    // const user=1


//     var questionsList=[
//       {_id:'1',
//         upVotes:2,
//         downVotes:3,
//        noOfAnswers:2,
//        questionTitle:"What is a function",
//        questionBody:"It meant to be",
//        questionTags:["Javascript","R","Python"],
//        userPosted:"Balaji",
//        userId:1,
//        askedOn:"jan 1",
//        answer:[{
//         answerBody:"Answer",
//         userAnswered:'Susmitha',
//         answerdOn:"jan 2",
//         userId:2
//        }]
//   },
//   { _id:2,
//     upVotes:2,
//     downVotes:3,
//    noOfAnswers:2,
//    questionTitle:"What is a function",
//    questionBody:"It meant to be",
//    questionTags:["Javascript","R","Python"],
//    userPosted:"Susmitha",
//    userId:1,
//    askedOn:"jan 1",
//    answer:[{
//     answerBody:"Answer",
//     userAnswered:'Balaji',
//     answerdOn:"jan 2",
//     userId:1,
//    }]
//   }]
  
  return (
    <div className='questions-details-page'>
      {
        questionsList.data===null?<h1>Loading....</h1>:
        <>
        {
            questionsList.data.filter(question=>question._id===id).map(question=>(
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                         <div className='question-details-container-2'> 
                            <div className='question-votes'>
                                <AiFillCaretUp className='votes-icon' onClick={handleUpvote}/>
                                <p>{question?.upVote.length-question.downVote.length}</p>
                                <AiFillCaretDown className='votes-icon' onClick={handleDownvote}/>
                            </div>
                            <div style={{width:"100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags'>
                                    {
                                        question.questionTags.map((tag)=>(
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }

                                </div>
                                <div className='question-actions-user'>
                                    <div>
                                        <button type='button' onClick={handleShare}>Share</button>
                                        {
                                            User?.result?._id===question?.userId && (

                                                <button type='button' onClick={handelDelete}>Delete</button>
                                            )
                                        }

                                    </div>
                                    <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question?.userId}`}  style={{color:"#0086d8",textDecoration:'none'}}className="user-link">
                                           <Avatar backgroundColor="orange" px='8px' py="5px">
                                            {question.userPosted.charAt(0).toUpperCase()}
                                            </Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </section>
                    {
                        question.noOfAnswers!==0 && (
                            <section>
                                <h3>{question.noOfAnswers} answers</h3>
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                        )
                    }
                    <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={(e)=>{hadlePostAns(e,question.answer.length)}}>
                            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setAnswer(e.target.value)}}></textarea><br/>
                            <input type="submit" className='post-ans-btn' value='Post Yout Answer' />
                        </form>
                        <p>
                            Browse other Question Tagged{
                                question.questionTags.map((tag)=>(
                                    <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                ))
                            }
                            or
                            {
                                <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}> ask your own question</Link>
                            }
                        </p>

                    </section>

                </div>
            ))
        }
        </>
      }
    </div>
  )
}

export default QuestionsDetails