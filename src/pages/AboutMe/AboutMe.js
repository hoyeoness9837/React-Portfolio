import React from 'react';
const AboutMe = () => {
  return (
    <>
      <header>About me</header>
      <ul className='list-unstyled'>
        <li className='media'>
        <img
          src="https://user-images.githubusercontent.com/58324084/85816215-80250380-b71f-11ea-8c75-ef4e9141db43.jpg"
          class="img-fluid rounded-circle"
          alt="profilePicture"
        />
          <div className='media-body'>
            <h5 className='mt-0 mb-3'>Hi everyone!</h5>
            Nice to meet you all. I graduated from high school in Korea and
            studied abroad in the United States. I was a little bored to
            introduce myself in English, so I tried a new way in Korean. Last
            year, I graduated from UCSB as a chemical major. However, since
            then, I've been trying to learn coding to provide the solutions
            needed for business and the current society. I've always liked
            computer and mathematics relative to other subjects, and my
            problem-solving and organizing habits were good reasons for learning
            coding fun and easy.
          </div>
        </li>
      </ul>
    </>
  );
};
export default AboutMe;
