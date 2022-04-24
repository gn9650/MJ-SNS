import React from "react";
import styled from "styled-components";
import { Wrapper } from "../utils/globalComponents";

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  box-shadow: 3px 3px 5px #d7d7d7;
  margin-right: 20px;
`;

const ViewId = styled.div`
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: skyblue;
  }
`;

const CancelTxt = styled.div`
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: #ff4242; // 남심저격 색상
  }
`;

const FollowBox = ({ imgSrc, username }) => {
  return (
    <Wrapper dr="row" height="55px" ju="space-around" padding="0px 15px">
      <Wrapper dr="row" ju="flex-start">
        <ProfileImage src={imgSrc} />
        <ViewId>{username}</ViewId>
      </Wrapper>

      <Wrapper al="flex-end">
        <CancelTxt>팔로우 취소</CancelTxt>
      </Wrapper>
    </Wrapper>
  );
};

export default FollowBox;
