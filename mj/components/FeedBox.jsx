import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";

const Box = styled.img`
  width: ${(props) => `${props.oneWidth}px` || "0px"};
  min-width: ${(props) => `${props.oneWidth}px` || "0px"};
  height: ${(props) => `${props.oneWidth}px` || "0px"};
  border-radius: 3px;
  box-shadow: 0px 0px 3px #999;
  transition: 0.5s;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin-bottom: 14px;
`;

const FeedBox = ({ feedWidth, imgSrc, content }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [oneWidth, setOneWidth] = useState(0);

  useEffect(() => {
    const fullWidth = parseInt(window.innerWidth);
    const sectionWidth = (fullWidth * parseInt(feedWidth)) / 100;
    setOneWidth((sectionWidth - 40) / 3);
  }, []);

  const modalToggleHandler = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, [modalOpen]);

  return (
    <>
      <Box
        onClick={() => modalToggleHandler()}
        oneWidth={oneWidth}
        src={imgSrc}
      ></Box>

      <Modal
        visible={modalOpen}
        title="FEED INFORMATION"
        width="860px"
        footer={null}
        onCancel={() => modalToggleHandler()}
      >
        <div>{content}</div>
      </Modal>
    </>
  );
};

export default FeedBox;