import { BsPiggyBankFill } from "react-icons/bs";
import styles from "./MovingBar.module.css";

export default function MovingBar() {
  return (
    <div className={styles.ticker}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 1</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 2</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 3</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 4</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 5</span>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.li}>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 1</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 2</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 3</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 4</span>
        </li>
        <li>
          <span>
            <BsPiggyBankFill size={50} />
          </span>
          <span>Lorem ipsum 5</span>
        </li>
      </ul>
    </div>
  );
}
