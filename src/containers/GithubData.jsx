import React from 'react';
import { connect } from 'react-redux';

function GithubData({ data }) {
  if(!data) {
    return (
      <div>No Data</div>
    )
  }
  return (
    <div className="container">
        <h1>Github API </h1>
        <table className="table">
        <tbody>
            <tr>
                <th>Name:</th>
                <td> { data.name }</td>
            </tr>
            <tr>
                <th>Location</th>
                <td> { data.location }</td>
            </tr>
            <tr>
                <th>Github Followers</th>
                <td> { data.followers }</td>
            </tr>
        </tbody>

    </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubData);