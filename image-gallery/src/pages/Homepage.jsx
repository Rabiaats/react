import { useState, useEffect } from "react";
import Picture from "../components/Picture";
import MyFooter from "../components/MyFooter";
import data from "../helper/data";
import MyNavbar from "../components/MyNavbar";

const Homepage = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
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
            behavior: 'smooth'
        })
    }
    return (
        <div className="homepage">
            <MyNavbar />
            <div className="pictures">
                <Picture data={data} visibleCount={visibleCount}/>
            </div>
            <div>
                {visibleCount < data.length && <button onClick={showMoreItems}>Daha Fazla</button>}
            </div>
            {isVisible && <button className="fixed" onClick={handleClick}>Top</button>}
            <MyFooter/>
        </div>
    ) 
}

export default Homepage;