import React from "react"
import { BrowserRouter } from "react-router-dom"
import MainRouting from "./MainRouting"
import Header from "../header/Header"
import { ContentWrapper, RouterWrapperStyled } from "./RouterWrapper.styled"

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <RouterWrapperStyled>
        <Header />
        <ContentWrapper>
          <MainRouting />
        </ContentWrapper>
      </RouterWrapperStyled>
    </BrowserRouter>
  )
}

export default RouterWrapper
