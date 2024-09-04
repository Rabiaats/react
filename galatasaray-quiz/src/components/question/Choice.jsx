const Choice = ({ choice, id, handleChange, selected, close }) => {
  return (
    <div>
      <input
        disabled={close}
        type="radio"
        name={id}
        checked={selected === choice}
        value={choice}
        onChange={handleChange}
        className={selected === choice ? "selected-radio" : ""}
      />
      {choice}
    </div>
  );
};

export default Choice;
