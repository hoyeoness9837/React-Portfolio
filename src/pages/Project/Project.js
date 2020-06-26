import React from 'react';
const Project = () => {
  return (
    <>
      <header>Projects</header>
      <div class='accordion' id='projectAccordian'>
        <div class='card'>
          <div class='card-header' id='project1'>
            <h2 class='mb-0'>
              <button
                class='btn btn-link'
                type='button'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Project # 1 (Ōkido's Pokémon Research Institute)
                <i class='material-icons' id='expandbtn'>
                  expand_more
                </i>
              </button>
            </h2>
          </div>
          <div
            id='collapseOne'
            class='collapse show'
            aria-labelledby='project1'
            data-parent='#projectAccordian'
          >
            <div class='card-body'>
              <ul class='list-unstyled'>
                <li class='media'>
                  <img
                    src='https://user-images.githubusercontent.com/58324084/85816114-3cca9500-b71f-11ea-8f77-15d1480d0e88.png'
                    class='align-self-center'
                    alt='...'
                  />
                  <div class='media-body'>
                    <h5 class='mt-0 mb-1'>
                      Ōkido's Pokémon Research Institute
                    </h5>
                    Mobile-first UI application, which shows Pokémon user
                    searched and shows which Pokémon week against and strong
                    against.
                    <h6>
                      <li class='font-weight-lighter'>
                        - Built with Materialize
                      </li>
                      <li class='font-weight-lighter'>
                        - Used two server-side APIs including one third-party
                        API
                      </li>
                    </h6>
                    <a
                      href='https://alanhlee.github.io/PokemonIndex/'
                      target='_blank'
                      class='badge badge-info'
                    >
                      Play Demo
                    </a>
                    <a
                      href='https://github.com/alanhlee/PokemonIndex'
                      target='_blank'
                      class='badge badge-dark'
                    >
                      View Source
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='card'>
          <div class='card-header' id='project2'>
            <h2 class='mb-0'>
              <button
                class='btn btn-link'
                type='button'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='true'
                aria-controls='collapseTwo'
              >
                Project # 2 (NotFaceBook)
                <i class='material-icons' id='expandbtn'>
                  expand_more
                </i>
              </button>
            </h2>
          </div>
          <div
            id='collapseTwo'
            class='collapse show'
            aria-labelledby='project2'
            data-parent='#projectAccordian'
          >
            <div class='card-body'>
              <ul class='list-unstyled'>
                <li class='media'>
                  <img
                    src='https://user-images.githubusercontent.com/58324084/85816147-55d34600-b71f-11ea-9d05-3bfc0f566f04.PNG'
                    class='align-self-center'
                    alt='...'
                  />
                  <div class='media-body'>
                    <h5 class='mt-0 mb-1'>Not FaceBook</h5>
                    Mobile and Website UI Full-Stack application, which allows
                    users to have unique id and password. Users can make friends
                    with other users, post images and whatever text they want
                    to, and access to a chatroom too!
                    <h6>
                      <li class='font-weight-lighter'>
                        - Did not use any styling library.
                      </li>
                      <li class='font-weight-lighter'>
                        - HTML, CSS, JS, Sequelize, MySQL, Express, moment,
                        Node.js, Heroku (w/ JAWSDB) were utilized.
                      </li>
                    </h6>
                    <a
                      href='https://n0tfacebook.herokuapp.com'
                      target='_blank'
                      class='badge badge-info'
                    >
                      Visit website
                    </a>
                    <a
                      href='https://github.com/pravinsisowath/notFacebook'
                      target='_blank'
                      class='badge badge-dark'
                    >
                      View Source
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
