import "../explore/explore.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRight } from 'react-icons/bs';

export default function Explore() {
  return (
    <div className="main-container1">
        <div className="exploreText">Check out our best<br/>coffee beans</div>
        <div><button className="explore">Explore our best product<BsArrowRight/></button></div>
    </div>
  );
}