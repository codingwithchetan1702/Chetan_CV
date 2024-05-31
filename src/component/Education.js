import React from 'react'

function Education() {
  return (
    <>
    {/* <!-- Education details --> */}
    <div class="container mt-2">
      <div class="row">
        <h1 class="text-center">Education</h1>
          <hr/>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">course</th>
                <th scope="col">Broad/University</th>
                <th scope="col">percentage</th>
                <th scope="col">Years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">10th</th>
                <td>prerna school - Gujarat Broad </td>
                <td>59.16%</td>
                <td>2017</td>
              </tr>
              <tr>
                <th scope="row">12th</th>
                <td>St joseph school - Gujarat Broad </td>
                <td>69.8%</td>
                <td>2019</td>
              </tr>
              <tr>
                <th scope="row">BCA</th>
                <td>GLS University - Ahmedabad </td>
                <td>79.19%</td>
                <td>2022</td>
              </tr>
              <tr>
                <th scope="row">MCA</th>
                <td>GLS University - Ahmedabad </td>
                <td>-</td>
                <td>Running</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default Education