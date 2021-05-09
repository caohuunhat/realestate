import React from 'react';
import AboutPage from './pages/AboutPage';
import AgentPage from './pages/AgentPage';
import BlogPage from './pages/BlogPage';
import BuyCategoryPage from './pages/BuyCategoryPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import RentCategoryPage from './pages/RentCategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProductPage from './pages/AddProductPage';
import ProductManPage from './pages/ProductManPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Login from './components/Login';
import Register from './components/Register';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutPage />
    },
    {
        path: '/agent',
        exact: false,
        main: () => <AgentPage />
    },
    {
        path: '/blog',
        exact: false,
        main: () => <BlogPage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/buy',
        exact: false,
        main: () => <BuyCategoryPage />
    },
    {
        path: '/rent',
        exact: false,
        main: () => <RentCategoryPage />
    },
    {
        path: '/addproduct',
        exact: false,
        main: () => <AddProductPage />
    },
    {
        path: '/productManament',
        exact: false,
        main: () => <ProductManPage />
    },
    {
        path: '/productDetailPage',
        exact: false,
        main: () => <ProductDetailPage />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;
