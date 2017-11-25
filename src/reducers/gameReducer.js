import * as ActionTypes from '../ActionTypes';
import * as GameStates from '../GameStates';

const defaultState = {
    gameState: GameStates.PRE_GAME,
    time: 120,
    playerStates: {
        name: "David",
        rank: "1",
        stars: "2",
        left: undefined,
        right: undefined,
        current: undefined,
        score: 0
    },
    opponentStates: {
        name: "Bot",
        rank: "1",
        left: undefined,
        right: undefined,
        current: undefined,
        score: 0
    }
}

const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.LEFT:
            return {
                ...state,
                playerStates: {
                    ...state.playerStates,
                    upcoming: state.playerStates.upcoming.slice(1),
                    score: state.playerStates.left === state.playerStates.current ? state.playerStates.score + 1 : state.playerStates.score - 1,
                    current: state.playerStates.upcoming[0],
                }

            }
        case ActionTypes.RIGHT:
            return {
                ...state,
                playerStates: {
                    ...state.playerStates,
                    upcoming: state.playerStates.upcoming.slice(1),
                    score: state.playerStates.right === state.playerStates.current ? state.playerStates.score + 1 : state.playerStates.score - 1,
                    current: state.playerStates.upcoming[0],

                }
            }
        case ActionTypes.INC_TIMER:
            return {
                ...state,
                time: state.time + 1
            }
        case ActionTypes.DEC_TIMER:
            return {
                ...state,
                time: state.time - 1
            }
        case ActionTypes.RESET_TIMER:
            return {
                ...state,
                time: defaultState.time
            }
        case ActionTypes.GAME_START:
            return {
                ...state,
                gameState: GameStates.MID_GAME
            }
        case ActionTypes.GAME_STOP:
            return {
                ...state,
                gameState: GameStates.POST_GAME
            }
        case ActionTypes.GAME_RESET:
            return {
                ...defaultState,
                playerStates: {
                    ...defaultState.playerStates,
                    name: state.playerState.name,
                    rank: state.playerState.rank,
                    stars: state.playerStates.stars
                },
                opponentStates: {
                    ...defaultState.opponentStates,
                    name: state.opponentStates.name,
                    rank: state.opponentStates.rank,
                    stars: state.playerStates.stars
                }
            }
        default:
            return state
    }
}

export default gameReducer