export const initialState = {
  started: true,
  player: 1,
  dice: null,
  quiz: null, // null - nebyl vyplnen, true - uspech, false - neuspech
  fields: [0, 0, 0, 0, 0],
};

export const isPlayerInGame = (state, player) =>
  state.fields.find((p) => p === player);

export const isColisionAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return state.fields[nextPos] > 0;
};

export const isFinishAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return state.fields.length - 1 === nextPos;
};

export const isOverflowAlert = (state) => {
  const pos = getPosition(state, state.player);
  const nextPos = pos + state.dice;
  return nextPos > state.fields.length - 1;
};

export const getPosition = (state, player) =>
  state.fields.findIndex((p) => p === player);

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

  let targetPosition = currentPosition;

  if (inGame && (state.quiz === true || !isOverflowAlert(state))) {
    //táhnu
    targetPosition = currentPosition + state.dice;
  } else if (!inGame && state.dice === 3) {
    //nasazuju
    targetPosition = 0;
  }

  return {
    ...state,
    player: state.player === 1 ? 2 : 1,
    dice: null,
    quiz: null,
    fields: state.fields.map((x, i) =>
      i === targetPosition ? state.player : state.player === x ? 0 : x,
    ),
  };
};
