const {Markup, MemorySessionStore} = require('telegraf')

const cityKeyboard = () => {
  return Markup.keyboard([
    ['Санкт-Петербург', 'Тюмень']
  ]).oneTime(true).resize(true).reply_markup
}

const companionKeyboard = () => {
  return Markup.keyboard([
    ['🤝 Найти партнера'], 
    ['😉 Найти собеседника']
  ]).oneTime(true).resize(true).reply_markup
}

const partnersKeyboard = () => {
  const partnersList = [
    {text: 'Хаянов Дмитрий', callback_data: 'choose_partner_1'},
    {text: 'Завладеев Денис', callback_data: 'choose_partner_2'},
    {text: 'Зуев Антон', callback_data: 'choose_partner_3'},
    {text: 'Лебедева Наталья', callback_data: 'choose_partner_4'},
    {text: 'Жукова Екатерина', callback_data: 'choose_partner_5'},
    {text: 'Поляков Сергей', callback_data: 'choose_partner_6'}
  ]

  const keyboard = []

  keyboard.push([{text: '⭐ Случайный собеседник', callback_data: 'random_partner'}])
  partnersList.map(partner => keyboard.push([partner]))

  return Markup.inlineKeyboard(keyboard).reply_markup
}

const profileKeyboard = () => {
  return Markup.inlineKeyboard([
    [
      {text: '✅ Выбор', callback_data: 'choose'}, 
      {text: '↩️ Назад', callback_data: 'back'}
    ]
  ]).reply_markup
}

const mainMenuKeyboard = () => {
  return Markup.keyboard([
    ['🔃 Сменить статус'],
    ['↩️ Назад']
  ]).oneTime(true).resize(true).reply_markup
}

module.exports = {
  cityKeyboard,
  companionKeyboard,
  partnersKeyboard,
  profileKeyboard,
  mainMenuKeyboard
}