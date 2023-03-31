import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='flex my-6 gap-6'>
            <div className='basis-2/3'>
                <Blogs blogs={blogs} />
            </div>
            <div className='basis-1/3'>
                hello
            </div>
        </div>
    );
};

export default Main;