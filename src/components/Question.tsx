import '../styles/components/question.scss';
import { ReactNode } from 'react';

type QuestionProps = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  children?: ReactNode;
}

export function Question({ content, author, children } : QuestionProps) {
  return(
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}