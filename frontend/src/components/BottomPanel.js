import React from "react";
import { useSelector } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

const BottomPanel = () => {
  const photos = useSelector((state) => state.photo.photos);

  return (
    <div className="mt-3 flex-row bg-dark p-2">
      <Droppable droppableId="dropId">
        {(provided) => (
          <div
            className="row"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Object.keys(photos).map(([k]) => (
              <Draggable key={photos[k].id} index={k}>
                {(provided) => (
                  <div
                    className="col"
                    key={photos[k].id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img
                      className="img-thumbnail d-block"
                      src={photos[k].urls?.thumb}
                      alt={photos[k].id}
                      width={200}
                      height={200}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default BottomPanel;
