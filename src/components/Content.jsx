import React from 'react';
import { useLoaderData } from 'react-router';
import error from './../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
  const blog = useLoaderData();
  console.log(blog)
  const { cover_image, title, tags, url, body_html } = blog
  return (

    <div to={``} className="w-full mx-auto border-2 p-2  border-primary-content  group  ">
      <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || error} />
      <div className=" space-y-2 p-0">
        <div className='flex flex-wrap py-6 gap-2 '>
          {tags &&
            tags.map(tag => (
              <a
                key={tag}
                rel='noopener noreferrer'
                href='#'
                className='px-3 py-1 rounded-sm hover:underline '
              >
                #{tag}
              </a>
            ))}
        </div>
        <div>
          <a href={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
        </div>
       <div>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
       </div>
      </div>
    </div>
  );
};

export default Content;