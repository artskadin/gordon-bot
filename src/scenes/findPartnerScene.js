const { Scenes } = require('telegraf')
const { FIND_PARTNER_SCENE } = require('./scenesName')
const FindPartnerController = require('../controllers/findPartnerController')

const findPartnerScene = new Scenes.BaseScene(FIND_PARTNER_SCENE)

findPartnerScene.enter(ctx => FindPartnerController.startFindPartner(ctx))
findPartnerScene.action(/^choose_partner/, ctx => FindPartnerController.choosePartner(ctx))
findPartnerScene.action('choose', ctx => FindPartnerController.sendRequest(ctx))
findPartnerScene.action('back', ctx => FindPartnerController.backToPartners(ctx))
findPartnerScene.action('random_partner', ctx => FindPartnerController.randomPartner(ctx))

module.exports = findPartnerScene