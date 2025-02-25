import React from 'react'

function Loading() {
    return (
        <div className="spinner-border" role="status" style={{ height: '100px', width: '100px', marginTop: '100px' }}>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Loading