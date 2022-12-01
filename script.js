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
  gitHub: 'This will be the GitHub link'
}

const test = () => {
  document.querySelector('.name').innerHTML =
    siteInfo.name + ', ' + siteInfo.title
}
test()
