let index = 1 //下标 
let time = null //定时器
let timeDate = 3000 //切换的间隔时间

let antiShake = true


window.addEventListener('load', () => {
  let swiperWrapper = document.querySelector('.swiper-wrapper')
  let swiperSlide = document.querySelectorAll('.swiper-slide')
  let array = [swiperSlide[1], ...swiperSlide, swiperSlide[0]]
  // 初始化页面
  // swiperWrapper.appendChild(swiperSlide[0])
  swiperWrapper.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    swiperWrapper.innerHTML += array[i].outerHTML
  }

  swiperWrapper.style.width = `${array.length * 100}%`
  swiperWrapper.style.transform = `translateX(-${100 / array.length * index}%)`
  // 初始化页面 end




  document.querySelector('#swiper-left').addEventListener('click', () => {
    stopTime()
    goLeft()
  })
  document.querySelector('#swiper-right').addEventListener('click', () => {
    stopTime()
    goRight()
  })




  // left
  function goLeft() {
    if (!antiShake) return 
    antiShake = false
    if (index == 0) {
      index = array.length - 1
    }
    else {
      index--
    }
    goJump()

   

    swiperWrapper.style.transition = `all 1s`;
    swiperWrapper.style.transform = `translateX(-${100 / array.length * index}%)`
  }
  // right
  function goRight() {
    if (!antiShake) return 
    antiShake = false
    if (index == array.length - 1) {
      index = 0
    }
    else {
      index++
    }
    goJump()




    swiperWrapper.style.transition = `all 1s`;
    swiperWrapper.style.transform = `translateX(-${100 / array.length * index}%)`
  }

  // 判断是否在最前/最后
  function goJump() {
    swiperWrapper.addEventListener('transitionend', () => {
 
      if (index == 0) index = array.length - 2

      if (index == array.length - 1) index = 1
  
      swiperWrapper.style.transition = ``;
      swiperWrapper.style.transform = `translateX(-${100 / array.length * index}%)`

      antiShake = true
    })
  }


  // 定时器
  function automatic() {
    time = setInterval(() => {
      goRight()
    }, timeDate)
  }
  automatic()
  // 当手动切换时 停止定时器 并且切换
  let timeout = null
  function stopTime() {
    clearInterval(time)
    clearTimeout(timeout)
    time = null
    timeout = null
    timeout = setTimeout(() => automatic(), 5000)
  }
})









