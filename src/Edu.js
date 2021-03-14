import {contains} from "jquery";
import {Container, Row} from "react-bootstrap";
import {Chrono} from "react-chrono";

export default function Timeline() {
  const items = [
    {
      title: "May 2013 - March 2016",
      cardTitle: "NAKPRASITH SCHOOL",
      cardSubtitle: "SENIOR HIGH SCHOOL" + " <Bussiness Computer>",
      media: {
        name: "NP",
        source: {
          url: "https://www.np.ac.th/nbac/images/bgvocational.jpg",
        },
        type: "IMAGE",
      },
      //cardDetailedText: "Bussiness Computer",
    },
    {
      title: "August 2016 - Current",
      cardTitle: "RAJAMANGALA UNIVERSITY OF TECHNOLOGY KRUNGTHEP",
      cardSubtitle: "BACHELOR OF SCIENCE" + " <Information Technology>",
      media: {
        name: "NP",
        source: {
          url: "https://www.rmutk.ac.th/wp-content/uploads/2020/12/05-10.jpg",
        },
        type: "IMAGE",
      },
    },
  ];
  return (
    <Container id="tabedu" className="pad-section">
      <h1 className="text-uppercase pad-skill">
        My <span id="educolor">Education</span>
      </h1>
      <Row className="justify-content-md-center">
        <div style={{width: "1000px"}}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls
            theme={{
              primary: "#7d6aec",
              secondary: "#a7e265",
              //cardForeColor: "black",
            }}
          />
        </div>
      </Row>
    </Container>
  );
}
