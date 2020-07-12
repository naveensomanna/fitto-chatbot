import React from "react";
import "./Bot.scss";
const Bot = () => {
  return (
    <div class="bot__container">
      <div class="bot__head">
        <div class="bot__inner__head">
          <div class="bot__eye bot__eye__left">
            <div class="bot__eye__ball"></div>
          </div>
          <div class="bot__eye bot__eye__right">
            <div class="bot__eye__ball"></div>
          </div>
        </div>
      </div>
      <div class="bot__neck1"></div>
      <div class="bot__neck2"></div>
      <div class="bot__body__wrapper"></div>
      <div class="bot__dot bot__dot1"></div>
      <div class="bot__dot bot__dot2"></div>
      <div class="bot__leg bot__leg1"></div>
      <div class="bot__leg bot__leg2"></div>
      <div class="bot__shoe bot__shoe1"></div>
      <div class="bot__shoe bot__shoe2"></div>
      <div class="bot__arm bot__arm__left"></div>
      <div class="bot__arm bot__arm__right"></div>
      <div class="bot__finger bot__finger__left"></div>
      <div class="bot__finger bot__finger__right"></div>
      <div class="bot__center__box">Fitto</div>
    </div>
  );
};

export default Bot;
