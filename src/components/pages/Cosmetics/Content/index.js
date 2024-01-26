import styles from "./Content.module.css";

function Content() {
  const itemList = [
    {
      name: "Cell Fusion C",
      img: "/items/Cosmetics/CellFusionC]AdvancedClearSunscreenSPF50+.jpg",
    },
    {
      name: "d'Alba",
      img: "/items/Cosmetics/dAlbasunscreen.jpg",
    },
    {
      name: "Dr G",
      img: "/items/Cosmetics/DrGBlackSnailCream.jpg",
    },
    {
      name: "Goodal Vita C",
      img: "/items/Cosmetics/GoodalVitaCSerum.jpg",
    },
    {
      name: "Innisfree",
      img: "/items/Cosmetics/InnisfreeHyaluronMoistSunscreen50mL.jpg",
    },
    {
      name: "JAYJUN",
      img: "/items/Cosmetics/JAYJUNBlackMask.jpg",
    },
    {
      name: "JM Solution",
      img: "/items/Cosmetics/JMSolutionActivePinkSnailBrighteningMask.jpg",
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
