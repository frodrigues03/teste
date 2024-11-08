import styled from "styled-components";


export const ParticipantesDiv = styled.div`

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  


}

/*Cards Style*/
.cards-body {
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 3px;
}
.slider-container{
  max-width: 1120px;
  width: 100%;
  padding: 40px 0;
}
.slider-content {
  overflow: hidden;
  border-radius: 25px;
  margin: 0 40px;
}
.card {
  border-radius: 25px;
  background-color: rgb(245, 240, 240);
}
.image-content,
.card-content {
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #4070f4;
  border-radius: 25px 25px 0px 25px;
}
.overlay::before,
.overlay::after{
    content: "";
    position: absolute;
    right: 0;
    bottom: -40px;
    width: 40px;
    height: 40px;
    background-color:#4070f4;
}
.overlay::after{
    border-radius: 0 25px 0 0 ;
    background-color: rgb(245, 240, 240);
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #fff;
  border-radius: 50%;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #4070f4;
}
.name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button {
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #4070f4;
  color: white;
  margin: 14px;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 400;
  cursor: pointer;
  transition: all ease 0.3s;
}
.button:hover {
  background-color: #265df2;
}
.swiper-navBtn{
  color: #6e93f7;
  transition: color 0.3s ease;
}
.swiper-navBtn:hover{
  color: #4070f4;
}
.swiper-navBtn::before,
.swiper-navBtn::after{
  font-size: 40px;
}
.swiper-button-next{
  right: 0;
}
.swiper-button-prev{
  left: 0;
}
.swiper-pagination.bullet{
 background-color: #6e93f7;
 opacity: 1;
}
.swiper-pagination.bullet-active{
 background-color: #4070f4;
}

@media screen and (max-width:768px) {
  .slider-content{
    margin: 0 10px;
  }
  .swiper-navBtn{
    display: none;
  }
}