import { useEffect, useRef, useState } from 'react';
import {Content, NarutoImg} from './App.styles';

import narutoImg from '../../images/naruto.png';
import jutsu from '../../sounds/jutsu.mp3';

import { Quotes } from '../../components';
import { getQuote } from '../../services';

const audio = new Audio(jutsu);

export function App() {
    const isMounted = useRef(true);
    const [quote, setQuote] = useState({
        speaker: 'Loading speaker...',
        quote: 'Loading Quote'
    });
    
    const onUpdate = async () => {

        const resQuote = await getQuote();
    
        if (isMounted.current) {
            audio.play();
            setQuote(resQuote);
        }
    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        }
    },[]);
    
    return (
        <Content>
            <Quotes {...quote} onUpdate={onUpdate}/>
            <NarutoImg alt="Naruto holding a kunai" src={narutoImg} />
        </Content>
    )
}