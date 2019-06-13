import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SearchIcon from '../../../assets/images/search-icon.svg';
import colors from '../../../setup/colors';

class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onSearch: () => null,
    onChange: () => null,
  };

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = (e) => {
    const { value } = e.target;
    const { onChange } = this.props;

    this.setState({ value });
    onChange(value);
  }

  onSearch = () => {
    const { value } = this.state;
    const { onSearch } = this.props;

    onSearch(value);
  }

  render() {
    return (
      <Container>
        <Field
          name="search"
          type="search"
          onChange={this.onChange}
          value={this.state.value}
        />
        <Button onClick={this.onSearch}>
          <img src={SearchIcon} alt="Search Icon" />
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Field = styled.input`
  width: 650px;
  height: 50px;
  padding: 0px 20px;
  font-family: 'Raleway';
  font-size: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  border: none;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
  border-radius: 0px 2px 2px 0px;
  background-color: ${colors.purple}
`;

export default SearchBar;

