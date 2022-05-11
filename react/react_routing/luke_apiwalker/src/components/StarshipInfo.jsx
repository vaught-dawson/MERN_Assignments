const styles = {
  bold: {
    fontWeight: "bold",
    marginRight: "8px",
  },
};

const StarshipInfo = ({
  data: {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  },
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="model">
        <span style={styles.bold}>Model: </span>
        <span>{model}</span>
      </div>
      <div className="manufacturer">
        <span style={styles.bold}>Manufacturer: </span>
        <span>{manufacturer}</span>
      </div>
      <div className="cost-in-credits">
        <span style={styles.bold}>Cost in Credits: </span>
        <span>{cost_in_credits}</span>
      </div>
      <div className="length">
        <span style={styles.bold}>Length: </span>
        <span>{length}</span>
      </div>
      <div className="max-atmosphering-speed">
        <span style={styles.bold}>Max Atmosphering Speed: </span>
        <span>{max_atmosphering_speed}</span>
      </div>
      <div className="crew">
        <span style={styles.bold}>Crew: </span>
        <span>{crew}</span>
      </div>
      <div className="passengers">
        <span style={styles.bold}>Passengers: </span>
        <span>{passengers}</span>
      </div>
      <div className="cargo-capacity">
        <span style={styles.bold}>Crago Capacity: </span>
        <span>{cargo_capacity}</span>
      </div>
      <div className="consumables">
        <span style={styles.bold}>Consumables: </span>
        <span>{consumables}</span>
      </div>
      <div className="hyperdrive-rating">
        <span style={styles.bold}>Hyperdrive Rating: </span>
        <span>{hyperdrive_rating}</span>
      </div>
      <div className="MGLT">
        <span style={styles.bold}>MGLT: </span>
        <span>{MGLT}</span>
      </div>
      <div className="starship-class">
        <span style={styles.bold}>Startship Class: </span>
        <span>{starship_class}</span>
      </div>
    </>
  );
};
export default StarshipInfo;
