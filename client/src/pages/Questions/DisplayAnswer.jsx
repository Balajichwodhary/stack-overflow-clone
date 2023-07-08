import React from 'react'
import {Link} from "react-router-dom"
import { useParams,  useNavigate ,useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import moment from "moment"

import Avatar from '../../components/Avatar'
import './QuestionDetails.css'
import {deleteAnswer} from "../../actions/askQuestion"

const DisplayAnswer = ({question,handleShare}) => {
 
    const {id}=useParams();
    const User=useSelector((state=>(state.currentUserReducer)));
    const dispatch=useDispatch()
    
    const handleDelete=(answerId,noOfAnswers)=>{
        // console.log(id,answerId,noOfAnswers)
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }
  return (
    <div >
        {
            question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div className=''>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                            User?.result?._id===ans?.userId && (

                                                <button type='button' onClick={()=>{handleDelete(ans._id,question.noOfAnswers)}}>Delete</button>
                                            )
                                        }
                            
                        </div>
                        <div>
                            <p> answered {moment(ans.answerdOn).fromNow()}</p>
                            <Link to={`/Users/${ans.userId}`}  style={{color:"#0086d8" ,textDecoration:'none'} }className="user-link">
                                           <Avatar backgroundColor="green" px='8px' py="5px" >
                                            {ans.userAnswered.charAt(0).toUpperCase()}
                                            </Avatar>
                                            <div>
                                                {ans.userAnswered}
                                            </div>
                                        </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer