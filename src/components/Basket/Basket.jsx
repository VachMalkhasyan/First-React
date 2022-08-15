import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Գնումների զամբյուղ</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Ապրանքի Էջ          
            </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
              100 000 դրամից-ից ավելի գնելիս առաքումն անվճար է ։ 
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Զամբյուղ կոլեկտորների համար գնումներ</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} Դրամ</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Գինը զեղչով</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} Դրամ</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Վճարման ընդհանուր գումարը</span>
              <span>{state.totalPriceFainal.toLocaleString()}Դրամ</span>
            </div>
            <button className="basket_button_buy">Շարունակել գնման գործընթացը</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Հեռացնել{state.basket.length} Ապրանքներ զամբյուղից
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">Դատարկ զամբյուղ</span>
        </div>
      )}
    </>
  );
}
