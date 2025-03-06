import { Link } from "react-router";

function NavigationBar() {
  return (
    <ul className="flex gap-2 shadow-md p-2 justify-between place-items-center">
      <Link to="./home" className="btn btn-ghost btn-sm">
        <img
          src="https://www.takeo.ai/takeo-seo.png"
          alt="social media"
          width="100px"
        />
      </Link>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="btn btn-outline btn-primary btn-xs"
      >
        Add Posts
      </button>
    </ul>
  );
}

export default NavigationBar;
