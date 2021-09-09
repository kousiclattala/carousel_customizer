import React from "react";
import BottomPanel from "./components/BottomPanel";
import CarouselPanel from "./components/CarouselPanel";
import LeftPanel from "./components/LeftPanel";

import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  return (
    <DragDropContext>
      <div className="row">
        <h1 className="text-center">Carousel</h1>
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
