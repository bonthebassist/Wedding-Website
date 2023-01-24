import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { musicians } from '../../resources/text';
import Jess from '../../resources/images/Musicians/Jess.jpg'
import Jack from '../../resources/images/Musicians/Jack.jpg'
import Vinnie from '../../resources/images/Musicians/Vinnie.jpg'
import Flood from '../../resources/images/Musicians/Flood.jpg'

const imgArray = [Jess, Vinnie, Jack, Flood]
function Musicians() {
    let cardsMap = musicians.map((musician, i)=>{
      let card = (
        <Col>
        <Card>
          <Card.Img variant="top" src={imgArray[i]} />
          <Card.Body>
            <Card.Title>{musician.musicianName}</Card.Title>
            <Card.Text>{musician.instrument}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        )
    return card
    }
    )

  return (
   <Row xs={1} md={4} className="g-4">{cardsMap}</Row>
  );
}

export default Musicians;