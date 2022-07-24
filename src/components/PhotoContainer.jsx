
const PhotoContainer = (props) => {
  const photoData = props.data;
  const query = props.searchText;

  const photos = photoData.map((photo, index) => {
    return (
      <li >
        <img  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} key={photo.id} alt={query}  />
      </li>
    );
  });

  
  return(
    
    <div className='photo-container'>
      <h2>{query}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
  
}

export default PhotoContainer;