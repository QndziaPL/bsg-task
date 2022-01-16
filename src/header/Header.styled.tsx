import styled from "styled-components"
import { Header } from "antd/lib/layout/layout"
import { HEADER_HEIGHT } from "../consts/consts"

export const HeaderStyled = styled(Header)`
  background-color: white;
  color: black;
  height: ${HEADER_HEIGHT}px;
  box-shadow: 0 0 5px rgba(1, 1, 1, 0.3);
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  height: 100%;
`

export const UserNameStyled = styled.div`
  font-weight: bold;
`

export const NameAndAccountInfoStyled = styled.div`
  line-height: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

export const AccountInfoStyled = styled.div`
  font-size: 0.8rem;
`
