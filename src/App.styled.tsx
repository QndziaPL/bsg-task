import styled from "styled-components"
import { Card } from "antd"

export const AppContainer = styled.div`
  min-height: 100vh;
`

export const SinglePageContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto auto auto;
  box-shadow: -5px 5px 10px rgba(1, 1, 1, 0.3);
  border-radius: 10px;
  position: relative;
  justify-content: center;
`
