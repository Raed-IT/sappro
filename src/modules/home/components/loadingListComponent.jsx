import {Shimmer} from "react-shimmer";

function LoadingListComponent() {
    return (
        <>
            {Array.from({length: 20,}, (v, i) => i).map(index =>
                <div key={index}><Shimmer  className={'m-5 rounded-xl'} height={500} width={400}/> </div>
            )}
        </>
    );
}

export default LoadingListComponent;