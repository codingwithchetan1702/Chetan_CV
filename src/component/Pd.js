import React from "react";

function Pd() {
  return (
    <>
      {/* <!-- personal information  --> */}
      <div class="container mt-2">
        <h1 class="text-center">Personal Details</h1>
        <hr />
        <div class="row">
          <div class="col-sm-5 col-md-6">
            <img
              src= { require ('../image/chetan_1.jpg')}
              class="img-thumbnail"
              alt="Chetan"
              width="300px"
              height="200px"
            />
          </div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">personal Profiles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>Prajapati Chetan</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>Ahmedabad, Gujarat</td>
                </tr>
                <tr>
                  <th scope="row">Email Address</th>
                  <td>Prajapatichetan237@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Gender</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">D-O-B</th>
                  <td>11-02-2002</td>
                </tr>
                <tr>
                  <th scope="row">Contact-no</th>
                  <td>6351915013</td>
                </tr>
                <tr>
                  <th scope="row">GitHub</th>
                  <td>
                    <a href=" https://github.com/codingwithchetan1702">
                      https://github.com/codingwithchetan1702
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">linkedin</th>
                  <td>
                    <a href="https://www.linkedin.com/in/prajapati-chetan-061a55243/">
                      https://www.linkedin.com/in/prajapati-chetan-061a55243/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- <div class="row">
          <center><h1>Objective</h1></center>
          <hr>
          <p class="card-text">Seeking an opportunity to work in a challenging environment in order to prove my skills and utilize my knowledge and 
            intelligence for the growth of the organization.
        </p>
      </div> --> */}
      </div>
    </>
  );
}

export default Pd;
