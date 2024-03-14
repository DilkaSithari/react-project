import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import products from '../data/products.json';
import Carousel from './Carousel';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ProductDetails.css';

export default function ProductDetails() {
    const [visibleProducts, setVisibleProducts] = useState(10); // Number of initially visible products
    const [hasMore, setHasMore] = useState(true); // Indicates if there are more products to load

    const fetchMoreData = () => {
        // Simulate loading more data here
        setTimeout(() => {
            setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10); // Increase the number of visible products
            if (visibleProducts >= products.length) {
                setHasMore(false); // If all products are loaded, set hasMore to false
            }
        }, 1500);
    };

    return (
        <div className='product-details'>
            <InfiniteScroll
                dataLength={visibleProducts} // This is important field to render the next data
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more products to load</p>}
                scrollThreshold={0.9} // Trigger fetchMoreData when the user scrolls to 90% of the page height
            >
                <div className='card-container'>
                    {products.slice(0, visibleProducts).map((product, index) => (
                        <div key={product.productId} className='card-wrapper'>
                            <Card sx={{ maxWidth: 345 }}>
                                <Carousel>
                                    {product.images.map((image, index) => (
                                        <CardMedia
                                            key={index}
                                            component="img"
                                            height="100"
                                            image={image.src}
                                            alt={image.alt}
                                        />
                                    ))}
                                </Carousel>
                                <CardContent>
                                    <Typography variant="body2" component="div">
                                        {product.productId}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.productName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.productPrice}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.Quantity}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.productReferenceNumber}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}
