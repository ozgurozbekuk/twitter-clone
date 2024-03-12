import React from 'react'

function SingleTopic(props) {
  return (
    <>
    <div className="flex">
        <div className="flex-1">
          <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
            {props.id} . {props.categories.map(category => {
                return category + " "
            })}
          </p>
          <h2 className="px-4 ml-2 w-48 font-bold text-white">#{props.topic}</h2>
          <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
            {props.count} Tweets
          </p>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-600" />
      </>
  )
}

export default SingleTopic
