import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: Grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75px 90px 348px;
  grid-template-areas:
    "header"
    "statistics"
    "links";
  margin-top: 55px
  background: #eff3f4;
  @media (min-width: 321px) {
      grid-template-rows: 150px 90px 438px;
    }
`;

const Header = styled.div`
  grid-area: header;
  position: relative;
  margin-top: 0px;
  @media (min-width: 321px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Welcome = styled.p`
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  color: #0b6fa4;
  @media (min-width: 321px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 55px;
    line-height: 95px;
  }
`;

const UserName = styled.span`
  color: #000;
  margin-left: 5px;
`;

const Statistics = styled.div`
  grid-area: statistics;
  display: flex;
  width: 90%;
  margin: 0 auto;
  position: relative;
  background: #fff;
  border-radius: 6px;
  @media (min-width: 1040px) {
    width: 50%;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
  margin: 10px;
  position: relative;
`;

const StatisticItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border-right: 1px solid #a8a193;
  &:last-child {
    border-right: none;
  }
`;

const ItemName = styled.p`
  text-align: center;
  margin: 5 10px 0;
  display: block;

`;

const ItemCount = styled.p`
  text-align: center;
  margin-top: -5px;
  display:block;
`;

const Links = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: 321px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 25px;
  }
`;

const LinkWrapper = styled.div`
  text-align: center;
  display: block;
  border-radius: 5px;
  border: 1px solid #000;
  width: 118px;
  height: 88px;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 15px;
  background: #fff;
  @media (min-width: 321px) {
    margin-top: 30px
  }
`;

const Navlink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 0 12px;
`;

const IconDiv = styled.div`
  width: 60px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 50px;
  height: 45px;
  line-height: 50px;
  font-size: 35px;
  margin-top: 8px;
  color: #000000b3;
  &:hover {
    color: #0288d1;
  }
`;

const Span = styled.span`
  display: block;
  position: relative;
  font-size: 15.5px;
  color: #000000b3;
  margin-top: 10px;
`;


export {
  Wrapper,
  Header,
  Links,
  Statistics,
  Welcome,
  Span,
  ItemCount,
  StatisticItems,
  ItemName,
  Container,
  LinkWrapper,
  UserName,
  Img,
  IconDiv,
  Navlink,
};
