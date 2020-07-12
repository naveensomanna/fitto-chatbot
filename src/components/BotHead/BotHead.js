import React from "react";
import "./BotHead.scss";

const BotHead = () => {
  return (
    <section className="bot__small_container">
      <div class="bot__small__head">
        <div class="bot__small__inner__head">
          <div class="bot__small__eye bot__small__eye__left">
            <div class="bot__small__eye__ball"></div>
          </div>
          <div class="bot__small__eye bot__small__eye__right">
            <div class="bot__small__eye__ball"></div>
          </div>
        </div>
      </div>
      <div class="bot__small__neck1"></div>
      <div class="bot__small__neck2"></div>
      <div class="bot__small__body__wrapper"></div>
      <div class="bot__small__dot bot__small__dot1"></div>
      <div class="bot__small__dot bot__small__dot2"></div>
      {/* <div class="bot__small__leg bot__small__leg1"></div>
      <div class="bot__small__leg bot__small__leg2"></div>
      <div class="bot__small__shoe bot__small__shoe1"></div>
      <div class="bot__small__shoe bot__small__shoe2"></div>
      <div class="bot__small__arm bot__small__arm__left"></div>
      <div class="bot__small__arm bot__small__arm__right"></div>
      <div class="bot__small__finger bot__small__finger__left"></div>
      <div class="bot__small__finger bot__small__finger__right"></div>
      <div class="bot__small__center__box">Fitto</div> */}
    </section>
  );
};

export default BotHead;
