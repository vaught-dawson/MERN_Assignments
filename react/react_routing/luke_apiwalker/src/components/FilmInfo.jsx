const styles = {
  bold: {
    fontWeight: "bold",
    marginRight: "8px",
  },
  button: {
    padding: "4px 16px",
    color: "white",
    backgroundColor: "#0019f8",
    borderRadius: "4px",
    marginTop: "8px",
    cursor: "pointer",
  },
  p: {
    width: "42%",
    margin: "8px 0",
    textIndent: "42px",
  },
};

const FilmInfo = ({
  data: { title, episode_id, opening_crawl, director, producer, release_date },
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="episode-id">
        <span style={styles.bold}>Episode Id: </span>
        <span>{episode_id}</span>
      </div>
      <div className="opening_crawl">
        <span style={styles.bold}>Opening Crawl:</span>
        <p style={styles.p}>{opening_crawl}</p>
      </div>
      <div className="director">
        <span style={styles.bold}>Director: </span>
        <span>{director}</span>
      </div>
      <div className="producer">
        <span style={styles.bold}>Producer: </span>
        <span>{producer}</span>
      </div>
      <div className="release_date">
        <span style={styles.bold}>Release Date: </span>
        <span>{release_date}</span>
      </div>
    </>
  );
};
export default FilmInfo;
