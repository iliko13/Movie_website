function ImageSlider({ slides, currentIndex }) {
  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
    ></div>
  );
}

export default ImageSlider;
