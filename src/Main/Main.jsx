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
        <div className='flex flex-col lg:flex-row my-6 gap-6'>
            <div className='lg:basis-2/3'>
                <Blogs blogs={blogs} />
            </div>
            <div className='lg:basis-1/3'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis voluptatum illo tempore reiciendis? Non aspernatur ducimus, ea assumenda enim molestias.
            </div>
        </div>
    );
};

export default Main;