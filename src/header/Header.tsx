import React, { useContext } from "react"
import {
  AccountInfoStyled,
  HeaderContent,
  HeaderStyled,
  NameAndAccountInfoStyled,
  UserNameStyled,
} from "./Header.styled"
import { UserContext } from "../context/UserContext"
import { publicRoutes } from "../routes/routes"
import { Button, Popover } from "antd"
import { clearTokens } from "../api/tokenStorage"
import { useNavigate } from "react-router-dom"

const NO_HEADER_ROUTES = [publicRoutes.INDEX]
const Header = () => {
  const { UserName, Id, FullName } = useContext(UserContext)
  const navigate = useNavigate()

  const registeredAccount = Id > 0

  if (NO_HEADER_ROUTES.includes(window.location.pathname)) {
    return null
  }

  const logout = () => {
    clearTokens()
    navigate(publicRoutes.INDEX)
  }

  return (
    <HeaderStyled>
      <HeaderContent>
        <Popover content={<Button onClick={logout}>logout</Button>}>
          <NameAndAccountInfoStyled>
            <UserNameStyled>
              {registeredAccount ? FullName : UserName}
            </UserNameStyled>
            <AccountInfoStyled>
              {registeredAccount ? "Registered" : "Guest"}
            </AccountInfoStyled>
          </NameAndAccountInfoStyled>
        </Popover>
      </HeaderContent>
    </HeaderStyled>
  )
}

export default Header
