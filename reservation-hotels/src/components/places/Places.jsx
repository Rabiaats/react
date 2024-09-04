import PlacesCard from "./PlacesCard";
import MyModal from "./MyModal";
import { useEffect, useState } from "react";

const Places = ({places, handleAdd}) => {
  const [show, setShow] = useState(false);
  const [placeInfo, setPlaceInfo] = useState({name:"", city:"", img:""})
  const [visibleCount, setVisibleCount] = useState(10);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) { // Ekran 300px aşağı kayarsa
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    

    const showMoreItems = () => {
        setVisibleCount(prevCount => prevCount + 10);
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // kaydırmanın yumuşak bir şekilde olması
        })
    }

  const handleClose = () => setShow(false);
  const handleShow = (name, city, img) => {
    setShow(true);
    setPlaceInfo({name: name, city: city, img: img})
  }
  return (
    <main className="d-flex flex-column align-items-center">
      <div className="main-bottom">
          {
            places.slice(0, visibleCount).map(place => <PlacesCard key={place.id} {...place} handleShow={handleShow}/>)
          }
      </div>
      <div>
                {visibleCount < places.length && <button onClick={showMoreItems}>Daha Fazla</button>}
            </div>
            {isVisible && <button className="fixed" onClick={handleClick}>Top</button>}
      <MyModal placeInfo={placeInfo} show={show} handleShow={handleShow} handleClose={handleClose} handleAdd={handleAdd}/>
    </main>
  )
}

export default Places;