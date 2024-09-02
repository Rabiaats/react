import { useRef, useState } from "react";
import Choice from "./Choice";

const Question = ({ question, choices, answer, id, setScore, show, close}) => {
  const [selected, setSelected] = useState("");
  const hasRun = useRef(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  if(show && (selected === answer) && !hasRun.current){
    setScore(item => item + 1)
    hasRun.current = true;
  }

  return (
    <div className="question-card" style={{ height: "fit-content" }}>
      <div className="question-content">
        <div>
          <h4>{question}</h4>
          <form className="text-start fs-5">
            {choices.map((choice) => (
              <Choice
                choice={choice}
                id={id}
                handleChange={handleChange}
                selected={selected}
                close={close}
              />
            ))}
          </form>
        </div>
      </div>
      <div className={`true-answer ${selected === answer ? "true" : selected === "" ? "answer" : "false"}`}>
        {show && <p className="fs-5 mt-2">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;

//! parent da bulunan bir state i child a gondermek (prop drilling)
//! lifting state up -> parentta bulunan state in değerini bir alt componentte değiştiriyorsak
