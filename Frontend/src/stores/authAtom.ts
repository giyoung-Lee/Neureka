import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { User } from '@src/types/UserType'

export const isLoginAtom = atomWithStorage<boolean>('isLogin', false)

export const isAccessTokenAtom = atomWithStorage<string | null>(
  'accessToken',
  null,
)
export const isRefreshTokenAtom = atomWithStorage<string | null>(
  'refreshToken',
  null,
)
export const isExpireTimeAtom = atomWithStorage<number>('tokenExpireTime', 0)

export const isUserAtom = atomWithStorage<User>('userInfo', {
  nickname: null,
  email: null,
  phone: null,
  birth: null,
  gender: null,
})
