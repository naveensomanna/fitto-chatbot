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
      <div class="bot__small__body__wrapper"></div>
      <div class="bot__small__dot bot__small__dot1"></div>
      <div class="bot__small__dot bot__small__dot2"></div>
    </section>
  );
};

export default BotHead;
