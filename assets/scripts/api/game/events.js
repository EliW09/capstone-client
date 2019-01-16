'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../../store.js')
const getFormFields = require('../../../../lib/get-form-fields.js')

const startANewGame = (event) => {
    event.preventDefault()
    $('.start').hide()
    $('.games').empty()
    $('.restart').hide()
    $('.start1').show()
    $('.start2').show()
    api.getQuestionOne()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
    api.createGame()
      .then(ui.gameCreateSuccess)
      .catch(ui.mainFailure)
}

const branchUp = (event) => {
    event.preventDefault()
    $('.start1').hide()
    $('.games').empty()
    $('.start11').hide()
    $('.start2').hide()
    $('.branch1').show()
    $('.branch2').show()
    api.getQuestionTwo()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDown = (event) => {
    event.preventDefault()
    $('.start1').hide()
    $('.games').empty()
    $('.start11').hide()
    $('.start2').hide()
    $('.branch1').show()
    $('.branch2').show()
    api.getQuestion()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownTwo = (event) => {
    event.preventDefault()
    $('.start1').hide()
    $('.games').empty()
    $('.start11').hide()
    $('.start2').hide()
    $('.branch1').show()
    $('.start11').show()
    api.getQuestionThree()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchUpCont = (event) => {
    event.preventDefault()
    $('.branch1').hide()
    $('.start1').hide()
    $('.games').empty()
    $('.start11').hide()
    $('.branch3').show()
    $('.branch2').show()
    api.getQuestionFour()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchUpContTwo = (event) => {
    event.preventDefault()
    $('.branch3').hide()
    $('.games').empty()
    $('.branch2').hide()
    $('.branch4').show()
    $('.branch5').show()
    api.getQuestionThirteen()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchUpContThree = (event) => {
    event.preventDefault()
    $('.branch4').hide()
    $('.games').empty()
    $('.branch5').hide()
    $('.branch13').show()
    $('.branch14').show()
    api.getQuestionFourteen()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchUpContFour = (event) => {
    event.preventDefault()
    $('.branch13').hide()
    $('.games').empty()
    $('.branch14').hide()
    $('.branch16').show()
    $('.branch15').show()
    api.getQuestionSixteen()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchUpContFive = (event) => {
    event.preventDefault()
    $('.branch16').hide()
    $('.games').empty()
    $('.branch15').hide()
    $('.branch17').show()
    $('.branch8').show()
    api.getQuestionSeven()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownCont = (event) => {
    event.preventDefault()
    $('.branch1').hide()
    $('.games').empty()
    $('.branch2').hide()
    $('.branch3').hide()
    $('.branch6').show()
    $('.branch7').show()
    api.getQuestionFive()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownContTwo = (event) => {
    event.preventDefault()
    $('.branch6').hide()
    $('.games').empty()
    $('.branch7').hide()
    $('.branch8').show()
    $('.branch9').show()
    api.getQuestionSeven()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownContThree = (event) => {
    event.preventDefault()
    $('.branch8').hide()
    $('.games').empty()
    $('.branch9').hide()
    $('.branch10').show()
    $('.branch8').show()
    api.getQuestionEight()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownContFour = (event) => {
    event.preventDefault()
    $('.branch10').hide()
    $('.games').empty()
    $('.branch8').hide()
    $('.branch9').hide()
    $('.branch17').hide()
    $('.branch11').show()
    $('.branch12').show()
    api.getQuestionNine()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const branchDownContFive = (event) => {
    event.preventDefault()
    $('.games').empty()
    $('.branch11').hide()
    $('.branch12').hide()
    $('.branch10').show()
    $('.branch12').show()
    api.getQuestionEleven()
      .then(ui.questionSuccess)
      .catch(ui.mainFailure)
}

const firstEnding = (event) => {
    event.preventDefault()
    api.getQuestionSix()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const secondEnding = (event) => {
    event.preventDefault()
    api.getQuestionTen()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const thirdEnding = (event) => {
    event.preventDefault()
    api.getQuestionTweleve()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const fourthEnding = (event) => {
    event.preventDefault()
    api.getQuestionFiveteen()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const fifthEnding = (event) => {
    event.preventDefault()
    api.getQuestionSeventeen()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const sixthEnding = (event) => {
    event.preventDefault()
    api.getQuestionEighteen()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const seventhEnding = (event) => {
    event.preventDefault()
    api.getQuestionNineteen()
      .then(ui.questionSuccess)
      .then(ui.foundEnding)
      .catch(ui.mainFailure)
}

const button1 = () => { // call the lobby
    api.updateGame()
}

const button2 = () => { // Look out window.
    api.updateGame2()
}

const button3 = () => { // Go down to the lobby
    api.updateGame3()
}

const button4 = () => { // Look out window.
    api.updateGame4()
}

const button5 = () => { // Leave the hotel
    api.updateGame5()
}

const button6 = () => { // Go down to the lobby | make another branch1 button
    api.updateGame6()
}

const button7 = () => { // Go get breakfast
    api.updateGame7()
}

const button8 = () => { // Leave the hotel | make another branch2 button
    api.updateGame8()
}

const button9 = () => { // Call out hello to the man
    api.updateGame9()
}

const button10 = () => { // Hide behind the other car and watch him
    api.updateGame10()
}

const button11 = () => { // Feel weird and leave quickly
    api.updateGame11()
}

const button12 = () => { // Turn on the news and leisurely eat
    api.updateGame12()
}

const button13 = () => { // Get in the car
    api.updateGame13()
}

const button14 = () => { // Stay hidden and watch him drive away
    api.updateGame14()
}

const button15 = () => { // Bounce off hood and run away
    api.updateGame15()
}

const button16 = () => { // Lie on the ground and wait for help
    api.updateGame16()
}

const button17 = () => { // Hide behind a parked car on the street
    api.updateGame17()
}

const button18 = () => { // Stop running and talk to staff
    api.updateGame18()
}

const button19 = () => { // Don't get in car
    api.updateGame19()
}

const button20 = () => { // Get in the car | make another branch8 button
    api.updateGame20()
}

const button21 = () => { // Go to diner and eat chicken and waffles
    api.updateGame21()
}

const button22 = () => { // Go to police station
    api.updateGame22()
}

const button23 = () => { // Get in the car | make another branch8 button
    api.updateGame23()
}

const button24 = () => { // Go back to hotel room and lie down
    api.updateGame24()
}

const button25 = () => { // Go back to hotel room and lie down | make another branch10 button
    api.updateGame25()
}

const button26 = () => { // Go to police station | make another branch12 button
    api.updateGame26()
}

const showMyGames = (event) => {
    event.preventDefault()
    $('.games').empty()
    api.getGames()
      .then(ui.showAllGames)
      .catch(ui.mainFailure)
}

const deleteMyGames = (event) => {
    event.preventDefault()
    $('.games').empty()
    const gameId = $(event.target).closest('section').data('id')
    api.deleteGame(gameId)
      .then(ui.deleteSuccess)
      .catch(ui.mainFailure)
}

module.exports = {
    startANewGame,
    branchUp,
    branchDown,
    branchDownTwo,
    branchUpCont,
    branchUpContTwo,
    branchUpContThree,
    branchUpContFour,
    branchUpContFive,
    branchDownCont,
    branchDownContTwo,
    branchDownContThree,
    branchDownContFour,
    branchDownContFive,
    firstEnding,
    secondEnding,
    thirdEnding,
    fourthEnding,
    fifthEnding,
    sixthEnding,
    seventhEnding,
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9,
    button10,
    button11,
    button12,
    button13,
    button14,
    button15,
    button16,
    button17,
    button18,
    button19,
    button20,
    button21,
    button22,
    button23,
    button24,
    button25,
    button26,
    showMyGames,
    deleteMyGames
}