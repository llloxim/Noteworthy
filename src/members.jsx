import Nav from "./nav.jsx";
import Cards from "./cards.jsx";

function Member({ showNav }) {
  return (
    <>
      {showNav && <Nav />}
      <Cards></Cards>
    </>
  );
}

export default Member;
