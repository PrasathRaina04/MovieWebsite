
import axios from "axios";
import { useEffect, useState } from "react";


function Home() {
    const key = "9daec7a8";
    const [movieList, setMovieList] = useState([]);
    const [searchMovieName, setSearchMovieName] = useState("bat");
    const [error, setError] = useState("");
    const [favList, setFavList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [setMovieList]);

    async function fetchData(){
        // header setting
        const options = {
          method: 'GET',
          url: 'http://www.omdbapi.com/?',
          params: { s:searchMovieName,page:1,apikey:'9daec7a8'},
        }
        //api call 
        await axios
        .request(options)
        .then(function (response) {
          setMovieList(response.data.Search)
          console.log(response.data.Search);
        })
        .catch(function (error) {
          console.error(error);
    
        });
        console.log(movieList);
      }

    function handleAddtoFav(item) {
        if(!favList.includes(item))
        setFavList((prevFavList) => [...prevFavList, item]);
    }

    function handleSearch(e) {
        setSearchMovieName(e.target.value)
    }
    function handleSearchButton(){
        fetchDetails();
    }
    function handleRemoveFromFav(movie){
        const temp = favList.filter((product) => movie !== product);
        setFavList(temp);
    }
    return (
        <div className="container">
            <div className="row font-monospace text-bg-secondary" style={{ marginTop: "16px", }}>
                <div className="col-lg-9 offset-0 text-center">
                    <div className="text-center shadow-lg"><label className="form-label" style={{ marginLeft: "80px", }}>Search&nbsp; :&nbsp;&nbsp;<input  className="form-control-lg" type="search" placeholder="www.yourwebsite.com" style={{ width: "374.3px", marginTop: "12px", }} /></label></div>
                </div>
                <div className="col"><label className="form-label">User Logged in :</label>
                    <p className="text-end" style={{ width: "144px", }}>Prasath&nbsp;</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="font-monospace text-start" style={{ marginBottom: "22px", marginTop: "10px", }}>
                        <h1 className="text-start" style={{ color: "var(--bs-red)", fontWeight: "bold", fontSize: "38.9px", }}>Watchlists</h1>
                    </div>
                    <div className="font-monospace"><input type="search" placeholder="Search" style={{ marginTop: "0px", marginBottom: "40px", }} onChange={() => handleSearch(e)} /></div>
                    <div className="font-monospace text-start"><button onClick={()=>handleSearchButton()} className="btn btn-danger fs-6" type="button" style={{ background: "var(--bs-danger)", width: "192.2px", height: "53.3px", marginBottom: "28px", }}><i className="fa fa-home" style={{ paddingRight: "16px", }} />Home</button></div>
                    <hr />
                    <div>
                        <h1>My List</h1>
                        <ul>
                            {favList.map((movie)=>(
                            <li>{movie} <button onClick={()=>handleRemoveFromFav(movie)}>-</button></li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-9">
                    <section className="photo-gallery py-4 py-xl-5">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-8 col-xl-6 text-center mx-auto">
                                    <h2>Welcome to Watchlists</h2>
                                    <p className="w-lg-50">Browse movies, add them to watchlists and share them with friends.<br /><br /></p>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "22px", }}>
                                <div className="col">
                                    <div className="input-group"><span className="input-group-text">Type a Movie name here&nbsp;</span><input className="form-control" type="text" placeholder="tom cruse movie" /><button className="btn btn-primary" type="button">SEARCH</button></div>
                                </div>
                            </div>

                            <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
                                {movieList.map((item, index) => (
                                    <div className="col item"><a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img className="img-fluid" src={item.Poster} /></a>
                                        <p>{item.Title} ({item.Year})</p>
                                        <button onClick={()=>handleAddtoFav(item.Title)}>Add to Fav</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;