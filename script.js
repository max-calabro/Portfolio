//
//  variables
//
const siteInfo = {
  //  who me?
  name: 'Max Clark Calabro',
  title: 'Software Engineer',
  whatIDo:
    'I am a full stack engineer with a background in physics. Some other stuff blah blah.',

  //  about me
  aboutMe: 'This will be a big paragraph about me',

  //  resume
  resume: 'This will be the resume link',

  //  socials / contact info
  linkedIn: 'This will be the LinkedIn link',
  gitHub: 'This will be the GitHub link',
  email: 'maxccalabro@gmail.com'
}

const project1 = {
  name: '',
  description: '',
  deployment: '',
  gitHub: '',
  screenshot: ''
}

const project2 = {
  name: '',
  description: '',
  deployment: '',
  gitHub: '',
  screenshot: ''
}

const project3 = {
  name: '',
  description: '',
  deployment: '',
  gitHub: '',
  screenshot: ''
}

//
//  functions
//
const enterView = () => {
  let enterView = document.createElement('div')
  enterView.className = 'enter-view'
  enterView.innerHTML = siteInfo.name + ' Portfolio'
  document.querySelector('body').append(enterView)
  setTimeout(() => {
    removeEnterView()
  }, 3000)
}
enterView()

const removeEnterView = () => {
  document.querySelector('.enter-view').remove()
}

const addHeader = () => {
  document.createElement('header')
  fillHeader()
}
setTimeout(() => {
  addHeader()
  mainDisplay()
}, 3000)

const fillHeader = () => {
  let headerInfo = document.createElement('h4')
  headerInfo.className = 'name'
  document.querySelector('header').append(headerInfo)
  document.querySelector('.name').innerHTML =
    siteInfo.name +
    '<br></br>' +
    siteInfo.title +
    '<br></br>' +
    '<br></br>' +
    'resume link' +
    '<br></br>' +
    'project link' +
    '<br></br>' +
    'contact info link' +
    '<br></br>'
}

const mainDisplay = () => {
  let section = document.createElement('section')
  document.querySelector('.main-display').append(section)
}

const fillMainDisplay = () => {
  console.log('loaded')
  //  set up a switch that will fill the main display based on what is clicked
}

//
//  listeners
//

//  event listener that sends info to fillMainDisplay
