import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyle from './styles';

// const products = [
//     {
//         id: 1,
//         name: 'Shoes',
//         description: 'Running shoes',
//         price: '1200 rs.',
//         image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
//     },
//     {
//         id: 2,
//         name: 'Macbook',
//         description: 'Apple macbook',
//         price: '99200 rs.',
//         image: 'https://images.unsplash.com/photo-1539688831660-2ca435ee5a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
//     },
//     {
//         id: 3,
//         name: 'Controller',
//         description: 'Gaming controller',
//         price: '4200 rs.',
//         image: 'https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80'
//     },
//     {
//         id: 4,
//         name: 'Mouse',
//         description: 'Wireless mouse',
//         price: '2100 rs.',
//         image: 'https://images.unsplash.com/photo-1615734986417-2468d1426621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
//     },
//     {
//         id: 5,
//         name: 'Earphones',
//         description: 'Wireless earphones',
//         price: '3200 rs.',
//         image: 'https://images.unsplash.com/photo-1613398774227-94abdde8aef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
//     },
//     {
//         id: 6,
//         name: 'Iphone 12',
//         description: 'Apple iphone',
//         price: '59000 rs.',
//         image: 'https://images.unsplash.com/photo-1585068247241-753a57d51cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80'
//     }
// ];

const Products = ({products}) => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products;