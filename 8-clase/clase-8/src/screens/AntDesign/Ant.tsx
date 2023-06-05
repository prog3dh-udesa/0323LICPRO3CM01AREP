import React, {useState} from "react";
import { DatePicker, Space, Button, message, Alert } from "antd";

const Ant : React.FC = () => {

    const [date : Date, setDate] = useState(null)

    const handleChange = (value) => {
        message.success(`La fecha seleccionada es: ${value ? value.format('YYYY-MM-DD') : 'Ninguna'}`)
        console.log(message)
        setDate(value)
    }


    return(
        <Space>
            <DatePicker
                onChange={handleChange}
            />
            <Alert
                message= "La fecha seleccionada es:"
                description= {date ? date.format('YYYY-MM-DD') : 'Ninguna'}
            />
            <Button>
                Submit date
            </Button>
        </Space>
    )
}

export default Ant