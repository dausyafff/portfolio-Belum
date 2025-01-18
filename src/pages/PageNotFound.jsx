import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function PageNotFound() {
  return (
    <>
      <Navbar />
        <div className="wrapper">
          <h3>Oops</h3>
          <p>Halaman Tidak Ditemukan !!!</p>
        </div>
      <Footer />  
    </>
  )
}

export default PageNotFound