import React from "react";
import NoPhotos from "./NotFound";
import ImgLoad from "./imgLoading";

const PhotoContainer = (props) => {
  const photoData = props.data;
  const query = props.searchText;
  const containerState = props.containerState;

  const photos = photoData.map((photo) => {
    return (
      <li>
        <img
          src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
          key={photo.id}
          alt={query}
        />
      </li>
    );
  });
  console.log(containerState, "containerState");
  if (containerState === "step1" || containerState === "") {
    console.log("step1 loding  photos  for ", query);
    return (
      <div className="photo-container">
       <h1>loding  photos  for {query}</h1>
       <ImgLoad />

      </div>
    );
  } else if (containerState === "step2") {
    console.log("step2 Photos for ", query);

    if (photos.length > 0) {
      return (
        <div className="photo-container">
          <h1>Photos for {query}</h1>
          <ul>{photos}</ul>
        </div>
      );
    } else {
      console.log("step2 No photos found for ", query);

      return (
        <div className="photo-container">
          <NoPhotos />
        </div>
      );
    }
  }
};

export default PhotoContainer;
