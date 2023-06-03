import React from 'react'
import PokeForm from './PokeForm';

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props) => {
    if ( !props.open ) return (<></>);
    return(
        <div
        onClick={ props.onClose }
        className='fixed w-full h-full flex overflow-auto z-1 
        justify-center align-middle bg-white opacity-25'>
            <div
            className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-purple-300 shadow-xl rounded text-black'
            onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-center m-3 bg-red-400 p-2 rounded hover:bg-red-600 text-white"
                        onClick={ props.onClose }>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <PokeForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
