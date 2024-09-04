import { useState } from "react";
import Header from "../components/header/Header";
import InterviewAccord from "../components/interviewAccord/InterviewAccord";
import quiz from "../helper/galatasaray";
import MyModal from "../components/modal/MyModal";

const Home = () => {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [finish, setFinish] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if (finish) {
    handleShow();
    setFinish(false);
  }

  return (
    <div className="mt-4">
      <Header />
      <InterviewAccord quiz={quiz} setScore={setScore} setFinish={setFinish} />
      <MyModal handleClose={handleClose} show={show} score={score} />
    </div>
  );
};

export default Home;
