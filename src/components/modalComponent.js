import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment/moment';

const ModalComponent = ({ open, setOpen, count, setCount, createNewTask }) => {
    const handleClose = () => setOpen(false);
    const [form, setForm] = useState({ date: '', title: '', description: '', status: '', dateForPicker: '' })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const statusOptions = [
        { label: 'Todo' },
        { label: 'In Progress' },
        { label: 'Done' }
    ]


    const handleChange = (e, v) => {
        setForm({
            ...form,
            [e.target.id]: v === undefined ? e.target.value : v
        })
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Nueva Tarea No. - {count}
                    </Typography>
                    <TextField id="title" label="Title" variant="filled" onChange={(e) => handleChange(e)} />
                    <TextField id="description" label="Description" variant="filled" onChange={(e) => handleChange(e)} />
                    <Autocomplete
                        id="status"
                        options={statusOptions}
                        renderInput={(params) => <TextField {...params} label="status" />}
                        onChange={(e, v) => setForm({
                            ...form,
                            status: v.label
                        })}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Date"
                                value={form.dateForPicker}
                                views={['year', 'month', 'day']}
                                onChange={(currentDate) => {
                                    const newDate = moment(currentDate.$d).format("YYYY-MM-DD")
                                    setForm({
                                        ...form,
                                        date: newDate,
                                        dateForPicker: currentDate
                                    })
                                }} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Button variant="contained" disableElevation onClick={() => {
                        if (form.date === '' || form.description === '' || form.status === '' || form.title === '') {
                            alert('Favor llenar los datos')
                        } else {
                            createNewTask(form)
                            setCount(e => e += 1)
                            setOpen(false)
                        }

                    }}>
                    Agregar Tarea
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default ModalComponent