/* eslint-disable import/extensions */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Category } from '../../model/entity/Category';
import { CategoryCard } from '../CategoryCard/CategorieCard';

type CategorySliderProps = {
  categories: Category[];
};

export function CategorySlider({ categories }: CategorySliderProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: Math.min(categories.length, 5), // Exibir até 4 categorias simultaneamente
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Slider>
  );
}
