import {footer, Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(fas, fab, far);

export default function ContainFoot() {
  return (
    <footer className="App-footer body">
      <Row>
        <Col md={4} className="text-left">
          <FontAwesomeIcon icon={["far", "copyright"]} />
          Since 2020 Design By Apisak Sriprasert
        </Col>
        <Col md={{span: 4, offset: 4}}>
          <div className="text-right">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <strong>Facebook</strong>.
                </Tooltip>
              }
            >
              <a
                className="mx-2"
                href="https://www.facebook.com/meen.sriprasert/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <strong>Mail</strong>.
                </Tooltip>
              }
            >
              <a className="mx-2" href={"mailto:apisak2540a@gmail.com"}>
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <strong>Github</strong>.
                </Tooltip>
              }
            >
              <a
                className="mx-2"
                href="https://github.com/rearis"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
