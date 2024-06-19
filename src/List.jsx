import { FaRegClock } from "react-icons/fa";
import styles from "./List.module.css";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { RiBankCard2Fill } from "react-icons/ri";

export default function List() {
  return (
    <div className={styles.container}>
      <h1>Try out ### right away</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>
            <FaRegClock size={30} />
          </span>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur</p>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>
            <BsFillPiggyBankFill size={30} />
          </span>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur</p>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>
            <RiBankCard2Fill size={30} />
          </span>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur</p>
        </li>
      </ul>
      <button className={styles.btn}>Register Now</button>
    </div>
  );
}
