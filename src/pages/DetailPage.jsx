import React from 'react'
import ThreadDetail from '../components/ThreadDetail'
import Sidebar from '../components/Sidebar'

function DetailPage() {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className="flex-1 p-8">
                    <ThreadDetail />
                </div>
            </div>
        </>
    )
}

export default DetailPage