import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import './PreviewCollection.styles.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        { items
          .filter((item, i) => i < 4 )
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />
          })
        }
      </div>
    </div>
  );
};

export default PreviewCollection;
