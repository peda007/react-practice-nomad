import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({ loading: true });
      console.log(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      this.setState({
        tvResults,
        movieResults,
      });
    } catch (e) {
      this.setState({ error: "Can't find movie or tv" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    );
  }
}

export default SearchContainer;
