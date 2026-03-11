import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { deleteBlog, getBlogs } from '../LocalStorage/LocalStorage';

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    const newBlogs = getBlogs();
    setBlogs(newBlogs)
  },[])
  const HandleDelete =(id)=>{
    deleteBlog(id)
    const newBlogs = getBlogs();
    setBlogs(newBlogs)
  }
  
  return (
    <section className="mt-2 px-4 sm:px-8 lg:px-12 py-8">
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
           {
            blogs.map(blog=><BlogCard 
              blog={blog}
              deletable={true}
              HandleDelete={HandleDelete}></BlogCard>)
           }
        </div>
        

      </div>
    </section>
  );
};

export default Bookmarks;