import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

export default class App extends Component {
  constructor (props){
super (props);
this.state = { person :{ 
  fullName:'elon musk ',
   bio: " elon musk est un entrepreneur, chef d'entreprises et milliardaire sud-africain, canadien et américain. Il est le  directeur général de la société automobile Tesla",
  imgSrc:"/img...jpg",
  profession:  'entrepreneur'  } ,
  countshow: 0,
 shows : false }
 this.timer = null;
}
shows =() =>{
  this.setState({ shows:!this.state.shows})
}
componentWillUnmount() {
  clearInterval(this.timer);
}
componentDidMount() {
  this.timer = setInterval(() => {
    this.setState((prevState) => ({
      countshow: prevState.countshow + 1,
    }));
  }, 1000);
}
  render()  {
    return (
      <div className='App'>
        {this.state.shows&& 
         < Card style={{ width: '19rem', height:'10%' , marginTop:'2%', marginLeft: '10%' , backgroundColor:''}}>
      <Card.Img  variant="top" src={this.state.person.imgSrc} />
      <Card.Body>
        <Card.Title style={{marginLeft:'32%'}}>{this.state.person.fullName} </Card.Title>
        <Card.Text>
       
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{marginLeft:'29%', color:'red'}}>  {this.state.person.profession}</ListGroup.Item>
        <ListGroup.Item>{this.state.person.bio} </ListGroup.Item>
      </ListGroup>
      <p style={{ fontWeight:'bold',fontStyle:'italic', marginLeft:'28%'}}>Time : {this.state.countshow} seconds</p>
    </Card>}

    <button style={{marginLeft:'19%' , marginTop:'1%' ,  }}  onClick={this.shows}> show </button>
      </div>
    )
  }

}