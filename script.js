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
  //  fade onto the page a second after? Top left to bottom right? What do you mean too much fading?
  aboutMe:
    'I am a Software Engineer who loves to take on and solve complex problems. My previous experiences include an undergraduate degree in physics, two years in quality control in pharmaceuticals, and a year as an environmental educator. I am great with people and I can think on my feet to solve complex problems alone or on a team. I am excited to work with other driven people.',

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

//  track if resume is showing
let resumeShowing = false

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

const addSidebar = () => {
  document.createElement('div')
  fillSidebar()
}
setTimeout(() => {
  addSidebar() // also calls fill header
  mainDisplay()
  createListeners()
  fillMainDisplay('initial load')
}, 1000)

const fillSidebar = () => {
  document.querySelector('.sidebar').prepend(contactInfo)
  document.querySelector('.sidebar').prepend(projects)
  document.querySelector('.sidebar').prepend(resume)
  document.querySelector('.sidebar').prepend(aboutMe)
  let sidebarInfo = document.createElement('h4')
  sidebarInfo.className = 'name'
  document.querySelector('.sidebar').prepend(sidebarInfo)
  document.querySelector('.name').innerHTML =
    siteInfo.name + '<br></br>' + siteInfo.title + '<br></br>'
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
    showResume()
  } else {
    if (resumeShowing === true) {
      let beGone = document.querySelector('.resume-image')
      beGone.remove()
      resumeShowing = false
    }
    document.querySelector('.main-view').innerHTML = siteInfoKey
  }
  undoDot()
}

const showResume = () => {
  let resumeImage = document.createElement('img')
  resumeImage.className = 'resume-image'
  resumeImage.src = 'images/MaxCalabroPortfolioDisplayResume.jpg'
  document.querySelector('.image-container').append(resumeImage)
  document.querySelector('.main-view').innerHTML = ''
  resumeShowing = true
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
    contactInfo.innerHTML = 'Contact Me'
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
