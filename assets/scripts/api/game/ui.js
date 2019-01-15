'use strict'
const toastr = require('toastr')
const store = require('../../store.js')

const questionSuccess = (response) => {
    $('.content').empty()
    $('.content').text(response.story.context)
}

const foundEnding = () => {
    toastr.success('You found a ending!')
    $('.start').show()
    $('.branch6').hide()
    $('.branch7').hide()
    $('.branch4').hide()
    $('.branch5').hide()
    $('.branch11').hide()
    $('.branch12').hide()
    $('.branch8').hide()
    $('.branch10').hide()
    $('.branch13').hide()
    $('.branch14').hide()
    $('.branch15').hide()
    $('.branch16').hide()
    $('.branch17').hide()
}

const mainFailure = () => {
    toastr.error('FAILED')
}

const gameCreateSuccess = (response) => {
    store.gameInfo = response.game
}

module.exports = {
    questionSuccess,
    foundEnding,
    mainFailure,
    gameCreateSuccess
}