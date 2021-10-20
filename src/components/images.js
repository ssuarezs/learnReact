
const Images = ({ images }) => {
  return (
    <div>
      {images.map(i => 
      <div key={i.id}>
        <span>{i.userId} </span>
        <span>{i.id} </span>
        <span>{i.title} </span>
      </div>
      )}
    </div>
  )
}
export default Images
