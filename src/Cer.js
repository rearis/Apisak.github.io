import layoutimg from "./asset/img/layoutimg.svg";
import {Card, CardGroup, Container, Row} from "react-bootstrap";
import Cerimg from "./asset/img/Cer_Sec.png";
import {SRLWrapper} from "simple-react-lightbox";

export default function CardLayout() {
  return (
    <section className="pad-section scroll-top" id="tabcer">
      <h1 className="text-uppercase pad-skill text-left">
        My <span id="cercolor">Certificate</span>
      </h1>
      <Container>
        <SRLWrapper>
          <div className="justify-content-center">
            <img
              style={{height: "300px"}}
              className="img-fluid border border-secondary text-center"
              src={Cerimg}
              alt="CompTIA Security+ Certificate"
            />
          </div>
        </SRLWrapper>
        <br />
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="abe48f11-59d9-49c3-bed0-bf6ceb52c046"
          data-share-badge-host="https://www.youracclaim.com"
        ></div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="84b5eb3f-6f9c-4fd9-a3f2-0c18efe31bd2"
          data-share-badge-host="https://www.youracclaim.com"
        ></div>
        <br />
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="bf19c006-7be3-46ea-97a8-0a09cf0bf201"
          data-share-badge-host="https://www.youracclaim.com"
        ></div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="c1fbcced-74df-408a-901c-614ab039bb59"
          data-share-badge-host="https://www.youracclaim.com"
        ></div>
      </Container>
    </section>
  );
}
