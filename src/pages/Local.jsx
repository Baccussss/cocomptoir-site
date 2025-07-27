import MapSection from '../components/Local/MapSection';
import LocalHeader from '../components/Local/LocalHeader';
import LocalInfos from '../components/Local/LocalInfo';

export default function Local(){
    return (
        <>
            <LocalHeader />
            <LocalInfos />
            <MapSection />
        </>
    );
}