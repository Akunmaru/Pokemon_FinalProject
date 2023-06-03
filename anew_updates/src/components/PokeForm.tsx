import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseType, chooseItem, chooseLevel } from '../redux/slices/RootSlice'

interface PokemonForm {
    id?: string[]
}

const PokeForm = (props: PokemonForm) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`)
        if (props.id && props.id.length > 0){
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${data.name} ${props.id}`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseType(data.type))
            dispatch(chooseItem(data.item))
            dispatch(chooseLevel(data.level))

            server_calls.create(store.getState())
            setTimeout( () => { window.location.reload() }, 1000 )
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Pokemon Name</label>
                <Input {...register('name')} name='name' placeholder='Name'/>
            </div>
            <div>
                <label htmlFor="type">Pokemon Type</label>
                <Input {...register('type')} name='type' placeholder='Type'/>
            </div>
            <div>
                <label htmlFor="item">Pokemon Item</label>
                <Input {...register('item')} name='item' placeholder='Item'/>
            </div>
            <div>
                <label htmlFor="level">Pokemon Level</label>
                <Input {...register('level')} name='level' placeholder='Level'/>
            </div>
            <div>
                <Button 
                className='flex justify-start m-3 bg-red-300 p-2 rounded hover:bg-red-500 text-white'>
                    Catch!
                </Button>
            </div>
        </form>
    </div>
  )
}

export default PokeForm