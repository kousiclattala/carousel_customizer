import React from "react";
import BottomPanel from "./components/BottomPanel";
import CarouselPanel from "./components/CarouselPanel";
import LeftPanel from "./components/LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { getPhotos } from "./redux/photoSlice";

const App = () => {
  const photos = useSelector((state) => state.photo.photos);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    const list1 = [];
    Object.keys(photos).map(([k]) => list1.push(photos[k]));
    const removed = list1.splice(source.index, 1);
    list1.splice(destination.index, 0, removed);
    dispatch(getPhotos(list1));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row">
        <h1 className="text-center text-white">Carousel</h1>
        <div className="col col-2">
          <LeftPanel />
        </div>
        <div className="col col-10">
          <CarouselPanel />
          <BottomPanel />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
