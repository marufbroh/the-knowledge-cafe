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
                <div className='bg-violet-100 border-2 border-violet-500/75 rounded-lg text-center p-5'>
                    <h3 className='font-bold text-2xl text-violet-700'>Spent time on read : 177 min</h3>
                </div>
            </div>
        </div>
    );
};

export default Main;