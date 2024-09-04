
const PlacesCard = ({id, name, city, description, location, img, handleShow}) => {
  return (
      <div className="boxes" onDoubleClick={() => handleShow(name, city, img)}>
            <img src={img} alt={name}/>
            <div class="box">
              <h1>{name}</h1>
              <h3>{city}</h3>
            </div>
            <div class="par-map">
              <p>
                {description}
              </p>
              <div class="map">
                <iframe title="travel" {...location} ></iframe>
              </div>
            </div>
      </div>
  )
}

export default PlacesCard