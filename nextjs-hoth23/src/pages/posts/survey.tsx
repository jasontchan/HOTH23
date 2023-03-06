import Link from "next/link";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Text from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import {SelectChangeEvent} from '@mui/material/Select';
//import FC from 'react';
//import ReactNode from 'react';
import React from 'react';
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

//export default function survey() {

type surveyInput = {
    indoor: Boolean
    outdoor: Boolean

    day: string
    
    morning: Boolean
    afternoon: Boolean
    night: Boolean

    cheap: Boolean
    mediumPrice: Boolean
    expensive: Boolean

    near: Boolean
    mediumDistance: Boolean
    far: Boolean

    active: Boolean
    relax: Boolean
    educational: Boolean
    artsEntertainment: Boolean
    restaurant: Boolean
    shopping: Boolean
    nightlife: Boolean
}

const Survey = () => {

    const [day, setDay] = React.useState('');

    const [checkedArr, setCheckedArr] = useState<Boolean[]>([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setDay(event.target.value as string);
    };

    const handleChangeCheck = (position: number) => {
        const update = checkedArr.map((item, index) => 
            index === position ? !item : item
        ) 
        setCheckedArr(update)
    };


    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('rec_page.tsx', {state:{
            indoor: checkedArr[0],
            outdoor: checkedArr[1],
        
            day: "",
            
            morning: checkedArr[2],
            afternoon: checkedArr[3],
            night: checkedArr[4],
        
            cheap: checkedArr[5],
            mediumPrice: checkedArr[6],
            expensive: checkedArr[7],
        
            near: checkedArr[8],
            mediumDistance: checkedArr[9],
            far: checkedArr[10], 

            active: checkedArr[11],
            relax: checkedArr[12],
            educational: checkedArr[13],
            artsEntertainment: checkedArr[14],
            restaurant: checkedArr[15],
            shopping: checkedArr[16],
            nightlife: checkedArr[17]
        }});
    }

    return(
        <Box display="flex" justifyContent="Center" paddingY="100px">
            <Container sx = {{ maxWidth: '750px'}} maxWidth={false}>
                <Stack spacing={2}> 
                    <Typography variant="h2" fontWeight={80}>
                        Survey
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={80}>
                        Fill out the questions below to receieve a personalized list of fun things to add to your UCLA bucket list!
                    </Typography>
                </Stack>
                <Stack spacing={10}>
                    <FormGroup>
                        <Typography variant="body1" fontWeight={80}>
                            1. Indoor or outdoor activity?
                        </Typography>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(0)}/>} label = "Indoor"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(1)}/>} label = "Outdoor"/>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Stack spacing={10}>
                    <FormGroup>
                        <Typography variant="body1" fontWeight={80}>
                            2. What day(s) of the week?
                        </Typography>
                        <FormControl fullWidth>
                            <Select value = {day} onChange={handleChangeSelect}>
                                <MenuItem value ={'Monday'}>Monday</MenuItem>
                                <MenuItem value = {'Tuesday'}>Tuesday</MenuItem>
                                <MenuItem value = {'Wednesday'}>Wednesday</MenuItem>
                                <MenuItem value = {'Thursday'}>Thursday</MenuItem>
                                <MenuItem value = {'Friday'}>Friday</MenuItem>
                                <MenuItem value = {'Saturday'}>Saturday</MenuItem>
                                <MenuItem value = {'Sunday'}>Sunday</MenuItem>
                            </Select>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Stack spacing = {10}>
                    <FormGroup>
                        <Typography variant = "body1" fontWeight={80}>
                            3. What time(s)?
                        </Typography>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(2)}/>} label = "Morning (6 AM -11 AM)"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(3)}/>} label = "Afternoon (11 AM - 5PM)"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(4)}/>} label = "Night (5PM – 11PM)"/>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Stack spacing={10}>
                    <FormGroup>
                        <Typography variant="body1" fontWeight={80}>
                            4. Price Range: 
                        </Typography>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(5)}/>} label = "$0–20"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(6)}/>} label = "$20–50"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(7)}/>} label = "$50+"/>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Stack spacing={10}>
                    <FormGroup>
                        <Typography variant="body1" fontWeight={80}>
                            5. Distance: 
                        </Typography>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(8)}/>} label = "0–10 miles"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(9)}/>} label = "10–30 miles"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(10)}/>} label = "30+ miles (an adventure :D)"/>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Stack spacing={10}>
                    <FormGroup>
                        <Typography variant="body1" fontWeight={80}>
                            6. Type of activity:
                        </Typography>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(11)}/>} label = "Active"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(12)}/>} label = "Relaxed"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(13)}/>} label = "Educational"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(14)}/>} label = "Arts/Entertainment"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(15)}/>} label = "Food"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(16)}/>} label = "Shopping"/>
                            <FormControlLabel control={<Checkbox onChange={() => handleChangeCheck(17)}/>} label = "Nightlife"/>
                        </FormControl>
                    </FormGroup>
                </Stack>
                <Button onClick={()=>{handleSubmit()}} variant="outlined">Submit</Button>
            </Container>
        </Box>
    );
}

export default Survey



