import { connect } from "react-redux";
import movieIndex from "../components/movieindex/movieIndex";
import { fetchData } from "../actions";

const mapStateToProps = store => {
  return {
    movieData: store.fetchDataSuccess,
    hasErred: store.hasErred,
    isLoading: store.isLoading,
    loginSuccess: store.loginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(movieIndex);
