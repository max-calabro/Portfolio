//
//  Notes
/* 
##projects: links to deploy and github, and make it obvious it can be clicked
##'frame the project' better in the description, not everyone is going to follo the links but I still want them to know why this matters
##if they click away they might not come back
to simple on color, add some accent
 */

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
  // aboutMe:
  //   "I'm a Software Engineer who loves to take on and solve complex problems. My previous experiences includes an undergraduate degree in physics, two years in quality control in pharmaceuticals, and a year as an environmental educator. I am great with people and I can think on my feet to solve complex problems alone or on a team. I am excited to work with other driven people.",

  aboutMe: `my enthusiasm for a career in software engineering stems from a lifelong love of seeking out complex problems to solve. From learning how to solve a rubix cube as a young boy to more recently when I created a functional behavior tracker following a conversation with a school counselor who was having difficulty with the paper based system in her school. I have always found immense pride in finding creative solutions to difficult problems.`,
  background:
    'Previous to my career change, I spent 2 years working in quality control for a pharmaceutical company which taught me the importance of consistency both in work production and in self motivation. I also have spent one year as an environmental educator. This job helped me hone skills in breaking down complex topics and ensuring comprehension. I believe this work experience would be especially beneficial to a career in SE as it would aid me in collaborating with other departments. I also have an undergraduate degree in physics which gives me a strong foundation to build skills from.',
  aboutMe3:
    'I am excited to work with other driven professionals and continue to grow in this field. I believe my work and school experience make me a qualified and unique candidate.',

  //  resume / projects
  resume: 'This will be the resume link',
  resumeDoc:
    'https://docs.google.com/document/d/1bIbR1d4b-5jVWzM_N-S2pR8XNCIn1wzjMyGl7Xdktt4/edit?usp=sharing',
  projects: 'This will be the projects link',

  //  socials / contact info
  email: 'maxccalabro@gmail.com',
  phone: '(617) 807-0683',
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

//  Icons
const icons = {
  email: 'images/icon-email.png',
  phone: 'images/icon-phone.png',
  linkedIn: 'images/icon-linkedin-black.png',
  gitHub: 'images/icon-github.png'
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

//  Icon buttons and containers
//  Email
let emailIconContainer = document.createElement('a')
emailIconContainer.setAttribute('href', 'mailto:maxccalabro@gmail.com')
emailIconContainer.className = 'icon-email-container'

let emailIcon = new Image()
emailIcon.className = 'icon-email'
emailIcon.src = 'images/icon-email.png'

//  Phone
let phoneIconContainer = document.createElement('div')
phoneIconContainer.className = 'icon-phone-container'

let phoneIcon = new Image()
phoneIcon.className = 'icon-phone'
phoneIcon.src = 'images/icon-phone.png'

//  LinkedIn
let linkedInIconContainer = document.createElement('div')
linkedInIconContainer.className = 'icon-linkedIn-container'

let linkedInIcon = new Image()
linkedInIcon.className = 'icon-linkedIn'
linkedInIcon.src = 'images/icon-linkedin-black.png'

//  GitHub
let gitHubIconContainer = document.createElement('div')
gitHubIconContainer.className = 'icon-gitHub-container'

let gitHubIcon = new Image()
gitHubIcon.className = 'icon-gitHub'
gitHubIcon.src = 'images/icon-github.png'

//  Contact Info Div
let contactInfoDiv = document.createElement('div')

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
  enterView.innerHTML = siteInfo.name + ' | Portfolio'
  document.querySelector('body').append(enterView)
  setTimeout(() => {
    removeEnterView()
  }, 3000)
}
enterView()

const removeEnterView = () => {
  document.querySelector('.enter-view').remove()
}

const addSidebar = () => {
  document.createElement('div')
  fillSidebar()
}

const CreateAndFillNavbar = () => {
  //  Build Navbar
  let navbar = document.createElement('div')
  navbar.className = 'navbar'
  document.querySelector('header').append(navbar)

  //  Fill Navbar
  let siteInfoValues = Object.values(siteInfo)
  //  Icons
  document.querySelector('.navbar').append(emailIconContainer)
  emailIconContainer.append(emailIcon)
  document.querySelector('.navbar').append(phoneIconContainer)
  phoneIconContainer.append(phoneIcon)
  document.querySelector('.navbar').append(linkedInIconContainer)
  linkedInIconContainer.append(linkedInIcon)
  document.querySelector('.navbar').append(gitHubIconContainer)
  gitHubIconContainer.append(gitHubIcon)

  //  Real Info
  // document.querySelector('.navbar').append(`${siteInfoValues[6]}\n`)
  // document.querySelector('.navbar').append(`${siteInfoValues[7]}\n`)
  // document.querySelector('.navbar').append(linkedIn)
  // document.querySelector('.navbar').append(gitHub)
}

setTimeout(() => {
  addSidebar() // also calls fill header
  mainDisplay()
  CreateAndFillNavbar()
  createListeners()
  fillMainDisplay('initial load')
}, 3100)

