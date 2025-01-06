// 1
const timer1 = document.querySelector('.timer1');
const timerBtn1 = document.querySelector('.timer-btn1')

timerBtn1.addEventListener('click', () => {
  timerBtn1.setAttribute('disabled', '')
  let i = 0;
  let timer = setInterval(() => {
    i++
    timer1.textContent = 60 - i
    
    if(i === 60){
      timerBtn1.removeAttribute('disabled')
      timer1.textContent = 60
      clearInterval(timer)

    }
    
  }, 60000)
});

// 2
const timer2 = document.querySelector('.timer2');
const timerBtn2 = document.querySelector('.timer-btn2')
const timerAlert = document.querySelector('.timer-alert')

timerBtn2.addEventListener('click', () => {
  timerBtn2.setAttribute('disabled', '')
  let i = 0;
  let timer = setInterval(() => {
    i++
    timer2.textContent = 30 - i
    
    if(i === 30){
      timerBtn2.removeAttribute('disabled')
      timer2.textContent = 30
      clearInterval(timer)
    } else if(i === 20){
      timerAlert.classList.remove('is-hidden')
    } else if(i === 25){
      timerAlert.classList.add('is-hidden')
    }
    
  }, 1000)
});