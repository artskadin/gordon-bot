const { Telegraf, Scenes, session } = require('telegraf')
const BOT_TOKEN = require('../config')
const loginScene = require('./scenes/loginScene')
const findPartnerScene = require('./scenes/findPartnerScene')
const LoginController = require('./controllers/loginController')

const bot = new Telegraf(process.env.BOT_TOKEN || BOT_TOKEN)
const stage = new Scenes.Stage([loginScene, findPartnerScene])

bot.use(session())
bot.use(stage.middleware())

bot.command('start', ctx => LoginController.enterScene(ctx))

bot.launch()