import {Container} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(fas, fab, far);

export default function Skill() {
  return (
    <section className="pad-section scroll-top" id="tabskill">
      <Container>
        <h1 className="text-uppercase pad-skill">
          My <span id="skillcolor">Skill</span>
        </h1>
        <div className="pad-left p2 para">
          <p>Programming Skill</p>
        </div>
        <div className="p1">
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            PHP,Java
          </p>
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            CSS,BootStrap
          </p>
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            MySQL
          </p>
        </div>
        <div className="pad-left p2 para">
          <p>Design Skill</p>
        </div>
        <div className="p1">
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            UX/UI Design With Affinity Design,Adobe XD and Photoshop
          </p>
        </div>
        <div className="pad-left p2 para">
          <p>Office Skill</p>
        </div>
        <div className="p1">
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            Microsoft Office(Word,Excel,Powerpoint)
          </p>
        </div>
        <div className="pad-left p2 para">
          <p>Other Skill</p>
        </div>
        <div className="p1">
          <p>
            <span className="span-att">
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            </span>
            Knowledge in TCP/IP, Network Config, Basic IT_Security
          </p>
        </div>
      </Container>
    </section>
  );
}
