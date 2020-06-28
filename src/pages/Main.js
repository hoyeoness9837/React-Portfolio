import React from 'react';
const Main = () => {
  return (
    <>
      <div class='main-container'>
        <div>
          <a
            href='mailto:kim.hoyeon93@gmail.com'
            target='_blank'
            name='email'
            class='main-item'
          >
            Send an email to hoyeon<i class='material-icons'>email</i>
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/hoyeon-kim-930813kr/'
            target='_blank'
            class='main-item'
          >
            Go to Hoyeon's linkedin<i class='material-icons'>face</i>
          </a>
        </div>
        <div>
          <a
            href='https://github.com/hoyeoness9837?tab=repositories'
            target='_blank'
            class='main-item'
          >
            Go to Hoyeon's github<i class='material-icons'>usb</i>
          </a>
        </div>
      </div>
    </>
  );
};
export default Main;
