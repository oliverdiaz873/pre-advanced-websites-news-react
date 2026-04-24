import { Link } from 'react-router-dom';
import './Breadcrumb.css';

interface BreadcrumbProps {
  home: string;
  category: string;
  categoryPath: string;
  current: string;
}

export const Breadcrumb = ({ home, category, categoryPath, current }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">{home}</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={categoryPath}>{category}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
};
