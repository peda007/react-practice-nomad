import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

class DetailContainer extends Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    this.isMovie = pathname.includes("/movie");
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      ({ data: result } = await (this.isMovie
        ? movieApi.detail(parsedId)
        : tvApi.detail(parsedId)));
    } catch (e) {
      this.setState({ error: "Can't load." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter>
    );
  }
}

export default DetailContainer;
