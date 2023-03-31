import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogs, handleReadTime }) => {
    return (
        <div>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} />)
            }
        </div>
    );
};

export default Blogs;