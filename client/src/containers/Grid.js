import { connect } from 'react-redux';
import Grid from '../components/Grid';
import { shuffleNumbers } from '../actions/puzzle.actions';

export const mapStateToProps = ({ puzzle }) => ({
  puzzleNumbers: puzzle.puzzleNumbers,
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
