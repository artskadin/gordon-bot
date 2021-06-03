const { FIND_PARTNER_SCENE } = require('../scenes/scenesName')
const SupportMessages = require('../messages/SupportMessages')
const { partnersKeyboard, profileKeyboard } = require('../keyboards/keyboards')

class FindPartnerController {
  async startFindPartner(ctx) {
    await ctx.reply(
      SupportMessages.findPartner(),
      {
        parse_mode: 'HTML', 
        reply_markup: partnersKeyboard()
      }
    )
  }

  async choosePartner(ctx) {
    const partnersList = [
      {text: 'Хаянов Дмитрий', callback_data: 'choose_partner_1'},
      {text: 'Завладеев Денис', callback_data: 'choose_partner_2'},
      {text: 'Зуев Антон', callback_data: 'choose_partner_3'},
      {text: 'Лебедева Наталья', callback_data: 'choose_partner_4'},
      {text: 'Жукова Екатерина', callback_data: 'choose_partner_5'},
      {text: 'Поляков Сергей', callback_data: 'choose_partner_6'}
    ]

    const user = partnersList.find(
      partner => partner.callback_data === ctx.callbackQuery.data
    )

    await ctx.editMessageText(
      SupportMessages.partnerInfo(user.text),
      {
        parse_mode: 'HTML', 
        reply_markup: profileKeyboard()
      }
    )
  }

  async sendRequest(ctx) {
    await ctx.editMessageText(
      SupportMessages.succeessRequest(),
      {
        parse_mode: 'HTML', 
        reply_markup: partnersKeyboard()
      }
    )
  }

  backToPartners(ctx) {
    ctx.editMessageText(
      SupportMessages.findPartner(),
      {
        parse_mode: 'HTML', 
        reply_markup: partnersKeyboard()
      }
    )
  }

  randomPartner(ctx) {
    ctx.editMessageText(
      SupportMessages.succeessRandomRequest(),
      {
        parse_mode: 'HTML', 
        reply_markup: partnersKeyboard()
      }
    )
  }
}

module.exports = new FindPartnerController()