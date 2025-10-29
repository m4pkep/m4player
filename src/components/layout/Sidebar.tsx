"use client";
import styles from "./css/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faComment,
  faGlobe,
  faHome,
  faInfo,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={styles.area}>
      <nav className={styles.mainmenu}>
        <ul className="flex-col">
          <li className="has-subnav mb-10 flex">
            <a className="flex" href="#">
              <FontAwesomeIcon icon={faHome} className={styles.navicon} />
              <span className="nav-text ml-10">Поиск</span>
            </a>
          </li>
          <li className="has-subnav mb-10 flex">
            <a className="flex" href="#">
              <FontAwesomeIcon icon={faGlobe} className={styles.navicon} />
              <span className="nav-text ml-10">Главная</span>
            </a>
          </li>
          <li className="has-subnav mb-10 flex">
            <a className="flex" href="#">
              <FontAwesomeIcon icon={faComment} className={styles.navicon} />
              <span className="nav-text ml-10">Подкасты</span>
            </a>
          </li>
          <li className="has-subnav mb-10 flex">
            <a className="flex" href="#">
              <FontAwesomeIcon
                icon={faCameraRetro}
                className={styles.navicon}
              />
              <span className="nav-text ml-10">Коллекция</span>
            </a>
          </li>
          <li className="mb-10 flex">
            <a className="flex" href="#">
              <FontAwesomeIcon icon={faInfo} className={styles.navicon} />

              <span className="nav-text ml-10">Documentation</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li className="flex">
            <a className="flex" href="#">
              <FontAwesomeIcon icon={faPowerOff} className={styles.navicon} />

              <span className="nav-text ml-10">выход</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
