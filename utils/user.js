const USER_KEY_NAME = 'ozj32uqurm'
const ACQUIRED_KEY_NAME = 'u3fm32k6rul3nk4'

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY_NAME))
}
export function setUser(user) {
  localStorage.setItem(USER_KEY_NAME, user)
}
export function clearUser() {
  localStorage.removeItem(USER_KEY_NAME)
}

export function charAcquired() {
  if (window.innerWidth > 1024) {
    // 桌機版直接顯示
    return true
  }
  return localStorage.getItem(ACQUIRED_KEY_NAME)
}

export function logout() {
  localStorage.removeItem(USER_KEY_NAME)
  localStorage.removeItem(ACQUIRED_KEY_NAME)
  setTimeout(() => {
    window.location.reload()
  }, 50)
}
