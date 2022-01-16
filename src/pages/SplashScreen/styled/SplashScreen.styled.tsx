import styled from "styled-components"

export const SplashScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`

export const LogoStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(gray, black);
  box-shadow: -15px 5px 25px rgba(203, 85, 85, 0.66);
  margin: 20px;
`

export const ErrorStyled = styled.p`
  color: red;
  padding: 4px;
`
