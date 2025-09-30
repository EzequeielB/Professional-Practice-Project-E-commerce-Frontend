const Thumbnail = ({ arr, image }) => {
  return (
    <div className="thumbnails">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          alt={`thumbnail-${i}`}
          onClick={() => image(i)}
          style={{ cursor: "pointer", margin: "5px" }}
        />
      ))}
    </div>
  );
};

export default Thumbnail