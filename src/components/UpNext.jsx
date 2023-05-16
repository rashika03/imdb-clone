import { Typography ,Box} from "@mui/material"

import { styled } from "@mui/system"
const UpNext = ({ movies }) => {


    const Poster = styled('img')({
        width: 88

    })
    const Component =styled(Box)`
    width:40%;
display:flex;
flex-direction:column;
align-items:baseline;
padding-left:20px;
    &>p{
        color: #F5C518;
        font-weight:600;
        font-size:18px;
        margin-bottom:10px;
    }

    `

    const Wrapper =styled(Box)`
    color:#FFFFFF;
    display:flex;
    &>p{
        margin-left:20px;

    }

    
    `
    return (
       <Component>
<Typography>Up next</Typography>
            {
                 movies.splice(0,4).map(movie => (
                    <Wrapper>

                        <Poster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        <Typography>{movie.original_title}</Typography>
                    </Wrapper>
                 ))
            }
       </Component>
            
        
    )
}

export default UpNext;