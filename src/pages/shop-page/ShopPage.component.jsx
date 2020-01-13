import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';
import SHOP_DATA from './shop.data';
import './ShopPage.styles.scss';

export default class ShopPage extends Component {

  state = {
    collections: SHOP_DATA
  };

  createCollectionPreview = (collections) => {
    return collections.map(({ id, ...otherCollectionProps}) => {
      return <PreviewCollection key={id} {...otherCollectionProps} />
    });
  };

  render() {

    const { state: { collections }, createCollectionPreview } = this;

    return (
      <div className="shop-page">
        {createCollectionPreview(collections)}
      </div>
    );
  };
};
