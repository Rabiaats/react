import Container from "react-bootstrap/Container";
import Question from '../question/Question';
import { useState } from "react";
import img from "../assets/img/amblem.png";

const InterviewAccord = ({quiz, setScore, setFinish}) => {
  quiz.map((question) => question.answer = question.answer.toString());
  const [show, setShow] = useState(false);
  const [close, setClose] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
      setShow(true)
      setClose("disabled")
      setFinish(true);
      setIsClicked(true)
  };

  return (
    <Container className="my-3 d-flex flex-column align-items-center justify-content-center p-4 gap-5">
      {
        quiz.map((question) => (
          <Question key={question.id} {...question} setScore={setScore} close={close} show={show}/>
        ))
      }
      <div>
        <img src={img} alt="img" onClick={isClicked ? null : handleClick} className={`finish ${isClicked ? "" : "over"}`} style={{ cursor: isClicked ? "default" : "pointer" }}></img>
      </div>
    </Container>
  )
}

export default InterviewAccord;