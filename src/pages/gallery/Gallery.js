import React from 'react';
import './gallery.css'
import UsableHeader from '../../Components/UsableHeader';
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
  const galleryLength=15;
  const images=[];
  for (let i=1; i<=galleryLength; i++)
  { 
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
      <UsableHeader title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sint, cumque recusandae sed nobis amet.
      </UsableHeader>
      <section className='gallery'>
          
        <div className="container gallery-container">
          {
            images.map((image,index)=>{
              return(
                <article key={index}>
                    <img src={image} alt="" />
                </article>
              )
            })
          }
        </div>

      </section>
    </>
  );
}

export default Gallery;
