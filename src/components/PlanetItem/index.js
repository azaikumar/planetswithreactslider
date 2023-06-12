import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {imageUrl, name, description} = data
  return (
    <div className="item-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <div className="img-container" data-testid="planets">
        <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      </div>
      <h1 className="color-font">{name}</h1>
      <p className="color-font">{description}</p>
    </div>
  )
}

export default PlanetItem
