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

//  buttons
let resume = document.createElement('div')
resume.className = 'button-resume'
resume.innerHTML = 'Resume'

let projects = document.createElement('div')
projects.className = 'button-projects'
projects.innerHTML = 'Projects'

let contactInfo = document.createElement('div')
contactInfo.className = 'button-contactInfo'
contactInfo.innerHTML = 'Contact Info'

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
  }, 1000)
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
  addHeader() // also calls fill header
  mainDisplay()
  createListeners()
  fillMainDisplay('initial load')
}, 1000)

const fillHeader = () => {
  let headerInfo = document.createElement('h4')
  headerInfo.className = 'name'
  document.querySelector('header').append(headerInfo)
  document.querySelector('.name').innerHTML =
    siteInfo.name + '<br></br>' + siteInfo.title + '<br></br>'
  document.querySelector('header').append(resume)
  document.querySelector('header').append(projects)
  document.querySelector('header').append(contactInfo)
}

const mainDisplay = () => {
  document.querySelector('.main-display').style.height = '100px'
  document.querySelector('.main-display').style.width = '100px'
  let section = document.createElement('section')
  document.querySelector('.main-display').append(section)
}

const fillMainDisplay = (show) => {
  switch (show) {
    case 'resume':
      console.log(show)
      //  call a function called showResume
      break
    case 'projects':
      console.log(show)
      //  call a function called showprojects
      break
    case 'contactInfo':
      console.log(show)
      //  call a function called showcontactInfo
      break
    default:
      console.log('default')
      //  call a function called showAboutMe
      break
  }
}

//
//  listeners
//

//  event listener that sends info to fillMainDisplay
const createListeners = () => {
  document.querySelector('.button-resume').addEventListener('click', () => {
    fillMainDisplay('resume')
  })

  document.querySelector('.button-projects').addEventListener('click', () => {
    fillMainDisplay('projects')
  })

  document
    .querySelector('.button-contactInfo')
    .addEventListener('click', () => {
      fillMainDisplay('contactInfo')
    })
}
