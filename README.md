# FNC-Bingo

This is just a repo containing some text files used by a bingo generator for the FNC community.

## Setup
If you're wanting to generate a wordlist then you'll need to have NodeJS and git. If you want to just update the wordlist then you can do that on GitHub directly by going to the file and clicking the "Edit" button.

To actually setup for yourself:
1. Clone - `git clone https://github.com/WalshyDev/FNC-Bingo.git`
1. Install npm deps - `npm i`

## Run
There's two ways to run and generate a wordlist. By default it will generate a BO3 specific wordlist (bo3.txt) however it will accept an argument in which you can specify a different file (like `blast` for example).

### BO3
Run `node index.js`

### Blast (or other formats/files)
Run `node index.js blast` or `node index.js <file>`
