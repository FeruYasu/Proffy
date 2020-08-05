import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/30644819?s=460&u=d3de1c17c44e75ffd883bfee038bb130d8c5e8a5&v=4"
          alt="Fernando Yasumoto"
        />
        <div>
          <strong>Fernando Yasumoto </strong>
          <span>Developer</span>
        </div>
      </header>
      <p>
        Description of myself as an expert of developing stuff and how i can
        help someone to learn that!
      </p>
      <footer>
        <p>
          Price/Hour
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Contact
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
