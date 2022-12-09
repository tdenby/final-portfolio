const buttons = document.querySelector("#nav-buttons")

//this StackOverflow link really helped me with this https://stackoverflow.com/questions/16176648/trying-to-do-a-css-transition-on-a-class-change
document.querySelector(".icon").addEventListener('click', () => {
  buttons.classList.toggle('slideDown')
  console.log('sliding...')
})