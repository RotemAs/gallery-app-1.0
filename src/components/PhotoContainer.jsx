
const PhotoContainer = (props) => {
  const photoData = props.data;
  const query = props.searchText;
  console.log(query);

  
  const photos = photoData.map((photo, index) => {
    return (
      <li key={index}>
        <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} alt={query} />
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