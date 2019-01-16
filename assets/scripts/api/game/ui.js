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

const showAllGames = (response) => {
    $('.games').empty()
    response.games.forEach(game => {
        $('.games').append(`
        <div class=${game.id}>
        <h4 id=${game.id}>Game id: ${game.id}</h4>
        </div>`)
        if (game.q1 === "") {
            $(`.${game.id}`).append('Game not started.')
        }

        else if (game.q5 !== 'Call out hello to the man.' || game.q6 == 'Turn on the news and leisurely eat.' || game.q8 == 'Lie on the ground and wait for help.' || game.q9 == 'Stop running and talk to staff.' || game.q10 == 'Don\'t get in car.' || game.q11 == 'Go to police station.' || game.q13 == 'Go to police station.' || game.q11 == 'Go to diner and eat chicken and waffles.') {
            $(`.${game.id}`).append('Ending not found.')
        }
        for (const key in game) {
        if (key !== 'id' && key !== 'user') {
            // if game[q#] is equal to the ending answer, append the ending text with the ID of the game
            if (game[key] == 'Call out hello to the man.') { // q5
                $(`.${game.id}`).append('You found the ending: Man runs towards you swearing and knocks you out.')
            }

            if (game[key] == 'Turn on the news and leisurely eat.') { // q6
                $(`.${game.id}`).append('You found the ending: Staff come back from fixing the phone lines and tell you that one of the staff robbed you as they hand your phone and wallet back.')
            }

            if (game[key] == 'Lie on the ground and wait for help.') { // q8
                $(`.${game.id}`).append('You found the ending: You end up in the hospital and the doctor tells you your name and has your phone and wallet.')
            }

            if (game[key] == 'Stop running and talk to staff.') { // q9
                $(`.${game.id}`).append('You found the ending: Hotel staff explain everything and give you your phone and wallet.')
            }

            if (game[key] == 'Don\'t get in car.') { // q10
                $(`.${game.id}`).append('You found the ending: Hotel staff walk up to you and says your name.')
            }

            if (game[key] == 'Go to police station.' || game[key] == 'Go to police station.') { // q11 / q13
                $(`.${game.id}`).append('You found the ending: Police start to interegate you and right before they hit you, you wake up from dreaming.')
            }

            if (game[key] == 'Go to diner and eat chicken and waffles.') { // q11
                $(`.${game.id}`).append('You found the ending: You wake up from this horrible dream.')
            } 
        }
        }
    })
}

const deleteSuccess = () => {
    toastr.success('Successfully deleted the game.')
    $('.delete')[0].reset()
}

module.exports = {
    questionSuccess,
    foundEnding,
    mainFailure,
    gameCreateSuccess,
    showAllGames,
    deleteSuccess
}