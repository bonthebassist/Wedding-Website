const bridalParty = [
    {
        name: "Charlie Thomas",
        title: "Best Man",
    },
    {
        name: "David Goodwin",
        title: "Groomsman",
    },
    {
        name: "Damian Holobek",
        title: "Groomsman",
    },
    {
        name: "Georgina Holst",
        title: "Maid of Honour",
    },
    {
        name: "Christina Guala-Goodwin",
        title: "Bridesmaid",
    },
    {
        name: "Marianna Grynchuk",
        title: "Bridesmaid",
    }

]

const menu = {
    entree: "Traditional dips & Afghan Bread",
    mains: [
        {
            dishName: "Kabuli Palaw",
            description: `Aged long-grain rice, Afghan spices. Caramelised carrots, sultanas, almonds`
        },
        {
            dishName: "Kofta",
            description: `Lamb meatballs simmered in a tomato & garlic sauce with Afghan spices`
        },
        {
            dishName: "Banjan Borani",
            description: `Parwana's signature eggplant simmered in a tomato sauce garlic yoghurt & mint`
        },
        {
            dishName: "Sabzi",
            description: `Spinach leaves & herbs chilli, onion, garlic & Afghan spice`
        }
    ],
    dessert: "An array of scrumptous Afghan desserts alongside some pana cottas, cupcakes, and other yummy things!"
 }

const musicians = [
    {
        musicianName:"Jess Bigg",
        instrument: "Vocals"
    },
    {
        musicianName:"Jack Strempel",
        instrument:"Moog Bass"
    },
    {
        musicianName:"Vinnie Miranda",
        instrument: "Guitar"
    },
    {
        musicianName:"Alexander Flood",
        instrument: "Drums"
    }
]

// const googleFonts = {
//     sansSerif: "",
//     headings: "",
//     curly: "",
//     fullURL: ""
//  }

 const timeline = [
    {
        time:"4:45pm",
        title:"Welcome"
    },
    {
        time:"5:15pm",
        title:"Ceremony"
    },
    {
        time:"6:30pm",
        title:"Dinner"
    },
    {
        time:"8:00pm",
        title:"Dancing"
    },
    {
        time: "11:30pm",
        title: "Send off"
    }
]

const p1 = `Max first saw Bonnie in 2011 as he umpired the Year 8 music II's in PE at Marryatville Highschool.
With only a few interactions through-out the next 5 years, no one would have suspected these two would ever be an item.
On November 14th 2015 Max and Bonnie's paths crossed again as they played a Wedding at the Town hall. Max was in need of a quick lift
 to his next gig at the convention centre, and Bonnie happily helped. Max talked non-stop for those few minutes and as he exited the car onto the foot bridge on War Memorial Drive, he 
 casually said "let's hang out at uni". They quickly became unseperable, going to COMA gigs even free jazz ones, Chihuahua bar, WOMAD, 
 Generations, and beginning a fierce foozball rivalry in the Hub. They became best friends and after 11 months of denying it to everyone, a happy couple.`

const p2 = `In 2018 Bonnie joined Pivo (cat), Charlie Thomas (best man) and Max in their moving out adventures in the North East. 
There they hosted the inaugural MG Cup, subsequent MG Cups, taught online.`

const p3 = `In October 2020 Max and Bonnie begun a new chapter moved out on their own to Brompton.
After a hectic year and half of album launches, honours, teaching and gigging, it was time to focus inward and slow-down just a touch.
In August 2022 Max proposed to Bonnie on the same bridge she dropped him off that night of November 2014 with the words 
"Will you hang out with me forver?"`

 export {bridalParty, menu, timeline, musicians, p1, p2, p3}


//  return(
//     <Row xs={1} md={2} className="g-4">
//       {bridalParty2.map((bridalParty2, i)=>(
//         <Col>
//         <Card>
//           <Card.Img variant="top" src={imgArray[i]} />
//           <Card.Body>
//             <Card.Title>{bridalParty2.name}</Card.Title>
//             <Card.Text>{bridalParty2.title}</Card.Text>
//           </Card.Body>
//         </Card>
//         </Col>
//       ))}
//     </Row>
//   )
//       }

//       import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Card';
// import { bridalParty2 } from '../../resources/text';
// import Charlie from '../../resources/images/Charlie.jpg'
// import David from '../../resources/images/David.jpg'
// import Damian from '../../resources/images/Damian.jpg'
// import Georgie from '../../resources/images/Georgie.jpg'
// import Christina from '../../resources/images/Christina.jpg'
// import Marianna from '../../resources/images/Marianna.jpg'