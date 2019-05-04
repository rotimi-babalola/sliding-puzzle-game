import { connect } from 'react-redux';
import Grid from '../components/Grid';
import { shuffleNumbers, swapNumbers } from '../actions/puzzle.actions';
import { emptyTileIndex } from '../selectors';

export const mapStateToProps = state => ({
  puzzleNumbers: state.puzzle.puzzleNumbers,
  emptyTileIndex: emptyTileIndex(state),
});

export const mapDispatchToProps = dispatch => ({
  shuffleNumbers: () => {
    dispatch(shuffleNumbers());
  },
  swapNumbers: gridIndex => {
    dispatch(swapNumbers(gridIndex));
  },
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);

export default GridContainer;
