import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { } from 'react-icons';

const BlogTable = ({ blogs }) => {
    return (
        <table className='w-full border-seperate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-lg max-md:hidden'>No</th>
                    <th className='border border-slate-600 rounded-lg'>Title</th>
                    <th className='border border-slate-600 rounded-lg'>Content</th>
                    <th className='border border-slate-600 rounded-lg'>Options</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog, index) => (
                    <tr key={blog._id} className='h-8'>
                        <td className='border border-slate-700 rounded-lg text-center max-md:hidden'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-lg text-center'>
                            {blog.title}
                        </td>
                        <td className='border border-slate-700 rounded-lg text-center'>
                            {blog.content}
                        </td>
                        <td className='border border-slate-700 rounded-lg text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/blog/${blog._id}`}>
                                    <BsInfoCircle className='text-2x1 text-green-800' />
                                </Link>
                                <Link to={`/updateblog/${blog._id}`}>
                                    <AiOutlineEdit className='text-2x1 text-yellow-800' />
                                </Link>
                                <Link to={`/deleteblog/${blog._id}`}>
                                    <MdOutlineDelete className='text-2x1 text-yellow-800' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BlogTable