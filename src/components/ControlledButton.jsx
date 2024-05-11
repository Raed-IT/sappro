import {useEffect, useState} from "react";
import loading from "./../assets/svg/loading.svg";

function ControlledButton({isLoading, title,onClick}) {
    const [_isLoading, setIsLoading] = useState();
    useEffect(() => setIsLoading(isLoading), [isLoading])
    return <>
        <div className={'flex w-full'}>
            <button type="button" onClick={onClick} disabled={_isLoading} className={'inline'}>
                {_isLoading ?
                    <img src={loading} alt="loading" height={30} width={30}
                         className={'animate-spin  bg-transparent inline mx-2'}/>
                    : <div className={'inline'}></div>}
                <p className={'dark:text-white inline'}>{!_isLoading ? title : 'Processing...'}</p>
            </button>
        </div>
    </>;
}

export default ControlledButton;