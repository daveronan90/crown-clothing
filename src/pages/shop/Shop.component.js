import React, { Component } from "react";

import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

import collections from "../../fixtures/shopData";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
