

function BoxList({ boxes, deleteBox }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {boxes.map((box, index) => (
        <div key={index}
         style={{
            backgroundColor: box.color,
            height: `${box.size}px`,
            width: `${box.size}px`,
            position: "relative"
          }}
        >
          <button
            onClick={() => deleteBox(index)}
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              color: "white",
              
              border:"none",
              width: "20px",
              height: "20px",
              backgroundColor:"red",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default BoxList;

