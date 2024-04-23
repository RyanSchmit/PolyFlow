import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/planner">Planner</a></li>
        <li><a href="/stats">Stats</a></li>
        <li><a href="/discover">Discover</a></li>
      </ul>
    </div>
  );
}

export default NavBar;