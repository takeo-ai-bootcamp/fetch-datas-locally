import { Link } from "react-router";

function NavigationBar() {
  return (
    <ul className="flex gap-2 shadow-md p-2 justify-end">
      <Link to="./home" className="btn btn-neutral btn-sm">
        Home
      </Link>
      <Link to="./add-data" className="btn btn-neutral btn-sm">
        Add Data Page
      </Link>
    </ul>
  );
}

export default NavigationBar;