const addGreyBar = () => {}

const fillSidebar = () => {
  //  Buttons
  //document.querySelector('.sidebar').prepend(contactInfo)
  document.querySelector('.sidebar').prepend(projects)
  document.querySelector('.sidebar').prepend(resume)
  document.querySelector('.sidebar').prepend(aboutMe)

  //Container for name and title
  let nameTitleContainer = document.createElement('div')
  nameTitleContainer.className = 'name-title'
  document.querySelector('.sidebar').prepend(nameTitleContainer)

  //  Title
  let sidebarTitle = document.createElement('h3')
  sidebarTitle.className = 'title'
  document.querySelector('.name-title').prepend(sidebarTitle)
  document.querySelector('.title').innerHTML = siteInfo.title + '<br></br>'

  //  Name
  let sidebarName = document.createElement('h1')
  sidebarName.className = 'name'
  document.querySelector('.name-title').prepend(sidebarName)
  document.querySelector('.name').innerHTML = siteInfo.name + '<br></br>'
}

const mainDisplay = () => {
  document.querySelector('.main-display').style.height = '90vh'
  //document.querySelector('.main-display').style.width = '1000px'
  let section = document.createElement('section')
  document.querySelector('.main-display').append(section)

  //  Add Grey Bar To Name
  addGreyBar()
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
    // case 'contactInfo':
    //   trackDot = 3
    //   fillMainView(siteInfo.email, contactInfo)
    //   break
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

const displayAboutMe = (siteInfoKey) => {
  //  Remove Previous Text
  document.querySelector('.main-view').innerHTML = ''

  //  Create About Me Container
  let aboutMeContainer = document.createElement('div')
  aboutMeContainer.className = 'about-me-container'
  document.querySelector('.main-view').append(aboutMeContainer)

  //  Create Hi Div
  let hiDiv = document.createElement('div')
  hiDiv.className = 'hi'
  hiDiv.innerHTML = 'Hi,'

  //  Create About Me Div
  let aboutMeDiv = document.createElement('p')
  aboutMeDiv.className = 'about-me'
  aboutMeDiv.innerHTML = `${siteInfoKey}` //<br>${siteInfo.background}<br></br> <br><br>${siteInfo.aboutMe3}

  //  Fill About Me Div
  aboutMeContainer.append(hiDiv)
  aboutMeContainer.append(aboutMeDiv)
}

const resetMainView = () => {
  mainViewWidth(true)
  removeResumeLink()
  if (resumeShowing === true) {
    let beGone = document.querySelector('.resume-image')
    beGone.remove()
    let youToo = document.querySelector('.image-container')
    youToo.remove()
    resumeShowing = false
  }
}
const fillMainView = (siteInfoKey, changeToDot) => {
  changeToDot.innerHTML = '.'
  if (trackDot === 1) {
    //changeToDot.innerHTML = 'Resume download button!'
    mainViewWidth(false)
    showResume()
  } else if (trackDot === 2) {
    resetMainView()
    displayProjects()
  } else {
    resetMainView()
    if (changeToDot === aboutMe) {
      displayAboutMe(siteInfoKey)
    } else {
      document.querySelector('.main-view').innerHTML = siteInfoKey
    }
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
  setUpResumeLink()
  undoDot()
}

const setUpResumeLink = () => {
  let div = document.createElement('div')
  div.className = 'div-for-button'
  document.querySelector('.contact-me').append(div)

  let resumeDocLink = document.createElement('button')
  resumeDocLink.className = 'resume-doc-link'
  document.querySelector('.div-for-button').append(resumeDocLink)
  document.querySelector('.resume-doc-link').innerHTML = 'Resume on Google Docs'

  //turn on listener

  resumeListener()
}

const removeResumeLink = () => {
  let elems = document.getElementsByClassName('div-for-button')
  while (elems.length > 0) elems[0].remove()
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

const displayIconInfo = (whichIcon) => {
  contactInfoDiv.innerHTML = ''
  if (whichIcon === 'email') {
    contactInfoDiv.innerHTML = siteInfo.email
  } else if (whichIcon === 'phone') {
    contactInfoDiv.innerHTML = siteInfo.phone
  }
  document.querySelector('.contact-me').append(contactInfoDiv)
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

  // document
  //   .querySelector('.button-contactInfo')
  //   .addEventListener('click', () => {
  //     fillMainDisplay('contactInfo')
  //   })

  document.querySelector('.icon-linkedIn').addEventListener('click', () => {
    followLink(siteInfo.linkedIn)
  })

  document.querySelector('.icon-gitHub').addEventListener('click', () => {
    followLink(siteInfo.gitHub)
  })

  document.querySelector('.icon-email').addEventListener('click', () => {
    //displayIconInfo('email')
  })

  document.querySelector('.icon-phone').addEventListener('click', () => {
    displayIconInfo('phone')
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

const resumeListener = () => {
  document.querySelector('.resume-doc-link').addEventListener('click', () => {
    followLink(siteInfo.resumeDoc)
  })
}
