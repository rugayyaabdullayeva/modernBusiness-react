import React from 'react'
import "./Features.css"
import TitleCard from './TitleCard'
const Main = () => {
  return (
    <section className="py-5" id="features">
    <div className="container px-5 my-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
            <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <TitleCard/>
                  <TitleCard/>
                  <TitleCard/>
                  <TitleCard/>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Main