import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./content.module.css";

export default function Content({
  primaryText,
  link,
  content,
  image,
  orientation = "default",
}) {
  const orientationStyle = orientation === "default" ? "" : styles.reverse;
  const alignLeft = orientationStyle === "default" ? styles.left : styles.right;
  const alignRight =
    orientationStyle === "default" ? styles.right : styles.left;

  return (
    <div className={`${styles.contentContainer} ${orientationStyle}`}>
      <div className={`${styles.copyColumn} ${alignLeft}`}>
        <div className={styles.copyContainer}>
          <h4 className={styles.primaryText}>{primaryText}</h4>
          {link !== "" ? (
            <a className={styles.secondaryText} href={link}>
              Youtube Link
            </a>
          ) : null}
          <p className={styles.secondaryText}>{content}</p>
        </div>
      </div>
      <div className={`${styles.imageColumn} ${alignRight}`}>
        <GatsbyImage alt="Image" image={image} />
      </div>
    </div>
  );
}
