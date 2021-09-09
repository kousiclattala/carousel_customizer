import React from "react";
import { useSelector } from "react-redux";

const BottomPanel = () => {
  const photos = useSelector((state) => state.photo.photos);

  return (
    <div className="mt-3 flex-row bg-dark p-2">
      <div className="row">
        {Object.keys(photos).map(([k]) => (
          <div className="col">
            <div className="card" key={photos[k].id}>
              <img
                className="img-thumbnail d-block"
                src={photos[k].urls?.thumb}
                alt={photos[k].id}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomPanel;
