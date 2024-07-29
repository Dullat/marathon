const ImageGallery = ({ image }) => {
  return (
    <div className="w-full relative">
      <img src={image} alt="" className="relative z-0" />
    </div>
  )
}

export default ImageGallery
