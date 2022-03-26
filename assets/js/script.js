const card1LinkBtn = document.querySelector('#card1')
const card2LinkBtn = document.querySelector('#card2')
const card3LinkBtn = document.querySelector('#card3')

const card1GithubBtn = document.querySelector('#gh1')
const card2GithubBtn = document.querySelector('#gh2')
const card3GithubBtn = document.querySelector('#gh3')

const project2=()=>window.location.href="https://mortal-instruments-music-shop.herokuapp.com/"
const project2Github=()=>window.location.href="https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments"

const project1=()=>window.location.href="https://adolfo-g.github.io/Countdown-Games/"
const project1Github=()=>window.location.href="https://github.com/Adolfo-G/Countdown-Games"

const weather=()=>window.location.href="https://adolfo-g.github.io/Weather-Forecast/"
const weatherGithub=()=>window.location.href="https://github.com/Adolfo-G/Weather-Forecast"

card1LinkBtn.addEventListener('click',project2)
card2LinkBtn.addEventListener('click',project1)
card3LinkBtn.addEventListener('click',weather)

card1GithubBtn.addEventListener('click',project2Github)
card2GithubBtn.addEventListener('click',project1Github)
card3GithubBtn.addEventListener('click',weatherGithub)