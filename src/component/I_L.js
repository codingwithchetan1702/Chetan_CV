import React from 'react'

function I_L() {
  return (
    <>
     {/* <!-- Intersts and languages --> */}
    <div class="container mt-2">
      <div class="row">
            <div class="col-6">
              <h1 class="text-center">INTERESTS</h1>
           <hr/>
           <div class="card" style={{ width: '36rem' }}>
            <div class="card-body">
                <button type="button" class="btn btn-secondary me-6 mt-2">Web Development</button>
                <button type="button" class="btn btn-secondary me-6 mt-2">Design(UX/UI)</button>
                <button type="button" class="btn btn-secondary me-6 mt-2">Communication Skill</button>
                <button type="button" class="btn btn-secondary me-6 mt-2">Sports</button>
                <button type="button" class="btn btn-secondary me-6 mt-2">learning new things</button>
                <button type="button" class="btn btn-secondary me-6 mt-2">Gaming</button>
            </div>
          </div>
        </div>
             <div class="col-6">
                 <h1 class="text-center">Languages</h1>
                 <hr/>
                 <div class="card"  style={{ width: '36rem' }}>
                   <div class="card-body">
                     <h5 class="card-title"> • Gujarati </h5>
                     <h5 class="card-title"> • Hindi </h5>
                     <h5 class="card-title"> • English </h5>
                   </div>
                 </div>
   
               </div>
           </div>
       </div>
    </>
  )
}

export default I_L