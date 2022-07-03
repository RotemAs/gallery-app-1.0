import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Link,
  // useLocation,
} from "react-router-dom";
import axios from "axios";
import apiKey from "./config";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
const navKeys = ["BATTERFLAY", "Lion", "monkey", "computer"];

function App() {
  //set state for photos
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState("");
  // let location = useLocation();
let location = window.location.pathname.split("/")[1]
let locationSearch = window.location.pathname.split("/")[2]

  // useEffect fetches computer photos on page load
  useEffect(() => {
    if (location === "") {
      fetchPhotos(navKeys[0],'startPoint');
    }
    else if(location==='userSearch'){
      fetchPhotos(locationSearch,'manualUserSearch');
    }
  }, [location,locationSearch]);

  // use axios to make call for 24 pictures
  const fetchPhotos = (query, source) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setPhotos(res.data.photos.photo);
        if (source === "userSearch"||source==='manualUserSearch') {
          setSearchText(query);
        } else if (source === "navBar"||source==='startPoint') {
          setSearchText(query);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <div>
        <SearchForm searchFunc={fetchPhotos} />
        <nav className="main-nav">
          <ul>
            {navKeys.map((key) => {
              return (
                <li key={key}>
                  <Link
                    to={`/${key}`}
                    onClick={() => fetchPhotos(`${key}`, "navBar")}
                  >
                    {key}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Navigate to="/BATTERFLAY" />} />

          {navKeys.map((key) => (
            <Route
              path={`/${key}`}
              element={<PhotoContainer data={photos} searchText={key} />}
            />
          ))}

          <Route
            path={`/search/:searchText`}
            element={<PhotoContainer data={photos} searchText={searchText} />}
          />
          <Route
            path={`/userSearch/:searchText`}
            element={<PhotoContainer data={photos} searchText={searchText} />}

          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
