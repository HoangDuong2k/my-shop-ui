import styles from "./Content.module.css";

function Content() {
  const itemList = [
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
