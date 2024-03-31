import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item.img} alt="" />
      {/* <div>{item?.choice === true ? "Consious Choice" : ""}</div> */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>{item.title}</div>
      <div style={{ fontSize: "18px" }}>{`${item?.price.toLocaleString("ko-KR")}원`}</div>
      <div>
        {item?.size.map((size) => {
          if (size !== "L") return size + " / ";
          else return size;
        })}
      </div>
      <div style={{ color: "red", fontWeight: "bold" }}>
        {item?.new === true ? "신제품" : ""}
      </div>
    </div>
  );
}
