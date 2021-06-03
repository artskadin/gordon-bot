const { LOGIN_WIZARD_SCENE } = require('../scenes/scenesName')

class LoginController {
  enterScene(ctx) {
    return ctx.scene.enter(LOGIN_WIZARD_SCENE)
  }
}

module.exports = new LoginController()