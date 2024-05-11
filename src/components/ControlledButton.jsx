import {useEffect, useState} from "react";
import loading from "./../assets/svg/loading.svg";

function ControlledButton({isLoadingButton, title, onClick}) {
    const [isLoading, setIsLoading] = useState(isLoadingButton);
    return <>
        <div className={'flex mt-5 px-5 py-2 border border-amber-950 w-fit rounded-xl'}>
            <button type="button" onClick={async () => {
                setIsLoading(true)
                await onClick();
                setIsLoading(false)
            }} disabled={isLoading}
                    className={'inline'}>
                {isLoading ?
                    <img src={loading} alt="loading" height={30} width={30}
                         className={'animate-spin  bg-transparent inline mx-2'}/>
                    : <div className={'inline'}></div>}
                <p className={'dark:text-white inline'}>{!isLoading ? title : 'Processing...'}</p>
            </button>
        </div>
    </>;
}

export default ControlledButton;