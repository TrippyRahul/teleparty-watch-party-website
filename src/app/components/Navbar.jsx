import styles from "../styles/header.module.scss";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import Language from "./Language";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <div className={styles["image-container"]}>
                <Image
                  src="/teleparty.svg"
                  alt="ott-party"
                  fill={true}
                  className={styles["image"]}
                />
              </div>
            </Link>
          </li>
        </ul>

        <ul className={styles.actions}>
          <Language />
          <div href="#" className={styles.hideBtn}>
            <Button />
          </div>
        </ul>
      </nav>
      <div className={styles.navInfo}>
        <p>Use Teleparty To Start Your Party With Your Friends And Family</p>
      </div>
    </>
  );
};

export default Navbar;
