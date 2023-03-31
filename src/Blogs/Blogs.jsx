import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogs }) => {
    return (
        <div>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} />)
            }
        </div>
    );
};

export default Blogs;