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
    "Hi, I'm a Software Engineer who loves to take on and solve complex problems. My previous experiences include an undergraduate degree in physics, two years in quality control in pharmaceuticals, and a year as an environmental educator. I am great with people and I can think on my feet to solve complex problems alone or on a team. I am excited to work with other driven people.",

  //  resume / projects
  resume: 'This will be the resume link',
  projects: 'This will be the projects link',

  //  socials / contact info
  email: 'maxccalabro@gmail.com',
  phone: '(845) 608-1842',
  linkedIn: 'https://www.linkedin.com/in/max-calabro/',
  gitHub: 'https://github.com/max-calabro'
}

const project1 = {
  name: 'Pac-Mini',
  description: "A rendition of Pac-man's first level",
  deployment: 'https://max-pac-mini.surge.sh/index.html',
  gitHub: 'https://github.com/max-calabro/Pac-Mini',
  screenshot: ''
}

const project2 = {
  name: 'BeerBook',
  description: 'An application for creating curated lists of beers',
  deployment: '',
  gitHub: 'https://github.com/Aaron-G-Sanchez/BeerBook-Frontend',
  screenshot: ''
}

const project3 = {
  name: 'Recipe Crafter',
  description: 'An application for recording recipes',
  deployment: '',
  gitHub: 'https://github.com/max-calabro/Recipe-Crafter',
  screenshot: ''
}

const project4 = {
  name: 'Behavior Tracker',
  description:
    'An application for student counselors to help track their students progress',
  deployment: '',
  gitHub: 'https://github.com/max-calabro/Behavior-Tracker',
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

let linkedIn = document.createElement('div')
linkedIn.className = 'button-linkedIn'
linkedIn.innerHTML = 'LinkedIn'

let gitHub = document.createElement('div')
gitHub.className = 'button-gitHub'
gitHub.innerHTML = 'GitHub'

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

const fillContactMe = () => {
  //document.querySelector('.contact-me').append('Contact Me\n')
  let siteInfoValues = Object.values(siteInfo)
  // for (let i = 0; i < 4; i++) {
  //   document.querySelector('.contact-me').append(`${siteInfoValues[i + 6]}\n`)
  // }
  document.querySelector('.contact-me').append(`${siteInfoValues[6]}\n`)
  document.querySelector('.contact-me').append(`${siteInfoValues[7]}\n`)
  document.querySelector('.contact-me').append(linkedIn)
  document.querySelector('.contact-me').append(gitHub)
}

setTimeout(() => {
  addSidebar() // also calls fill header
  mainDisplay()
  fillContactMe()
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
  document.querySelector('.main-display').style.height = '90vh'
  //document.querySelector('.main-display').style.width = '1000px'
  let section = document.createElement('section')
  document.querySelector('.main-display').append(section)
}

const mainViewWidth = (bool) => {
  let mainView = document.querySelector('.main-view')
  if (bool) {
    mainView.style.width = '50vh'
  } else {
    mainView.style.width = '0vh'
  }
}

const fillMainDisplay = (show) => {
  if (pageJustLoaded === true) {
    let mainView = document.createElement('div')
    mainView.className = 'main-view'
    document.querySelector('section').append(mainView)
    mainViewWidth(true)
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

const whichProject = (projectNumber) => {
  switch (projectNumber) {
    case 0:
      return project1
    case 1:
      return project2
    case 2:
      return project3
    case 3:
      return project4
    default:
      break
  }
}

const displayProjects = () => {
  document.querySelector('.main-view').innerHTML = ''

  let projectGrid = document.createElement('div')
  projectGrid.className = 'project-grid'
  document.querySelector('.main-view').append(projectGrid)

  for (let i = 0; i < 4; i++) {
    //  Project Div
    let div = document.createElement('div')
    div.className = `project-${i + 1}`
    let project = whichProject(i)
    //project.description

    //  Project Title
    let projectName = document.createElement('h4')
    projectName.className = 'project-title'
    projectName.innerHTML = project.name
    div.append(projectName)

    //  Project Description
    let projectDescription = document.createElement('p')
    projectDescription.className = 'project-description'
    projectDescription.innerHTML = project.description
    div.append(projectDescription)

    document.querySelector('.project-grid').append(div)
  }
  //  Turn on Listeners
  projectListeners()
}

const fillMainView = (siteInfoKey, changeToDot) => {
  changeToDot.innerHTML = '.'
  if (trackDot === 1) {
    //changeToDot.innerHTML = 'Resume download button!'
    mainViewWidth(false)
    showResume()
  } else if (trackDot === 2) {
    displayProjects()
  } else {
    mainViewWidth(true)
    if (resumeShowing === true) {
      let beGone = document.querySelector('.resume-image')
      beGone.remove()
      let youToo = document.querySelector('.image-container')
      youToo.remove()
      resumeShowing = false
    }
    document.querySelector('.main-view').innerHTML = siteInfoKey
  }
  undoDot()
}

const showResume = () => {
  let imageContainer = document.createElement('div')
  imageContainer.className = 'image-container'
  document.querySelector('section').append(imageContainer)

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

const followLink = (link) => {
  window.open(link, '_blank')
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
    if (resume.innerHTML !== '.') {
      fillMainDisplay('resume')
    }
  })

  document.querySelector('.button-projects').addEventListener('click', () => {
    fillMainDisplay('projects')
  })

  document
    .querySelector('.button-contactInfo')
    .addEventListener('click', () => {
      fillMainDisplay('contactInfo')
    })

  document.querySelector('.button-linkedIn').addEventListener('click', () => {
    followLink(siteInfo.linkedIn)
  })

  document.querySelector('.button-gitHub').addEventListener('click', () => {
    followLink(siteInfo.gitHub)
  })
}

const projectListeners = () => {
  document.querySelector('.project-1').addEventListener('click', () => {
    followLink(project1.gitHub)
  })

  document.querySelector('.project-1').addEventListener('click', () => {
    followLink(project2.gitHub)
  })

  document.querySelector('.project-1').addEventListener('click', () => {
    followLink(project3.gitHub)
  })

  document.querySelector('.project-1').addEventListener('click', () => {
    followLink(project4.gitHub)
  })
}
