export const initialState = {
  started: true,
  player: 1,
  dice: 2,
  fields: [1, 0, 2, 0, 0],
};

export const isPlayerInGame = (state, player) =>
  state.fields.find((p) => p === player);

export const getPosition = (state, player) =>
  state.fields.findIndex((p) => p === player);

export const setStarted = (state, started) => ({
  ...initialState,
  started: started
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

  let targetPosition;
  if (inGame) {
    //táhnu
    targetPosition = currentPosition + state.dice;
  } else if (state.dice === 3) {
    //nasazuju
    targetPosition = 0;
  }

  console.log('Háč je na ', currentPosition);
  console.log('Háč půjde na ', targetPosition);
  return {
    ...state,
    dice: null,
    player: state.player === 1 ? 2 : 1,
    fields: state.fields.map((x, i) =>
      i === targetPosition ? state.player : state.player === x ? 0 : x,
    ),
  };
};
