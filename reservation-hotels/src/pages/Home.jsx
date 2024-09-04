import MyNavbar from "../components/navbar/MyNavbar";
import MyForm from "../components/form/MyForm";
import Container from "react-bootstrap/Container";
import places from "../helpers/places";
import { useState } from "react";
import Places from "../components/places/Places";

const Home = () => {
    const [resList, setResList] = useState(JSON.parse(localStorage.getItem("list")) || []);
    
    const [info, setInfo] = useState({place:"", city:"", type:""});

    const handleInfo = (e) => setInfo({...info, [e.target.id]:e.target.value});

    const handleAdd = (newRes) => {
      setResList([...resList, newRes]);
      localStorage.setItem("list", JSON.stringify([...resList, newRes]))
    } // modal da

    const handleDelete = (id) => {
      const filteredList = resList.filter(item => item.id !== id);
      setResList(filteredList);
      localStorage.setItem("list", JSON.stringify(filteredList));
    } // offcanvas

    const filteredPlaces = places.filter(({name, city, type}) => name.trim().toLowerCase().includes(info.place.trim().toLowerCase()) && (city.includes(info.city) || info.city === "All") && (type.includes(info.type) || info.type=== "All"))
    
    return (
        <div className="bg-dark-subtle body">
            <MyNavbar handleDelete={handleDelete} resList={resList}/>
            <p className="text-center text-primary">
            (Şu an için {[...new Set(places.map(({city}) => city))].map(city => (city + " "))} hizmetimiz vardır.) (Rezervasyon için kutulara çift tıklatın.)
            </p>
            <Container>
                <MyForm cities={[...new Set(places.map(({city}) => city))]} types={[...new Set(places.map(({type}) => type))]} handleInfo={handleInfo}/>
                <Places handleAdd={handleAdd} places={filteredPlaces}/>    
            </Container>
        </div>
    )
}

export default Home;