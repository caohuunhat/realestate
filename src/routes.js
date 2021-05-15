import React from 'react';
import AboutPage from './pages/AboutPage';
import AgentPage from './pages/AgentPage';
import BuyCategoryPage from './pages/BuyCategoryPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import RentCategoryPage from './pages/RentCategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Login from './components/Login';
import Register from './components/Register';
import ManamentPage from "./pages/ManamentPage";

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
        path: '/manamentPage',
        exact: false,
        main: () => <ManamentPage />
    },
    {
        path: '/productDetailPage/:id',
        exact: false,
        main: ({ match }) => <ProductDetailPage match={match.params.id} />
    },
    {
        path: '/manament',
        exact: false,
        main: () => <ManamentPage />
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
