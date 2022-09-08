(() => {
  const first = document.querySelector('#first')
  const last = document.querySelector('#last')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const choice = document.querySelector('#choice')
  const submit = document.querySelector('#submit')


  submit.addEventListener('click', () => {
    if (first.value == "" || last.value == "" || email.value == "" || password.value == "") return alert('Required option cannot be empty')

    if(!judgeEmail(email.value)) return alert('Please enter the correct email address')


    let userList = [{
      first: first.value,
      last: last.value,
      email: email.value,
      password: password.value,
    }]

    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if (user != null) {
      userList.push(...user)
      console.log(userList)
    }

    localStorage.setItem('user', JSON.stringify(userList))


    alert('Registration successful!')
    window.open('Login.html', '_self')


    first.value = ""
    last.value = ""
    email.value = ""
    password.value = ""

  })


  // 判断是否是正确的邮箱地址
  function judgeEmail(srt){
    let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
    return reg.test(srt)
  }


  document.querySelector('.logo').addEventListener('click', () => {
    window.open('../index.html', '_self')
  })
})()
