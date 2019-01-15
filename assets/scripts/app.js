'use strict'

// all file imports
const site = require('./functions.js')
const authEvents = require('./api/auth/events.js')
const gameEvents = require('./api/game/events.js')


$(() => {
  // functions running when website is fully loaded
  $(document).ready(site.onLoad)
  $(document).ready(site.draw)

  // button functions
  $('.accountb').on('click', site.openAccount)
  $('.goBack').on('click', site.onLogIn)
  $('.showmygames').on('click', gameEvents.showMyGames)
  $('.delete').on('submit', gameEvents.deleteMyGames)

  // auth functions
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game functions
  $('.start').on('click', gameEvents.startANewGame)
  $('.start1').on('click', gameEvents.branchUp)
  $('.start11').on('click', gameEvents.branchUp)
  $('.start2').on('click', gameEvents.branchDownTwo)
  $('.branch1').on('click', gameEvents.branchUpCont)
  $('.branch3').on('click', gameEvents.branchUpContTwo)
  $('.branch4').on('click', gameEvents.branchUpContThree)
  $('.branch13').on('click', gameEvents.branchUpContFour)
  $('.branch15').on('click', gameEvents.branchUpContFive)
  $('.branch2').on('click', gameEvents.branchDownCont)
  $('.branch7').on('click', gameEvents.branchDownContTwo)
  $('.branch9').on('click', gameEvents.branchDownContThree)
  $('.branch8').on('click', gameEvents.branchDownContFour)
  $('.branch11').on('click', gameEvents.branchDownContFive)

  // game endings
  $('.branch6').on('click', gameEvents.firstEnding)
  $('.branch10').on('click', gameEvents.secondEnding)
  $('.branch12').on('click', gameEvents.thirdEnding)
  $('.branch5').on('click', gameEvents.fourthEnding)
  $('.branch14').on('click', gameEvents.fifthEnding)
  $('.branch16').on('click', gameEvents.sixthEnding)
  $('.branch17').on('click', gameEvents.seventhEnding)

  // update game
  $('.start1').on('click', gameEvents.button2)
  $('.start11').on('click', gameEvents.button4)
  $('.start2').on('click', gameEvents.button1)
  $('.branch1').on('click', gameEvents.button3)
  $('.branch2').on('click', gameEvents.button5)
  $('.branch3').on('click', gameEvents.button7)
  $('.branch4').on('click', gameEvents.button11)
  $('.branch5').on('click', gameEvents.button12)
  $('.branch6').on('click', gameEvents.button9)
  $('.branch7').on('click', gameEvents.button10)
  $('.branch8').on('click', gameEvents.button13)
  $('.branch9').on('click', gameEvents.button14)
  $('.branch10').on('click', gameEvents.button24)
  $('.branch11').on('click', gameEvents.button21)
  $('.branch12').on('click', gameEvents.button22)
  $('.branch13').on('click', gameEvents.button15)
  $('.branch14').on('click', gameEvents.button16)
  $('.branch15').on('click', gameEvents.button17)
  $('.branch16').on('click', gameEvents.button18)
  $('.branch17').on('click', gameEvents.button19)

  // auth form animation
  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })
})
