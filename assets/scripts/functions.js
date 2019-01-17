'use strict'

// Interacting with site logic

const onLoad = () => {
    $('.settingsp').hide()
    $('.main').hide()
    $('.extra').hide()
    $('.authp').show()
}

const onLogIn = () => {
    $('.authp').hide()
    $('.main').show()
    $('.extra').show()
    $('.settingsp').hide()
    $('.games').empty()
}

const onLogOut = () => {
    $('.main').hide()
    $('.extra').hide()
    $('.settingsp').hide()
    $('.authp').show()
}

const openAccount = () => {
    $('.main').hide()
    $('.extra').hide()
    $('.settingsp').show()
    $('.settingsp').show()
    $('.games').empty()
}

function draw() {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    context.strokeStyle = "orange"
    context.rotate(20 * Math.PI / 180)
    context.strokeRect(125, 271, 50, 50)
    context.strokeStyle = "yellow"
    context.strokeRect(28, 9, 83, 83)
    context.rotate(20 * Math.PI / 180)
    context.strokeStyle = "blue"
    context.strokeRect(160, 160, 73, 73)
    context.strokeStyle = "#8d446e"
    context.strokeRect(192, 124, 73, 73)
    context.strokeStyle = "brown"
    context.strokeRect(112, 98, 73, 73)
    context.strokeStyle = "green"
    context.strokeRect(122, -53, 80, 80)
    context.strokeStyle = "purple"
    context.strokeRect(62, 49, 65, 65)
    context.strokeStyle = "cyan"
    context.strokeRect(43, 79, 98, 98)
    context.strokeStyle = "magenta"
    context.rotate(-8 * Math.PI / 180)
    context.strokeRect(189, 73, 95, 95)
    context.strokeStyle = "lightblue"
    context.strokeRect(158, 102, 47, 47)
    context.strokeStyle = "white"
    context.rotate(-4 * Math.PI / 180)
    context.strokeRect(225, 134, 30, 30)
    context.strokeStyle = "yellow"
    context.strokeRect(283, 300, 28, 28)
    context.strokeStyle = "orange"
    context.strokeRect(306, 347, 57, 57)
    context.strokeStyle = "green"
    context.rotate(10 * Math.PI / 180)
    context.strokeRect(287, 347, 80, 80)
    context.strokeStyle = "blue"
    context.strokeRect(345, 387, 67, 67)
    context.strokeStyle = "red"
    context.rotate(6 * Math.PI / 180)
    context.strokeRect(284, 87, 73, 73)
    context.strokeStyle = "purple"
    context.strokeRect(334, 247, 47, 47)
    context.strokeStyle = "cyan"
    context.strokeRect(243, 225, 94, 94)
    context.strokeStyle = "magenta"
    context.strokeRect(293, 143, 46, 46)
    context.strokeStyle = "#7b3a8c"
    context.strokeRect(263, 238, 46, 46)
    context.strokeStyle = "#8e1d44"
    context.rotate(-12 * Math.PI / 180)
    context.strokeRect(348, 392, 68, 68)
    // context.strokeStyle = "#2f775b"
    context.rotate(-12 * Math.PI / 180)
    // context.strokeRect(284, 523, 84, 84)
    context.strokeStyle = "magenta"
    context.rotate(-16 * Math.PI / 180)
    context.strokeRect(18, 623, 84, 84)

    // right side
    context.strokeStyle = "red"
    context.rotate(10 * Math.PI / 180)
    context.strokeRect(1400, -232, 83, 83)
    context.strokeStyle = "yellow"
    context.strokeRect(1337, -318, 46, 46)
    context.strokeStyle = "blue"
    context.strokeRect(1295, -195, 63, 63)
    context.strokeStyle = "orange"
    context.strokeRect(1317, -243, 68, 68)
    context.strokeStyle = "purple"
    context.strokeRect(1357, -119, 46, 46)
    context.strokeStyle = "cyan"
    context.strokeRect(1347, -216, 74, 74)
    context.rotate(13 * Math.PI / 180)
    context.strokeStyle = "white"
    context.strokeRect(1421, -318, 73, 73)
    context.strokeStyle = "brown"
    context.strokeRect(1359, -437, 73, 73)
    context.strokeStyle = "magenta"
    context.rotate(-7 * Math.PI / 180)
    context.strokeRect(1329, -273, 30, 30)
    context.strokeStyle = "lightblue"
    context.strokeRect(1400, -236, 47, 47)
    context.strokeStyle = "green"
    context.strokeRect(1379, -185, 64, 64)
    
}

module.exports = {
    onLoad,
    onLogIn,
    onLogOut,
    openAccount,
    draw
}