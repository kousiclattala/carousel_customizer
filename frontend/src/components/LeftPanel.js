import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "../redux/photoSlice";

const LeftPanel = () => {
  const photos = useSelector((state) => state.photo.photos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("state name", e);
    axios
      .post(
        "http://localhost:5000/search",
        { name: e },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const result = res.data.photos;

        dispatch(getPhotos(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="nav flex-column ps-3">
      <div className="col">
        <div className="row">
          <p className="navbar-brand text-white">Categories</p>
          <div className="dropdown">
            <select
              className="bg-primary p-2 text-white"
              placeholder="select one option"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="mobile" className="dropdwon-item">
                Mobile
              </option>
              <option value="landscape" className="dropdwon-item">
                Landscape
              </option>
              <option value="coding" className="dropdwon-item">
                Coding
              </option>
              <option value="nature" className="dropdwon-item">
                Nature
              </option>
              <option value="people" className="dropdwon-item">
                People
              </option>
              <option value="wallpapers" className="dropdwon-item">
                Wallpapers
              </option>
              <option value="architecture" className="dropdwon-item">
                Architecture
              </option>
              <option value="fashion" className="dropdwon-item">
                Fashion
              </option>
              <option value="technology" className="dropdwon-item">
                Technology
              </option>
              <option value="animal" className="dropdwon-item">
                Animal
              </option>
            </select>
          </div>
        </div>
        <div className="row">
          <p className="navbar-brand text-white">File Description</p>
          <div className="card overflow-auto">
            <div className="card-body">
              {Object.keys(photos).map(([k]) => (
                <ul className="list-group mb-2" key={photos[k].id}>
                  <li className="nav-link list-group-item">
                    {photos[k].alt_description}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftPanel;
