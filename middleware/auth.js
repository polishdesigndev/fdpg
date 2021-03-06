import { getUser } from '@/utils/user'

export default function ({ route, redirect }) {
  console.log('middleware: auth')
  if (route.name === 'login') {
    if (!isAuth()) {
      return
    } else {
      return redirect('/')
    }
  }

  if (!isAuth()) {
    return redirect('/login')
  }
}
function isAuth() {
  console.log(getUser())
  // Check if user session exists somehow
  return getUser()
}
