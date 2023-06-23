import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, hide: true},
    {field: 'name', headerName: 'Pokemon Name', flex: 1},
    {field: 'type', headerName: 'Pokemon Type', flex: 1},
    {field: 'item', headerName: 'Held Item', flex: 1},
    {field: 'level', headerName: 'Pokemon Level', flex: 1},
]

function DataTable() {
    let [open, setOpen] = useState(false);
    const { pokeData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClosed = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }

  return (
    <>
        <Modal
            id={selectionModel}
            open={open}
            onClose={handleClosed}
        />
        <div className='justify-content-center flex flex-row'>
            <div className='justify-content-center'>
                <button className='p-4 m-4 bg-pink-300 rounded hover:bg-pink-800 hover:text-white'
                onClick={() => handleOpen()}>
                    Catch New Pokemon!
                </button>
            </div>
            <Button onClick={handleOpen} className='p-4 m-4 bg-pink-300 rounded hover:bg-pink-800 hover:text-white'>Update</Button>
            <Button onClick={deleteData} className='p-4 m-4 bg-pink-300 rounded hover:bg-pink-800 hover:text-white'>Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-pink-300 my-2 rounded">Caught Pokemon</h2>
            <DataGrid rows={pokeData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}/>
        </div>
    </>
  )
}
export default DataTable