import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { modalOpenAtom } from '@src/stores/authModalAtom'
import Modal from 'react-modal'
import * as m from '@src/common/styles/Auth/AuthModalStyle'
import LoginSection from './LoginSection'
import SignupSection from './SignupSection'

import { getCookie } from '@src/utils/loginCookie'
import {
  isLoginAtom,
  isAccessTokenAtom,
  isRefreshTokenAtom,
  isExpireTimeAtom,
} from '@src/stores/authAtom'
import base64 from 'base-64'

type Props = {}

const AuthModal = (props: Props) => {
  const [isLogin, setIsLogin] = useAtom(isLoginAtom)
  const [accessToken, setAccessToken] = useAtom(isAccessTokenAtom)
  const [refreshToken, setRefreshToken] = useAtom(isRefreshTokenAtom)
  const [expireTime, setExpireTime] = useAtom(isExpireTimeAtom)

  const parseJwt = (token: string) => {
    let payload = token.substring(
      token.indexOf('.') + 1,
      token.lastIndexOf('.'),
    )
    let decodingInfo = base64.decode(payload)
    return JSON.parse(decodingInfo)
  }

  useEffect(() => {
    if (getCookie('Authorization')) {
      setAccessToken('Bearer ' + getCookie('Authorization'))
      setRefreshToken(getCookie('refresh'))

      setIsLogin(true)
      const now = new Date().getTime()
      setExpireTime(now)
      console.log(parseJwt(getCookie('Authorization')))
    }
  }, [])

  const [isOpen, setIsOpen] = useAtom(modalOpenAtom)
  const [isLoginSection, SetIsLoginSection] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }
  const afterOpenModal = () => {}

  const ToggleSection = () => {
    SetIsLoginSection(!isLoginSection)
  }

  return (
    <>
      <m.Global />
      <m.MyModal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <m.Wrapper>
          <m.CloseBtn onClick={closeModal} />
          {isLoginSection ? <LoginSection /> : <SignupSection />}

          <m.OptionBtn>
            <m.ToggleBtn onClick={ToggleSection}>
              {isLoginSection
                ? `아직 회원이 아니신가요?`
                : `이미 회원이신가요?`}
            </m.ToggleBtn>
          </m.OptionBtn>
        </m.Wrapper>
      </m.MyModal>
    </>
  )
}

export default AuthModal
