import React from 'react';
import { Link } from 'react-router';
import error from './../assets/404.jpg'
import { MdDelete } from 'react-icons/md';

const BlogCard = ({blog, deletable,HandleDelete}) => {
  const { cover_image, title, description, published_at } = blog

  return (
    <div className=' flex relative'>
      <Link to={`/blog/${blog.id}`} className=" transition border-2 p-2 hover:scale-105 border-primary-content hover:border-secondary  group hover:no-underline focus:no-underline ">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || error} />
        <div className=" space-y-2 p-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
          <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
          <p>{description}</p>
        </div>
      </Link>
      {
        deletable && <div onClick={()=>HandleDelete(blog.id)} className='bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'>
            <MdDelete className='text-secondary group-hover:text-primary' size={25}></MdDelete>
        </div>
      }
    </div>
  );
};

export default BlogCard;