import styled from "styled-components"
import { CaretRightOutlined } from "@ant-design/icons"

export const VideoTitle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgb(239, 239, 239);
  padding: 4px 8px;
  font-size: 1.3em;
  margin-bottom: 4px;
  border-bottom-left-radius: 10px;
  transition-duration: 0.3s;
`

export const PlayButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0);
  transition-duration: 0.3s;
`
export const PlayButton = styled(CaretRightOutlined)`
  opacity: 0;
  font-size: 50px;
  transition-duration: 0.3s;
  color: white;
`

export const SingleVideoImageStyled = styled.div`
  position: relative;
  margin-bottom: 20px;
  :hover {
    transform: scale(1.05);
    transition-duration: 0.3s;

    ${VideoTitle} {
      opacity: 0;
    }

    ${PlayButton} {
      opacity: 1;
    }
    ${PlayButtonContainer} {
      background-color: rgba(1, 1, 1, 0.3);
    }
  }
  width: 426px;
  height: 240px;
  cursor: pointer;
`

export const VideoCoverImage = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.3);
`
