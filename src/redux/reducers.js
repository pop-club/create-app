// 登录状态
function login (state = false, action) {
  if (action.type === 'login') {
    return true
  } else if (action.type === 'logout') {
    return false
  } else {
    return state
  }
}

// 用户信息
function userInfo (state = {}, action) {
  if (action.type === 'set') {
    return action.userInfo
  } else if (action.type === 'change') {
    return Object.assign(state, action.userInfo)
  } else {
    return state
  }
}

export default function reducers (state = {}, action) {
  return {
    login: login(state.login, action),
    userInfo: userInfo(state.userInfo, action)
  }
}
