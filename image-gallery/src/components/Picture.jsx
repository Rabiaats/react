const Picture = ({ data, visibleCount }) => {
  return (
    <>
      {data
        .slice(0, visibleCount)
        .map(({ key, src: { large: img }, photographer }) => (
          <div className="picture" key={key}>
            <div className="imageContainer">
              <img src={img} alt={photographer} />
            </div>
            <div className="info">
              <p>{photographer}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Picture;
