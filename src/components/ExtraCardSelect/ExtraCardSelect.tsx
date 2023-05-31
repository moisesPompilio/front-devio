import './ExtraCardSelect.scss';
import { useState } from 'react';
import { Extra } from '../../model/entity/Extra';
import { priceFormatter } from '../../util/priceFormatter';

type ExtraCardSelectProps = {
  extra: Extra;
};

export function ExtraCardSelect({ extra }: ExtraCardSelectProps) {
  const { name, image, description, price } = extra;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="extra-card-select flex-between">
      <div className="flex-row">
        <div className="extra-card-select-img">
          <img src={image} alt={name} />
        </div>
        <div className="extra-card-select-details">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="extra-card-select-price">
        <div>
          <h2>{priceFormatter(price)}</h2>
        </div>
        <div>
          <button
            type="button"
            className={`extra-card-select-checkbox ${
              isChecked ? 'checked' : ''
            } `}
            onClick={handleCheckboxChange}
          >
            <span
              className={`extra-card-select-checkbox-icon ${
                isChecked ? 'checked' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
