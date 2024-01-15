// import React from 'react'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineDelete } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import { PiBookOpenTextLight } from 'react-icons/pi'
// import { BiUserCircle } from 'react-icons/bi'

const BlogCard = ({ blogs }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {blogs.map((blog) => (
                <div
                    key={blog._id}
                    className='border-2 border-gray-500 rounded-lg px-8 py-16 m-4 relative hover:shadow-x1'
                >
                    <span>
                        {blog.content}
                    </span>

                    <h2 className='absolute top-1 left-2 px-4 py-1 bg-red-300 rounded-lg'>
                        {blog.title}
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default BlogCard