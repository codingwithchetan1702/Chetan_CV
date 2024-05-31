import React from "react";

function Projectsclg() {
  return (
    <>
      {/* <!-- Project details --> */}
      <div class="container mt-2">
        <div class="row">
          <h1 class="text-center">Projects</h1>
          <hr />
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Recommendation of stock market </h5>
              <h6 class="card-subtitle mb-2 text-muted">(08/2021 - 04/2022)</h6>
              <p class="card-text">
                This stock market recommendation system integrates HTML, CSS,
                and JavaScript for the front-end interface, providing a
                user-friendly experience. On the back-end, it leverages Python
                with Django for robust server-side operations and ML
                capabilities using Pandas for data analysis. The MySQL database
                ensures efficient data management, contributing to reliable
                stock recommendations based on machine learning algorithms.
              </p>
            </div>
            <hr/>
            <div class="card-body">
              <h5 class="card-title">Medicine Recommendation System </h5>
              <h6 class="card-subtitle mb-2 text-muted">(02/2024 - Present)</h6>
              <p class="card-text">
                The medicine recommendation system aids users in finding
                suitable medications through a seamless search functionality. It
                uses Python's Django for backend, and HTML/CSS, JavaScript, and
                Bootstrap for frontend development, ensuring an intuitive
                interface. Machine learning with Pandas and NumPy enables
                personalized recommendations, while SQLite manages data
                efficiently. Development is streamlined with tools like VS Code
                and Jupyter Notebook, offering a reliable platform for tailored
                medication suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectsclg;
