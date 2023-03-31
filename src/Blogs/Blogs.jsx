import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ blogs, handleReadTime, handleBookmark }) => {
    return (
        <div>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} handleBookmark={handleBookmark} />)
            }
        </div>
    );
};

export default Blogs;