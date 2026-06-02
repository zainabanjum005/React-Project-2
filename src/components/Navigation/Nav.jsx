import styles from './Nav.module.css';
const Nav = () => {

  return (
    <div>
      <nav className={`${styles.Navigation} container`}>
        <div className="logo">
          <img src="\images\logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

      </nav>
    </div>
  );
};

export default Nav
