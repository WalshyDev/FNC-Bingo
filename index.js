const axios = require('axios');

const players = [
  'JW',
  'flusha',
  'Krimz',
  'Brollan',
  'Golden'
];

const maps = [
  'Mirage',
  'Inferno',
  'Overpass',
  'Train',
  'Dust 2',
  'Nuke',
  'Vertigo'
];

const wordsToGenerate = 29;
const minAmount = 5;
const maxAmount = 13;

const args = process.argv.slice(2);
const format = args[0] || 'bo3';

function start() {
  axios.get(`https://raw.githubusercontent.com/WalshyDev/FNC-Bingo/master/${format}.txt`,
    {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    .then(res => res.data)
    .then(txt => {
      const words = [];

      for (line of txt.split('\n')) {
        if (line === '' || line.startsWith('//')) continue;
        console.log(line);
        words.push(line);
      }

      generateWordList(words);
    })
    .catch(err => {
      console.error(err);
    });
}

function generateWordList(words) {
  for (let i = 0; i < wordsToGenerate; i++) {
    console.log((i + 1) + '. ' + genWord(words));
  }
}

function regexRand(match, min, max, offset, string) {
  return rand(max, min);
}

function rand(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + parseInt(min);
}

function genWord(words) {
  const idx = rand(words.length);
  const word = words[idx];
  words.splice(idx, 1);
  return word
    .replace('{player}', players[rand(players.length)])
    .replace('{map}', maps[rand(maps.length)])
    .replace('{amount}', rand(maxAmount, minAmount))
    .replace(/\{random,(\d+)(?:,(\d+))?\}/, regexRand);
}

start();
