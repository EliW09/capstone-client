'use strict'

// Interacting with site logic

const onLoad = () => {
    $('.settingsp').hide()
    $('.main').hide()
    $('.authp').show()
}

const onLogIn = () => {
    $('.authp').hide()
    $('.main').show()
    $('.settingsp').hide()
}

const onLogOut = () => {
    $('.main').hide()
    $('.settingsp').hide()
    $('.authp').show()
}

const openAccount = () => {
    $('.main').hide()
    $('.settingsp').show()
}

module.exports = {
    onLoad,
    onLogIn,
    onLogOut,
    openAccount
}