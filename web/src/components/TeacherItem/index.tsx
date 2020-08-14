import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number,
  user_id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number,
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  
  function handleNewConncetion() {
    api.post('connections', {
      user_id: teacher.user_id
    });
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img 
          src={teacher.avatar} 
          alt="Proffy"
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora <strong>{teacher.cost}</strong>
        </p>
        <a 
          target="_blank"
          onClick={() => handleNewConncetion()} 
          href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp"
        />
          Entrar em contato
        </a>
      </footer>
    </article>      
  )
}

export default TeacherItem;