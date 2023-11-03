import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 16px;
  & a:last-child > button {
    border-bottom: 3px solid #b61a84;
  }
  & a:first-child > button {
    border-bottom: 3px solid #00a5ba;
  } */

  .header::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #dedede;
  }
  .header > .inner {
    position: relative;
    width: 1400px;
    height: 150px;
    margin: 0 auto;
    padding: 0 50px;
  }
  .header h1 {
    display: inline-block;
    margin-top: 62px;
  }
  .header h1 a,
  .header h1 img {
    display: block;
  }
  .header .logo .m {
    display: none;
  }
  .header .user_info {
    position: absolute;
    right: 50px;
    top: 20px;
    line-height: 30px;
  }
  .header .user_info .person {
    display: inline-block;
    color: #169bd5;
    font-weight: 500;
  }
  .header .user_info .person::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 7px;
    background: url(css/images/ico_person.png) no-repeat;
    background-size: contain;
    vertical-align: -4px;
  }
  .header .user_info .btn {
    margin-left: 14px;
    padding: 0 20px;
    border-radius: 15px;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    background: #169bd5;
  }
  
  .header .gnb {
    position: absolute;
    left: 430px;
    top: 78px;
    width: 920px;
  }
  .header .gnb ul {
    font-size: 0;
    text-align: center;
  }
  .header .gnb ul::after {
    content: '';
    display: block;
    clear: both;
  }
  .header .gnb ul li {
    float: left;
  }
  .header .gnb ul li + li {
    margin-left: 98px;
  }
  .header .gnb ul li a {
    color: #666;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }
  .header .gnb ul li a.cur {
    color: #222;
  }
  
  .header .right_a {
    position: absolute;
    right: 50px;
    top: 75px;
  }
  .header .right_a .btn {
    width: 30px;
    height: 30px;
    font-size: 0;
    background: url(css/images/ico_allmenu.png) no-repeat right;
    background-size: 22px 18px;
  }
  .header .right_a .btn.active {
    background: url(css/images/ico_allmenu_close.png) no-repeat right;
    background-size: 22px 18px;
  }
  .header .right_a .btn.mobile {
    display: none;
  }

`;