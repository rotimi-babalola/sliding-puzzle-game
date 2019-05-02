import { connect } from 'react-redux';
import Grid from '../components/Grid';

export const mapStateToProps = ({ puzzle }) => ({
  sortedPositions: puzzle.sortedPositions,
});

export const mapDispatchToProps = () => ({});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);

export default GridContainer;
