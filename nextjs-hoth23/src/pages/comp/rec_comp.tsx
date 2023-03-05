import { Box, Typography } from '@mui/material'

export default function RecComp({title, image_url, hours, location, price_range} : 
    {title: string, image_url: string, hours: string, location: string, price_range: number})
{
    return (
        <div>
            <Box style={{ border: '2px solid' }} sx={{display: 'flex', flexDirection: 'row', boxShadow: 2, borderRadius: '16px', p: 2, 
                justifyContent: "space-between", border: 1, borderColor: "gray"}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignSelf: "flex-start"}}>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                        {title}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}