import { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const dragEvents = {
    onDragEnter: (e) => {
      e.preventDefault();
      console.log('onDragEnter');
    },
    onDragLeave: (e) => {
      e.preventDefault();
      console.log('onDragLeave');
    },
    onDragOver: (e) => {
      e.preventDefault();
      console.log('onDragOver');
    },
    onDrop: (e) => {
      e.preventDefault();
      console.log('onDrop');
      const files = Array.from(e.dataTransfer.files);
      // Usando FileReader
      files.map((file) => {
        const { name, size } = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const preview = reader.result;
          const image = { name, size, preview };

          setImages((prevImages) => [...prevImages, image]);
        };
        return null;
      });

      // Usando URL Create Object URL
      // const images = files.map((file) => {
      //   const { name, size } = file;
      //   return { name, size, preview: URL.createObjectURL(file) };
      // });
      // setImages(images);
    },
  };

  console.log(images);

  return (
    <div className="container">
      <div className="logo">
        <img src="/photography-group.png" alt="Photography Group" />
      </div>
      <div className="file-drop" {...dragEvents}>
        <div className="text">Arraste a imagem pra cá</div>
      </div>
      <div className="preview">
        {images.map((image) => {
          return (
            <div className="image" key={image.name}>
              <img src={image.preview} alt={image.name} />
            </div>
          );
        })}

        {/* <div className="image">
          <img src="https://loremflickr.com/600/600?random=1" alt="Lorem Flickr" />
        </div>
        <div className="image">
          <img src="https://loremflickr.com/600/600?random=2" alt="Lorem Flickr" />
        </div>
        <div className="image">
          <img src="https://loremflickr.com/600/600?random=3" alt="Lorem Flickr" />
        </div>
        <div className="image">
          <img src="https://loremflickr.com/600/600?random=4" alt="Lorem Flickr" />
        </div>
        <div className="image">
          <img src="https://loremflickr.com/600/600?random=5" alt="Lorem Flickr" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
