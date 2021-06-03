const { Scenes } = require('telegraf')
const { LOGIN_WIZARD_SCENE, FIND_PARTNER_SCENE } = require('./scenesName')
const SupportMessages = require('../messages/SupportMessages')
const { cityKeyboard, companionKeyboard } = require('../keyboards/keyboards')

const loginScene = new Scenes.WizardScene(
  LOGIN_WIZARD_SCENE,
  (ctx) => {
    ctx.session.user = {}

    ctx.reply(
      SupportMessages.enterName(),
      {parse_mode: 'HTML'}
    )

    return ctx.wizard.next()
  },
  (ctx) => {
    const userName = ctx.message.text
    ctx.session.user.name = userName
    console.log(ctx.session.user)

    ctx.reply(
      SupportMessages.enterSecondName(userName),
      {parse_mode: 'HTML'}
    )

    return ctx.wizard.next()
  },
  (ctx) => {
    const secondName = ctx.message.text
    ctx.session.user.secondName = secondName
    
    console.log(ctx.session.user)

    ctx.reply(
      SupportMessages.enterSpecialization(),
      {parse_mode: 'HTML'}
    )

    return ctx.wizard.next()
  },
  (ctx) => {
    const userSpecialization = ctx.message.text
    ctx.session.user.specialization = userSpecialization

    ctx.reply(
      SupportMessages.chooseCity(),
      {
        reply_markup: cityKeyboard(),
        parse_mode: 'HTML'
      }
    )
    console.log(ctx.session.user)
    return ctx.wizard.next()
  },
  (ctx) => {
    const city = ctx.message.text
    ctx.session.user.city = city

    ctx.reply(
      SupportMessages.mainMenuInfo(),
      {
        reply_markup: companionKeyboard(),
        parse_mode: 'HTML'
      }
    )
    console.log(ctx.session.user)

    return ctx.wizard.next()
  },
  (ctx) => {

    console.log('last step')
    if (ctx.message.text === '😉 Найти собеседника') {
      return ctx.scene.enter(FIND_PARTNER_SCENE)
    }

    return ctx.reply(SupportMessages.selectingActions())
  }
)

module.exports = loginScene