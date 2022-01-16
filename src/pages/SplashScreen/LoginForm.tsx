import React, { VFC } from "react"
import {
  ButtonRow,
  InputStyled,
  LabelStyled,
  LoginFormStyled,
} from "./styled/LoginForm.styled"
import { Button } from "antd"
import { Credentials } from "../../api/auth"

interface Props {
  userName: string
  setUserName: (name: string) => void
  password: string
  setPassword: (password: string) => void
  handleLogin: (cred?: Credentials) => void
  loading: boolean
}

const LoginForm: VFC<Props> = ({
  setPassword,
  password,
  userName,
  setUserName,
  handleLogin,
  loading,
}) => {
  return (
    <LoginFormStyled>
      <LabelStyled>Username</LabelStyled>
      <InputStyled
        placeholder={"Username"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <LabelStyled>Password</LabelStyled>
      <InputStyled.Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonRow>
        <Button block loading={loading} onClick={() => handleLogin()}>
          Visit as a Guest
        </Button>
        <Button
          type={"primary"}
          block
          loading={loading}
          onClick={() =>
            handleLogin({ Username: userName, Password: password })
          }
        >
          Login
        </Button>
      </ButtonRow>
    </LoginFormStyled>
  )
}

export default LoginForm
