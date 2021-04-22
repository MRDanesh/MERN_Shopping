import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

//import products from '../../products';
import Product from '../Product';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect ( async () => {
        const products = await axios.get('/api/products');
        setProducts(products.data);
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
};

export default HomeScreen;