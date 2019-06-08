const FontFaceObserver = require('fontfaceobserver')

const fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Muli|Rock+Salt'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const muli = new FontFaceObserver('Muli')
  const rockSalt = new FontFaceObserver('Rock Salt')

  muli.load().then(() => {
    document.documentElement.classList.add('muli')
  })
  rockSalt.load().then(() => {
    document.documentElement.classList.add('rockSalt')
  })
}

export default fonts
