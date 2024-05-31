import React from "react";

function Skills() {
  return (
    <>
      {/* <!-- Skills Details --> */}
      <div class="container mt-2">
        <div class="row">
          <h1 class="text-center">Skills</h1>
          <hr />
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  HTML or CSS
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>HTML or CSS.</strong> These foundational languages
                  structure and style web content, shaping the visual
                  presentation and layout of web pages.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  JAVA SCRIPT
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>JJAVA SCRIPT.</strong>This dynamic scripting language
                  adds interactivity and functionality to websites, enabling
                  features like animations, form validation, and dynamic content
                  loading.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  bootstrap
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>bootstrap.</strong> A front-end framework, Bootstrap
                  streamlines responsive web design, providing pre-built
                  components and styles for creating mobile-friendly and
                  visually consistent interfaces.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  Python (Django)
                </button>
              </h2>
              <div
                id="collapsefour"
                class="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>Python (Django).</strong>Django is a high-level Python
                  web framework that simplifies backend development, offering
                  tools for database management, URL routing, and template
                  rendering.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                  GIT & GITHUB
                </button>
              </h2>
              <div
                id="collapsefive"
                class="accordion-collapse collapse"
                aria-labelledby="headingfive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong> GIT & GITHUB.</strong>Git is a version control system
                  that tracks changes in code, while GitHub is a platform for
                  hosting and collaborating on Git repositories, facilitating
                  team collaboration and code management.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingsix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsesix"
                  aria-expanded="false"
                  aria-controls="collapsesix"
                >
                  Visual Studio
                </button>
              </h2>
              <div
                id="collapsesix"
                class="accordion-collapse collapse"
                aria-labelledby="headingsix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>Visual Studio.</strong> Visual Studio is a
                  comprehensive integrated development environment (IDE) that
                  supports multiple programming languages, providing tools for
                  code editing, debugging, and project management, enhancing
                  developer productivity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
