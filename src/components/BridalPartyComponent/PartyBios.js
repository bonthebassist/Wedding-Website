import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { bridalParty } from '../../resources/text';
import Charlie from '../../resources/images/BridalParty/Charlie.jpg'
import David from '../../resources/images/BridalParty/David.jpg'
import Damian from '../../resources/images/BridalParty/Damian.jpg'
import Georgie from '../../resources/images/BridalParty/Georgie.jpg'
import Christina from '../../resources/images/BridalParty/Christina.jpg'
import Marianna from '../../resources/images/BridalParty/Marianna.jpg'

const imgArray = [Charlie, David, Damian, Georgie, Christina, Marianna]

function PartyBios() {
    let cardsMap = bridalParty.map((partyMember, i)=>{
      let card = (
        <Col>
        <Card>
          <Card.Img variant="top" src={imgArray[i]} />
          <Card.Body>
            <Card.Title>{partyMember.name}</Card.Title>
            <Card.Text>{partyMember.title}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        )
    return card
    })

  return (
   <Row xs={1} md={3} xlg={6}className="g-4">{cardsMap}</Row>
  );
}

export default PartyBios;