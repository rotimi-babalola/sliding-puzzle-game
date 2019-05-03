import { connect } from 'react-redux';
import Grid from '../components/Grid';
import { shuffleNumbers } from '../actions/puzzle.actions';
import { emptyTileIndex } from '../selectors';

export const mapStateToProps = state => ({
  puzzleNumbers: state.puzzle.puzzleNumbers,
  emptyTileIndex: emptyTileIndex(state),
});

export const mapDispatchToProps = dispatch => ({
  shuffleNumbers: () => {
    dispatch(shuffleNumbers());
  },
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);

export default GridContainer;
