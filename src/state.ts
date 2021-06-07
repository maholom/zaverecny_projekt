const fieldCount = 45;
export const diceMax = 6;

type TPlayer = 1 | 2;

export type TState = {
  started: boolean;
  player: TPlayer;
  dice: null | number;
  quiz: null | boolean;
  player1: number;
  player2: number;
  askedQuestions: number[];
};

export const initialState: TState = {
  started: false,
  player: 1,
  dice: null,
  quiz: null, // null - nebyl vyplnen, true - uspech, false - neuspech
  player1: 0,
  player2: 0,
  askedQuestions: [],
};

const anotherPlayer = {
  1: 2,
  2: 1,
} as const;

export const isPlayerInGame = (state: TState, player: TPlayer) => {
  if (player === 1) {
    return state[`player1`] > 0;
  } else {
    return state[`player2`] > 0;
  }
};

export const isColisionAlert = (state: TState) => {
  const pos = getPosition(state, state.player);
  if (state.dice === null) {
    // hrac jeste nehazel, kolize nehrozi
    return false;
  }
  if (pos === 0 && state.dice !== diceMax) {
    // hrac nenasazuje, kolize nehrozi
    return false;
  }
  const nextPos = pos === 0 ? 1 : pos + state.dice;
  return state.player === 1
    ? state[`player2`] === nextPos
    : state[`player1`] === nextPos;
};

export const addAskedQuestion = (state: TState, id: number) => {
  return { ...state, askedQuestions: [...state.askedQuestions, id] };
};

export const isFinishAlert = (state: TState) => {
  const pos = getPosition(state, state.player);
  if (state.dice === null) throw new Error("Dice is null");
  const nextPos = pos + state.dice;
  return nextPos === fieldCount;
};

export const isOverflowAlert = (state: TState) => {
  const pos = getPosition(state, state.player);
  if (state.dice === null) throw new Error("Dice is null");
  const nextPos = pos + state.dice;
  return nextPos > fieldCount;
};

export const isWinner = (state: TState) => {
  return state.player1 === fieldCount || state.player2 === fieldCount;
};

export const getPosition = (state: TState, player: TPlayer) => {
  if (player === 1) {
    return state[`player1`];
  } else {
    return state[`player2`];
  }
};

export const setStarted = (started: boolean) => ({
  ...initialState,
  started: started,
});

export const setQuiz = (state: TState, result: boolean) => ({
  ...state,
  quiz: result,
});

export const doTurn = (state: TState) => {
  if (state.dice === null) {
    return {
      ...state,
      dice: Math.floor(Math.random() * 6) + 1,
    };
  }

  const inGame = isPlayerInGame(state, state.player);
  const currentPosition = getPosition(state, state.player);
  const opponentPosition = getPosition(state, anotherPlayer[state.player]);
  let targetPosition = currentPosition;

  if (inGame && state.quiz === true) {
    //táhnu
    targetPosition =
      currentPosition + (isOverflowAlert(state) ? 0 : state.dice);
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
