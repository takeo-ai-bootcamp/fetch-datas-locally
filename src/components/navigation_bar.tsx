import { Link } from "react-router";

function NavigationBar() {
  return (
    <ul className="navigation-bar">
      <Link to="./home">Home</Link>
      <Link to="./add-data">Add Data Page</Link>
    </ul>
  );
}

export default NavigationBar;
