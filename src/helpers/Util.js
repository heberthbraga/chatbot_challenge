import faker from 'faker'

const ReplyOptions = {
  YES: 'yes',
  NO: 'no'
}

const generateRandomRegister = () => {
  let randomName = faker.name.findName()
  let randomEmail = faker.internet.email()

  return {
    name: randomName,
    email: randomEmail
  }
}

export default { ReplyOptions, generateRandomRegister }