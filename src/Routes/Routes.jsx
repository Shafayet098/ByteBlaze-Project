import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Bookmarks from "../pages/Bookmarks";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Author from "../components/Author";
import Content from "../components/Content";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) =>
                    fetch(`https://dev.to/api/articles/${params?.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/
                                ${params?.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author />,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/${params?.id}`),
                    },
                ],
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />,
            },
        ],
    },
])
