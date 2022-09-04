(() => {
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const submit = document.querySelector('#submit')

  submit.addEventListener('click', () => {
    if (email.value == "" || password == "") return alert('必选项不能为空')

    if(!judgeEmail(email.value)) return alert('请输入正确的邮箱地址')

    let userList = JSON.parse(localStorage.getItem('user'))

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].email == email.value) {
        if (userList[i].password == password.value) {
          sessionStorage.setItem('name', userList[i].first + userList[i].last)
          alert('登录成功')
          window.open('../index.html', '_self')
          return
        }
      }
    }
    return alert('账号或密码错误')
  })


  // 判断是否是正确的邮箱地址
  function judgeEmail(srt){
    let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
    return reg.test(srt)
  }



  document.querySelector('.logo').addEventListener('click',()=>{
    window.open('../index.html','_self')
  })
  

})()