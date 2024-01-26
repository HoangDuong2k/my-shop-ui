import styles from "./Content.module.css";

function Content() {
  const itemList = [
    {
      name: "ancungsamsung",
      img: "/items/Ginseng/ancungsamsung.jpg",
    },
    {
      name: "bogan",
      img: "/items/Ginseng/bogan.jpg",
    },
    {
      name: "kickergold",
      img: "/items/Ginseng/kickergold.jpg",
    },
    {
      name: "Lactofit",
      img: "/items/Ginseng/Lactofit.jpg",
    },
    {
      name: "nam1",
      img: "/items/Ginseng/nam1.jpg",
    },
    {
      name: "sam1",
      img: "/items/Ginseng/sam1.jpg",
    },
    {
      name: "samkho",
      img: "/items/Ginseng/samkho.jpg",
    },
    {
      name: "thachhongsam",
      img: "/items/Ginseng/thachhongsam.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {itemList.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.itemImg}
            style={{
              backgroundImage: "url(" + item.img + ")",
            }}
          ></div>
          <div className={styles.itemInfo}>
            <p className={styles.itemName}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
