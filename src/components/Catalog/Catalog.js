import React from 'react';
import CatalogFilter from '../CatalogFilter/CatalogFilter';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    const { initialState } = props;
    this.state = { ...initialState };
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== Catalog');
    const { history } = this.props;

    return <CatalogFilter value={this.state} history={history} />;
  }
}

export default Catalog;
