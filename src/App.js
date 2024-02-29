import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import BannerComponent from './components/bannerComponent';
import Button from '@mui/material/Button';
import TableComponent from './components/tableComponent';
import ModalComponent from './components/modalComponent';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

const App = () => {
  const [filter, setFilter] = useState({ word: '', originalData: [] })
  const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  const [open, setOpen] = useState(false)

  const removeTask = (id) => {
    const newData = data.filter(e => e.id !== id)
    setData(newData)
  }

  const createNewTask = (
    {
      title,
      description,
      status,
      date
    }) => {

    const newElement = { id: count, title, description, status, date, remove: () => removeTask(count) }
    setData(oldArray => [...oldArray, newElement])

  }

  const filterTasks = () => {
    setFilter({ ...filter, originalData: data })
    const newData = data.filter(e => {
      const re = new RegExp(filter.word, 'gi');
      const titleMatches = e.title.match(re)
      const statusMatches = e.status.match(re)
      if (titleMatches !== null || statusMatches !== null) {
        return true
      } else {
        return false
      }
    })
    setData(newData)
  }

  const resetFilter = () => {
    setData(filter.originalData)
    setFilter({ word: '', originalData: [] })
  }


  return (
    <>
      <div className="">
        <BannerComponent title={"Todo APP"} subTitle={"Angela Pinelo"} />
      </div>
      <div className="">
          
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 0, sm:5 },
            pb: { xs: 8, sm: 2 },
          }}
        >
        <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
            <TextField id="word" label="Filter" variant="filled" value={filter.word} onChange={(e) => setFilter({ ...filter, [e.target.id]: e.target.value })} />
        {
          filter.originalData.length === 0 ?
            <Button variant="contained" disableElevation onClick={() => filterTasks()}>
              Filtrar
            </Button> :
            <Button variant="contained" disableElevation onClick={() => resetFilter()}>
              Reset Filtro
            </Button>
        }

        <Button variant="contained" disableElevation onClick={() => {
          setOpen(true)
          console.log(data)
        }}>
          Agregar Tarea
        </Button>
        </Stack>
        </Container>
      </div>
      <div className='tablePage'>
        <TableComponent data={data} />
      </div>
      <div>
        <ModalComponent open={open} setOpen={setOpen} count={count} setCount={setCount} createNewTask={createNewTask} />
      </div>
    </>
  );
}

export default App;
