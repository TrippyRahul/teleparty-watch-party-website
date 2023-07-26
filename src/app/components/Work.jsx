import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">
          How to watch movies together online on teleparty Firefox?
        </h2>
        <h3>
          To stream movies together on Teleparty using Firefox, follow these
          steps:
        </h3>

        <ul className={styles.content}>
          <li>
            <span>Install :</span>Go to the Firefox add-ons store and search for
            &quot;Teleparty&quot;. Click on &quot;Add to Firefox&quot; and follow the instructions
            to install.
          </li>
          <li>
            <span>Open a movie or series:</span> Go to the streaming platform
            (e.g., Netflix, Disney Plus, Hulu) and choose the movie or series
            you want to watch.
          </li>
          <li>
            <span>Start the Teleparty: </span>Once the content starts playing,
            click on the Teleparty icon in the Firefox toolbar to see the party.
          </li>
          <li>
            <span>Create a party link: </span>Click on &quot;Start the party&quot; to
            generate a unique party link.
          </li>
          <li>
            <span>Share the link: </span> Share the party link with your friends
            with whom you want to join the viewing session.
          </li>
          <li>
            <span>Join the party: </span>Your friends will click on the link to
            join the Teleparty. They must have installed the extension on their
            browser.
          </li>
          <li>
            <span> Sync and chat:</span> As everyone joins the party, the
            playback will synchronize, and you can chat and you can even make an
            audio or video call with your friends in the sidebar while enjoying
            the movie or series together.
          </li>
        </ul>

        <p>
          It is an easy and simple process. So enjoy the party mode with
          unlimited movie marathons by using the extension.
        </p>
      </div>
    </div>
  );
};

export default Work;
