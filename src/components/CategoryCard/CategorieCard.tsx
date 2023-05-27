import './CategoryCard.scss';
import { Category } from '../../model/Category';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { name, image } = category;
  return (
    <div className="category-item bg-white">
      <img src={image} alt={name} className="category-image" />
      <h4 className="category-name">{name}</h4>
    </div>
  );
}
