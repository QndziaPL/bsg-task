import styled from "styled-components"
import { HEADER_HEIGHT } from "../../consts/consts"

export const MainScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  max-height: calc(90vh - ${HEADER_HEIGHT}px);
  overflow-y: auto;
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
