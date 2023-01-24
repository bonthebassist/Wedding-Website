import Accordion from 'react-bootstrap/Accordion';
import TimelineTable from './TimelineTable';
import Menu from './Menu';
// import Musicians from './Musicians';
import VenueDetails from './VenueDetails';


function DetailsAccordian() {
  
  return (
    <Accordion eventKey="1" >
      <Accordion.Item defaultActiveKey="0" flush>
        <Accordion.Header>Core details</Accordion.Header>
        <Accordion.Body>
          <VenueDetails/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" flush>
        <Accordion.Header>Timeline</Accordion.Header>
        <Accordion.Body>
          <TimelineTable/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Menu</Accordion.Header>
        <Accordion.Body>
          <Menu />
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="3">
        <Accordion.Header>Musicians</Accordion.Header>
        <Accordion.Body>
          <Musicians/>
        </Accordion.Body>
      </Accordion.Item> */}
      
    </Accordion>
  );
}

export default DetailsAccordian;