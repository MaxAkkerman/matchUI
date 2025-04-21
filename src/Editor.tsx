import {FC, memo, useCallback, useState} from "react";

interface Param {
    id: number;
    name: string;
    type?: string;
}

interface ParamValue {
    paramId: number;
    value: string | number | any[];
}

type Color = 'blue' | 'green'

interface Model {
    paramValues: ParamValue[];
    colors?: Color[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface IParamEditor {
    id: number,
    value: string | number | any[];
    change: (id: number, e: string) => void
}

const ParamEditor = memo(({id, value, change}: IParamEditor) => {
    switch (typeof value) {
        case 'string':
            return <input value={value} onChange={(e) => change(id, e.target.value)}/>
        default:
            return <div>add component for value type = {typeof value}</div>;
    }
})

export const ModelEditor: FC<Props> = ({params, model}) => {
    const [data, setData] = useState(model);

    const change = useCallback((id: number, value: string) => {
        const updatedModel = data.paramValues.map(el => {
            if (el.paramId === id) {
                el.value = value
                return el
            }
            return el
        })
        setData(prev => ({...prev, paramValues: updatedModel}))
    }, [data, setData])

    return (
        <div style={{
            margin: '100px auto auto auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 10
        }}
        >
            {model.paramValues.map(({paramId, value}) => {
                const param = params.find(el => el.id === paramId)
                const title = param ? param.name : 'without name'
                return (
                    <div
                        key={paramId}
                        style={{
                            display: 'flex',
                            gap: '20px',
                            width: 300,
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>{title}</div>
                        <ParamEditor
                            id={paramId}
                            value={value}
                            change={change}
                        />
                    </div>
                )
            })}
        </div>
    )
}