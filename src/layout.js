import { section } from 'react-bootstrap'
import './App.css';

export default function Layout() {

    return (
        <section className="et-hero-tabs" id="tabhome">
            <h1>Apisak Sriprasert</h1>
            <h3>I am graduated in major of Information Technology at Rajamangala University of Technology Krungthep.</h3>
            <h3>Then I need to improve my coding skill and learn new programming language.</h3>
            <h3>And Hopefully someone give me a chance</h3>
            <div className="et-hero-tabs-container">
                <a className="et-hero-tab" href="#tabhome">Home</a>
                <a className="et-hero-tab" href="#tababout">About</a>
                <a className="et-hero-tab" href="#tabedu">Education</a>
                <a className="et-hero-tab" href="#tabcer">Certificate</a>
                <span className="et-hero-tab-slider"></span>
            </div>
        </section>
    );
}
