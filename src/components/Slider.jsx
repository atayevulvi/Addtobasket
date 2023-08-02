import  { useState } from 'react';
import Slider from 'react-slider';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div>
      <Slider
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Value: {sliderValue}</p>
    </div>
  );
};

export default SliderComponent;
