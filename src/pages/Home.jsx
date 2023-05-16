



import { useEffect,useState } from 'react';
import { getCategoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
import Header from '../components/common/Header'
import { Box ,styled} from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';
const Wrapper =styled(Box)`
display:flex;
padding:20px 0;

`
const component=styled(Box)`

padding :0 115px;
`
const Home =()=>{


    const [movies,setMovies]=useState([]);
useEffect( ()=>{
const getData =async()=>{
    let response=await getCategoryMovies(NOWPLAYING_API_URL);
    setMovies(response.results)
}
getData();
},[]);


return (
    <>
     <Header/>
     <component>

    
     <Wrapper>
<Banner movies={movies}/>
<UpNext movies={movies}/>
     </Wrapper>
<Slide movies={movies}/>
<Slide movies={movies}/>
<Slide movies={movies}/>
<Slide movies={movies}/>
<Slide movies={movies}/>
     </component>
    </>
       
  
)

}
export default Home;