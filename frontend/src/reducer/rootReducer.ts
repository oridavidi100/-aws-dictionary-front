interface Action {
  type: string;
  word: string;
}
interface InitalState {
  words: string[];
}

const initalState: InitalState = {
  words: [],
};

const wordReducer = (state = initalState, action: Action) => {
  switch (action.type) {
    case 'ADD_WORD':
      if (state.words[state.words.length - 1] !== action.word) {
        return { ...state, words: [...state.words, action.word] };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default wordReducer;
