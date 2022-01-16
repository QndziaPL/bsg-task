import styled from "styled-components"
import { Layout } from "antd"
import { HEADER_HEIGHT } from "../consts/consts"

export const RouterWrapperStyled = styled(Layout)`
  min-height: 100vh;
`

export const ContentWrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  position: relative;
  flex-direction: column;
  width: 100%;
`
