import React from 'react';
import ShopData from './ShopData';
import PreviewCollection from '../PreviewCollection/PreviewCollection';

class Shop extends React.Component {
    constructor(props){
        super();

        this.state = {
            collections: ShopData
        };
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;