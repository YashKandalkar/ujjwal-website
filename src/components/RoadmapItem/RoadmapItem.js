import "./RoadmapItem.css";

function RoadmapItem({ title, text, date, parity }) {
  return (
    <div
      className={`
      flex 
      flex-grow
      border-accentDark
      rounded-lg
      w-full
      border-2 
      flex-col
      `}
      style={{
        alignSelf: parity % 2 ? "self-start" : "self-end",
        backgroundColor: "#070b28",
      }}
    >
      <div className="p-3 text-base text-gray-50 font-poppins ">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-400">{text}</p>
        <div className="text-highlight text-base mt-2">{date}</div>
      </div>
    </div>
  );
}

export default RoadmapItem;
