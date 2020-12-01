const fieldCount = 45;
export const diceMax = 6;

export const initialState = {
  started: true,
  player: 2,
  dice: 2,
  quiz: true, // null - nebyl vyplnen, true - uspech, false - neuspech
  player1: 1,
  player2: 44,
  askedQuestions: []
};

const anotherPlayer = {
  1: 2,
  2: 1,
};

export const isPlayerInGame = (state, player) => state[`player${player}`] > 0;

export const isColisionAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos === 0 ? 1 : pos + state.dice;
  return state[`player${anotherPlayer[state.player]}`] === nextPos;
};

export const addAskedQuestion = (state, id) => {
  return { ...state, askedQuestions: [...state.askedQuestions, id] }
}

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
      dice: 1 + Math.round(Math.random() * diceMax - 1),
    };
  }

  const inGame = isPlayerInGame(state, state.player);
  const currentPosition = getPosition(state, state.player);
  const opponentPosition = getPosition(state, anotherPlayer[state.player]);
  let targetPosition = currentPosition;

  if (inGame && state.quiz === true) {
    //táhnu
    targetPosition = currentPosition + (isOverflowAlert(state) ? 0 : state.dice);
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
