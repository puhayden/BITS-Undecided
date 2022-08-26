(() => {
  const first = document.querySelector('#first')
  const last = document.querySelector('#last')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const choice = document.querySelector('#choice')
  const submit = document.querySelector('#submit')


  submit.addEventListener('click', () => {
    if (first.value == "" || last.value == "" || email.value == "" || password.value == "" || !choice.checked) return alert('必选项不能为空')

    let userList = [{
      first: first.value,
      last: last.value,
      email: email.value,
      password: password.value,
    }]

    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(user != null){
      userList.push(...user)
      console.log(userList)
    }

    localStorage.setItem('user', JSON.stringify(userList))


    alert('注册成功!')
    window.open('Login.html','_self')


    first.value = ""
    last.value = ""
    email.value = ""
    password.value = ""

  })





})()