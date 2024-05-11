import {Shimmer} from "react-shimmer";

function LoadingListComponent() {
    return (
        <>
            {Array.from({length: 20,}, (v, i) => i).map(index =>
                <div key={index}><Shimmer width={350}   className={'m-auto mt-4 rounded-xl'}   height={300}/> </div>
            )}
        </>
    );
}

export default LoadingListComponent;