export const initialState = {
  player: 1,
  fields: [0, 0, 0, 0, 0]
};

export const isPlayerInGame = (state, player) =>
  state.fields.find((p) => p === player);

export const doTurn = (state) => {
  return { ...state, player: (state.player = state.player === 1 ? 2 : 1) };
};
