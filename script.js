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

  //  resume / projects
  resume: 'This will be the resume link',
  projects: 'This will be the projects link',

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
let aboutMe = document.createElement('div')
aboutMe.className = 'button-aboutMe'
aboutMe.innerHTML = 'About Me'

let resume = document.createElement('div')
resume.className = 'button-resume'
resume.innerHTML = 'Resume'

let projects = document.createElement('div')
projects.className = 'button-projects'
projects.innerHTML = 'Projects'

let contactInfo = document.createElement('div')
contactInfo.className = 'button-contactInfo'
contactInfo.innerHTML = 'Contact Info'

//  track which element is a dot
let trackDot = 0

//  track if the page just loaded or if user has clicked
let pageJustLoaded = true

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
  document.querySelector('header').append(aboutMe)
  document.querySelector('header').append(resume)
  document.querySelector('header').append(projects)
  document.querySelector('header').append(contactInfo)
}

const mainDisplay = () => {
  document.querySelector('.main-display').style.height = '1000px'
  document.querySelector('.main-display').style.width = '1000px'
  let section = document.createElement('section')
  document.querySelector('.main-display').append(section)
}

const fillMainDisplay = (show) => {
  if (pageJustLoaded === true) {
    let mainView = document.createElement('div')
    mainView.className = 'main-view'
    document.querySelector('section').append(mainView)
    pageJustLoaded = false
  }
  switch (show) {
    case 'aboutMe':
      trackDot = 0
      fillMainView(siteInfo.aboutMe, aboutMe)
      break
    case 'resume':
      trackDot = 1
      fillMainView(siteInfo.resume, resume)
      break
    case 'projects':
      trackDot = 2
      fillMainView(siteInfo.projects, projects)
      break
    case 'contactInfo':
      trackDot = 3
      fillMainView(siteInfo.email, contactInfo)
      break
    default:
      trackDot = 0
      fillMainView(siteInfo.aboutMe, aboutMe)
      break
  }
}

const fillMainView = (siteInfoKey, changeToDot) => {
  changeToDot.innerHTML = '.'
  if (trackDot === 1) {
    console.log('here')
    let resumeImage = document.createElement('div')
    resumeImage.className = 'resume-image'
    document.querySelector('.main-view').append(resumeImage)
    document.querySelector('.main-view').innerHTML = ''
  } else {
    document.querySelector('.main-view').innerHTML = siteInfoKey
  }
  undoDot()
}

const undoDot = () => {
  switch (trackDot) {
    case 0:
      ChangeAllButOne(0)
      break
    case 1:
      ChangeAllButOne(1)
      break
    case 2:
      ChangeAllButOne(2)
      break
    case 3:
      ChangeAllButOne(3)
      break
    default:
      break
  }
}

const ChangeAllButOne = (dotValue) => {
  if (dotValue != 0) {
    aboutMe.innerHTML = 'About Me'
  }
  if (dotValue != 1) {
    resume.innerHTML = 'Resume'
  }
  if (dotValue != 2) {
    projects.innerHTML = 'Projects'
  }
  if (dotValue != 3) {
    contactInfo.innerHTML = 'Contact Info'
  }
}
//
//  listeners
//

//  event listener that sends info to fillMainDisplay
const createListeners = () => {
  document.querySelector('.button-aboutMe').addEventListener('click', () => {
    fillMainDisplay('aboutMe')
  })

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
