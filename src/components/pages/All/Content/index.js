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
    {
      name: "BL",
      img: "/items/Houseware/BL-C01FCR.jpg",
    },
    {
      name: "CJE",
      img: "/items/Houseware/CJE-B0601.jpg",
    },
    {
      name: "CR",
      img: "/items/Houseware/CR-0655FR.jpg",
    },
    {
      name: "CRH",
      img: "/items/Houseware/CRH-TWK0670W.jpg",
    },
    {
      name: "CRP",
      img: "/items/Houseware/CRP-FHS1010FD.jpg",
    },
    {
      name: "CRS",
      img: "/items/Houseware/CRS-FCWK0670K.jpg",
    },
    {
      name: "H-300L",
      img: "/items/Houseware/H-300L.jpg",
    },
    {
      name: "H400",
      img: "/items/Houseware/H400-BFC05MB.jpg",
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
