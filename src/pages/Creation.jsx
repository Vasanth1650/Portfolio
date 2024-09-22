import React, { useEffect, useState } from 'react';

function Creation({ arr, polylining }) {
  const [polyLines, setPolyLines] = useState([]);

  useEffect(() => {
    setPolyLines(polylining); // Initialize the state with the passed-in polylines
  }, [polylining]);

  // Function to update polyline points based on user input
  const handlePointChange = (index, pointIndex, axis, value) => {
    const updatedPolyLines = [...polyLines];
    const points = updatedPolyLines[index].points.split(" ").map((point) => point.split(","));
    
    // Update the X or Y value
    points[pointIndex][axis === 'x' ? 0 : 1] = value;

    // Join back the points array
    updatedPolyLines[index].points = points.map(p => p.join(",")).join(" ");
    setPolyLines(updatedPolyLines); // Update the state with new points
  };

  return (
    <div>
      <svg version="1.0" x="1px" y="1px" xmlns="http://www.w3.org/2000/svg" width="1091px" height="651px" viewBox="0 0 571 651">
        <rect width="100%" height="100%" fill="#f0f0f0" />
        <g id="blender_frame_1" transform="rotate(270, 285.5, 325.5)">
          <g id="blender_frame_1">
            <g id="blender_object_GPencil">
              <g id="Plane_Lines">
                {polyLines.map((polyline, index) => (
                  <polyline
                    key={index}
                    stroke="#000000"
                    strokeOpacity="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1"
                    points={polyline.points}
                  />
                ))}
              </g>
            </g>
          </g>
        </g>
      </svg>

      {/* Create controls to edit the polyline points */}
      <div>
        {polyLines.map((polyline, index) => (
          <div key={index}>
            <h3>Edit Polyline {index + 1}</h3>
            {polyline.points.split(" ").map((point, pointIndex) => {
              const [x, y] = point.split(",");
              return (
                <div key={pointIndex}>
                  <label>Point {pointIndex + 1}:</label>
                  <input
                    type="number"
                    value={x}
                    onChange={(e) => handlePointChange(index, pointIndex, 'x', e.target.value)}
                  />
                  <input
                    type="number"
                    value={y}
                    onChange={(e) => handlePointChange(index, pointIndex, 'y', e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creation;
