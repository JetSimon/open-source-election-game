# How to run

1. Clone this repo
2. Run ```npm i``` in the open-source-election-game directory (the one with package.json in it)
3. Run ```npm run dev``` and you should be able to see the game run in your browser.

Currently this game just loads the scenario hardcoded at ```src/scenarios/TestScenario.ts```

I am trying to keep the engine stuff separate from the "view". So technically the backend could be plugged into anything. All that/the game logic lives in the ```src/engine``` folder. The structure of eahc mod is based on TCT. Though right now there is only something very basic akin to a "code 2".