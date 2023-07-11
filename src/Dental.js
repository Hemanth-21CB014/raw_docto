import React,{useEffect, useState} from 'react'
import './dental.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
// import dentist1 from './dotor1.png'
// import dentist2 from './dentist2.png'
import Logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGraduationCap,faPhone} from '@fortawesome/free-solid-svg-icons'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';

//import Rating from './Rating';

export default function Dental() {
  const [ docs,setDocs ] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/endpoint").then((resp)=>{
      
    setDocs(resp.data.data); 
   })
  },[])
console.log(docs)
console.log(typeof docs)
  return (
    <div className='bg'>
      <nav  className='navbar-nav'>
            <img className='logo' src={Logo} alt="logo" />
            <ul>
                <li><FontAwesomeIcon icon={faHome} /><a href="/home"> HOME</a></li>
                <li><FontAwesomeIcon icon={faGraduationCap} /><a href="/centreofexclence"> CENTRE OF EXCLENCE</a></li>
                <li><FontAwesomeIcon icon={faPhone} /><a href="/contact"> CONTACT INFO</a></li>
            </ul>
        </nav>
    <div className='doctor-container'>
     <Row>
      {
        docs && docs.map(data => <Col key={data.doc_id} xs={3}>
          <div>
  <Card  className='doctor-card' style={{ width: '19rem' }} >
    <Card.Img className='doctor-card-img' variant="top" src={data.image} />
    <Card.Body>
      <Card.Title style={{fontStyle:"Arial",color:"blue"}}>Dr. {data.name}</Card.Title>
      <Card.Subtitle style={{fontStyle:"Arial",color:"darkblue"}}>{data.doc_id}</Card.Subtitle>
      <Card.Text style={{fontStyle:"Arial",color:""}}>{data.discription}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush ">
      <ListGroup.Item style={{color:"red"}}>{data.year} Exprience</ListGroup.Item>
      <ListGroup.Item>{data.no_of_operation}+ Succesful Operations</ListGroup.Item>
      <ListGroup.Item>Rating</ListGroup.Item>
      <ListGroup.Item>{data.hospital_name}</ListGroup.Item>
    </ListGroup>
    <Card.Body style={{backGroundColor:'white'}}>
      <Button  variant='outline-success'>Book Appoinment</Button>
    </Card.Body>
  </Card>
  </div>
  </Col>
      )}
        

    
    </Row> 
    
{/* 
 {
 docs && docs.map(data => 
   <div key={data.doc_id}>
    <img src={data.image}/>
    <p>{data.name}</p>
    <p>{data.doc_id}</p>
    <p>{data.year}</p>

   </div>
  )
 }  */}
    
    
    </div> 
    </div>
  )
}

