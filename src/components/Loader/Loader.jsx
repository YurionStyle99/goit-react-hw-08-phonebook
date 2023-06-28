import PuffLoader  from "react-spinners/ClipLoader";

const Loader = ({size}) =>{
  return(
<PuffLoader
  color="#362287"
  cssOverride={null}
  loading
  size={size}
  speedMultiplier={1}
/>
  )
}

export default Loader