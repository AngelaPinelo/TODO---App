import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const TableComponent = ({ data }) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No. Tarea</TableCell>
                            <TableCell align="right">Titulo</TableCell>
                            <TableCell align="right">Descripciónn</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Fecha Entrega</TableCell>
                            <TableCell align="right">Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(e => {
                            return <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={e.id}
                            >
                                <TableCell component="th" scope="row">
                                    {e.id}
                                </TableCell>
                                <TableCell align="right">{e.title}</TableCell>
                                <TableCell align="right">{e.description}</TableCell>
                                <TableCell align="right">{e.status}</TableCell>
                                <TableCell align="right">{e.date}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color= 'error'disableElevation onClick={e.remove}>
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableComponent