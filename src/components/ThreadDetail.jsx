import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'

function ThreadDetail() {
    return (
        <>
            <div className='xl:w-1/2'>
                <div>
                    <CustomLink variant='withArrow' text={'Kembali'} to={'/'} />
                    <div className='mt-4'>
                        <h2 className="mb-4 text-2xl font-semibold">
                            Judul Thread
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget consectetur nunc nisl euismod nisl. Duis euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget consectetur nunc nisl euismod nisl.
                        </p>
                        <div className='flex space-x-10 text-gray-600'>
                            <p>Created By:</p>
                            <p>Created At:</p>
                        </div>
                        <div className='mt-2'>
                            <div className="w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-md text-gray-600">Comment</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <div className="w-full">
                                    <button className="flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreadDetail