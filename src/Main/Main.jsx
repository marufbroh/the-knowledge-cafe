import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleReadTime = (time) => {
        setReadTime(readTime + time)
    }

    const handleBookmark = (bookmark) => {
        const totalBookmarks = [...bookmarks];
        totalBookmarks.push(bookmark)
        setBookmarks(totalBookmarks)
    }


    return (
        <div className='flex flex-col lg:flex-row my-6 gap-6'>
            <div className='lg:basis-2/3'>
                <Blogs blogs={blogs} handleReadTime={handleReadTime} handleBookmark={handleBookmark} />
            </div>
            <div className='lg:basis-1/3 lg:sticky lg:top-0 h-full'>
                <div className='bg-violet-100 border-2 border-violet-500/75 rounded-lg text-center p-5 mb-6'>
                    <h3 className='font-bold text-2xl text-violet-700'>Spent time on read : {readTime} min</h3>
                </div>
                <div className='bg-slate-100 p-5 rounded-lg'>
                    <h3 className='font-bold text-2xl'>Bookmarked Blogs : {bookmarks.length}</h3>
                    {
                        bookmarks.map((bookmark, index) => <Bookmark bookmark={bookmark} key={index} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;