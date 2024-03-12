import React from 'react'

function Policy() {

    let year = new Date().getFullYear()
  return (
    <div className="flow-root m-6 inline">
      <div className="flex-1">
        <a href="#">
          <p className="text-sm leading-6 font-medium text-gray-500">
            Terms Privacy Policy Cookies Imprint Ads info
          </p>
        </a>
      </div>
      <a href="#"></a>
      <div className="flex-2">
        <p className="text-sm leading-6 font-medium text-gray-600">
          {" "}
          © {year} Twitter, Inc.
        </p>
      </div>
    </div>
  )
}

export default Policy
