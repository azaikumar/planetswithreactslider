import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} data={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
