import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return
      Object.keys(this.SortByOptions).map(sortByOption => {
      let SortByOptionValue = this.SortByOptions[this.SortByOption];
      <li key={SortByOptionValue}>{sortByOption}</li>

    });

  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            this.renderSortByOptions(); //do we need the this.??
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
};

export default SearchBar;
