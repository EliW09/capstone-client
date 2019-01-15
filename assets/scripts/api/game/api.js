const config = require('../../config.js')
const store = require('../../store.js')

const getQuestionOne = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/1`,
      method: 'GET'
    })
}

const getQuestionTwo = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/2`,
      method: 'GET'
    })
}

const getQuestionThree = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/3`,
      method: 'GET'
    })
}

const getQuestionFour = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/4`,
      method: 'GET'
    })
}

const getQuestionFive = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/5`,
      method: 'GET'
    })
}

const getQuestionSix = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/6`,
      method: 'GET'
    })
}

const getQuestionSeven = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/7`,
      method: 'GET'
    })
}

const getQuestionEight = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/8`,
      method: 'GET'
    })
}

const getQuestionNine = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/9`,
      method: 'GET'
    })
}

const getQuestionTen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/10`,
      method: 'GET'
    })
}

const getQuestionEleven = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/11`,
      method: 'GET'
    })
}

const getQuestionTweleve = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/12`,
      method: 'GET'
    })
}

const getQuestionThirteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/13`,
      method: 'GET'
    })
}

const getQuestionFourteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/14`,
      method: 'GET'
    })
}

const getQuestionFiveteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/15`,
      method: 'GET'
    })
}

const getQuestionSixteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/16`,
      method: 'GET'
    })
}

const getQuestionSeventeen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/17`,
      method: 'GET'
    })
}

const getQuestionEighteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/18`,
      method: 'GET'
    })
}

const getQuestionNineteen = () => {
    return $.ajax({
      url: config.apiUrl + `/stories/19`,
      method: 'GET'
    })
}

// saving choices

const createGame = () => {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
      },
      data: '{"game":{"q1": ""}}'
    })
}

const updateGame = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q1": "Call the lobby."}}'
    })
}

const updateGame2 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q1": "Look out window."}}'
    })
}

const updateGame3 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q2": "Go down to the lobby."}}'
    })
}

const updateGame4 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q2": "Look out window."}}'
    })
}

const updateGame5 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q3": "Leave the hotel."}}'
    })
}

const updateGame6 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q3": "Go down to the lobby."}}'
    })
}

const updateGame7 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q4": "Go get breakfast."}}'
    })
}

const updateGame8 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q4": "Leave the hotel."}}'
    })
}

const updateGame9 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q5": "Call out hello to the man."}}'
    })
}

const updateGame10 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q5": "Hide behind the other car and watch him."}}'
    })
}

const updateGame11 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q6": "Feel weird and leave quickly."}}'
    })
}

const updateGame12 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q6": "Turn on the news and leisurely eat."}}'
    })
}

const updateGame13 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q7": "Get in the car."}}'
    })
}

const updateGame14 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q7": "Stay hidden and watch him drive away."}}'
    })
}

const updateGame15 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q8": "Bounce off hood and run away."}}'
    })
}

const updateGame16 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q8": "Lie on the ground and wait for help."}}'
    })
}

const updateGame17 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q9": "Hide behind a parked car on the street."}}'
    })
}

const updateGame18 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q9": "Stop running and talk to staff."}}'
    })
}

const updateGame19 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q10": "Don\'t get in car."}}'
    })
}

const updateGame20 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q10": "Get in the car."}}'
    })
}

const updateGame21 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q11": "Go to diner and eat chicken and waffles."}}'
    })
}

const updateGame22 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q11": "Go to police station."}}'
    })
}

const updateGame23 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q12": "Get in the car."}}'
    })
}

const updateGame24 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q12": "Go back to hotel room and lie down."}}'
    })
}

const updateGame25 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q13": "Go back to hotel room and lie down."}}'
    })
}

const updateGame26 = () => {
    return $.ajax({
        url: config.apiUrl + `/games/${store.gameInfo.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token, "Content-Type": "application/json"
          },
          data: '{"game":{"q13": "Go to police station."}}'
    })
}

module.exports = {
    getQuestionOne,
    getQuestionTwo,
    getQuestionThree,
    getQuestionFour,
    getQuestionFive,
    getQuestionSix,
    getQuestionSeven,
    getQuestionEight,
    getQuestionNine,
    getQuestionTen,
    getQuestionEleven,
    getQuestionTweleve,
    getQuestionThirteen,
    getQuestionFourteen,
    getQuestionFiveteen,
    getQuestionSixteen,
    getQuestionSeventeen,
    getQuestionEighteen,
    getQuestionNineteen,
    createGame,
    updateGame,
    updateGame2,
    updateGame3,
    updateGame4,
    updateGame5,
    updateGame6,
    updateGame7,
    updateGame8,
    updateGame9,
    updateGame10,
    updateGame11,
    updateGame12,
    updateGame13,
    updateGame14,
    updateGame15,
    updateGame16,
    updateGame17,
    updateGame18,
    updateGame19,
    updateGame20,
    updateGame21,
    updateGame22,
    updateGame23,
    updateGame24,
    updateGame25,
    updateGame26
}