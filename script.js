const siteInfo = {
  name: 'Max Clark Calabro',
  title: 'Software Engineer'
}

const test = () => {
  document.querySelector('.name').innerHTML =
    siteInfo.name + ', ' + siteInfo.title
}
test()
