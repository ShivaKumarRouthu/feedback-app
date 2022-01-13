import { Link } from "react-router-dom";
import Card from "../shared/Card";

function About() {
  return (
    <Card>
      <h1>About This applicaiton</h1>
      <p>This is ReactJS Feedback application</p>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default About;
