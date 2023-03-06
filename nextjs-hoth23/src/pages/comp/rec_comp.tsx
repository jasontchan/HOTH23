import { Box, Typography } from '@mui/material'

export default function RecComp({title, image_url, hours, location, price_range} : 
    {title: string, image_url: string, hours: string, location: string, price_range: number})
{
    return (
        <div>
            <Box style={{border: '2px solid'}} sx={{display: 'flex', flexDirection: 'row', boxShadow: 2, borderRadius: '16px', p: 2, 
                border: 1, borderColor: 'grey.500', background: 'TODO'}} width={800}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignSelf: "flex-start", paddingLeft: 5}}>
                    <img src={image_url} alt="oops" width={300} height={300}></img>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', alignSelf: 'flex-start', paddingLeft: 7, alignItems: 'flex-start'}}>
                    <Typography variant="h4" sx={{fontWeight: 'bold', paddingTop: 3}}>
                        {title}
                    </Typography>
                    <Typography variant="h5" sx={{fontWeight: 'regular'}}>
                        Hours: {hours}
                    </Typography>
                    <Typography variant="h5" sx={{fontWeight: 'regular'}}>
                        Location: {location}
                    </Typography>
                    <Typography variant="h5" sx={{fontWeight: 'regular'}}>
                        Price Range: {price_range}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}