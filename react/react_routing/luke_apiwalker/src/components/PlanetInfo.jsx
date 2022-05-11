const styles = {
  bold: {
    fontWeight: "bold",
    marginRight: "8px",
  },
};

const PlanetInfo = ({
  data: {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  },
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="rotation-period">
        <span style={styles.bold}>Rotation Period: </span>
        <span>{rotation_period}</span>
      </div>
      <div className="orbital-period">
        <span style={styles.bold}>Orbital Period: </span>
        <span>{orbital_period}</span>
      </div>
      <div className="diameter">
        <span style={styles.bold}>Diameter: </span>
        <span>{diameter}</span>
      </div>
      <div className="climate">
        <span style={styles.bold}>Climate: </span>
        <span>{climate}</span>
      </div>
      <div className="gravity">
        <span style={styles.bold}>Gravity: </span>
        <span>{gravity}</span>
      </div>
      <div className="terrain">
        <span style={styles.bold}>Terrain: </span>
        <span>{terrain}</span>
      </div>
      <div className="surface-water">
        <span style={styles.bold}>Surface Water: </span>
        <span>{surface_water}</span>
      </div>
      <div className="population">
        <span style={styles.bold}>Population: </span>
        <span>{population}</span>
      </div>
    </>
  );
};
export default PlanetInfo;
