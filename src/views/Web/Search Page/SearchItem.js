import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import foods from "../Data For App/foods";
import { useNavigate, useParams } from "react-router-dom";

const SearchItem = () => {
    const [searchResults, setSearchResults] = useState([]);


    const searchObject = useParams();
    console.log("search object is ", searchObject)

    const searchedText = searchObject.searchText;

    
 
   
    console.log('searched text id is ', searchedText)

  const navigate = useNavigate()

  useEffect(() => {
    handleSearch();
  }, [searchedText]);


  const handleImgClick = (code) => {
    navigate(`/admin/viewdetails/${code}`);
  }





  const handleSearch = () => {
    const results = foods.filter(food =>
      food.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setSearchResults(results);
    console.log('Search result are', results)
  }







  return (
    <div>
        <Card className="mx-6 my-4">
            <CardHeader>
                <span>Searched Items</span>
            </CardHeader>
            <CardBody>
                
      <Row className="d-flex">
        {searchResults.map((food, index) => (
          <Col sm={4} className="mx-0 mb-4" key={index}>
            <img onClick={() => handleImgClick(food.code)} src={food.img} alt="okay" style={{ width: "100%", height: "300px", objectFit: "cover" }} />

            <div className="carousel-caption">
              <p onClick={() => handleImgClick(food.code)}
                className='text-white'
                style={{ fontSize: "30px", textShadow: '2px 2px 4px #000000' }}>
                {food.name}
              </p>
              
            </div>
          </Col>
        ))}
      </Row>
      
      </CardBody>
        </Card>
      
    </div>
  );
};

export default SearchItem;
