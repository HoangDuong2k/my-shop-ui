import "./Content.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Content() {
  const contentItems = ["cosmetics", "houseware", "ginseng", "all"];
  const { t } = useTranslation();

  return (
    <div className="homeContentWrapper">
      {contentItems.map((item, index) => (
        <div key={index} className={"homeContent" + String(index + 1)}>
          <Link to={"/" + item} className="homeItemBtn">
            <p className="homeBtnTitle">
              {t("home.content.item" + String(index + 1))}
            </p>
            <div className="homeBtnArrow">
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Content;
