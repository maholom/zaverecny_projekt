const fieldCount = 45;
export const diceMax = 3;

export const initialState = {
  started: true,
  player: 1,
  dice: null,
  quiz: true, // null - nebyl vyplnen, true - uspech, false - neuspech
  player1: 44,
  player2: 0,
};

const anotherPlayer = {
  1: 2,
  2: 1,
};

export const isPlayerInGame = (state, player) => state[`player${player}`] > 0;

export const isColisionAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return state[`player${anotherPlayer[state.player]}`] === nextPos;
};

export const isFinishAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return nextPos === fieldCount;
};

export const isOverflowAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return nextPos > fieldCount;
};

export const isWinner = (state) => {
  return state.player1 === fieldCount || state.player2 === fieldCount;
};

export const getPosition = (state, player) => state[`player${player}`];

export const setStarted = (state, started) => ({
  ...initialState,
  started: started,
});

export const setQuiz = (state, result) => ({
  ...state,
  quiz: result,
});

export const doTurn = (state) => {
  if (state.dice === null) {
    return {
      ...state,
      dice: 1 + Math.round(Math.random() * 2),
    };
  }

  const inGame = isPlayerInGame(state, state.player);
  const currentPosition = getPosition(state, state.player);
  const opponentPosition = getPosition(state, anotherPlayer[state.player]);
  let targetPosition = currentPosition;

  if (inGame && state.quiz === true) {
    //táhnu
    targetPosition = currentPosition + state.dice;
  } else if (!inGame && state.dice === diceMax) {
    //nasazuju
    targetPosition = 1;
  }

  return {
    ...state,
    player: anotherPlayer[state.player],
    dice: null,
    quiz: null,
    [`player${state.player}`]: targetPosition,
    [`player${anotherPlayer[state.player]}`]:
      opponentPosition === targetPosition ? 0 : opponentPosition,
  };
};
