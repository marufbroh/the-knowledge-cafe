import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogs }) => {
    return (
        <div>
            {
                blogs.map(blog => <Blog blog={blog} />)
            }
        </div>
    );
};

export default Blogs;