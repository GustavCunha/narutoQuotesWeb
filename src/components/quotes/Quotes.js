import {Quote, Speaker, Wrapper} from './Quotes.styles';
import {Button} from '../button';
import { func, string } from 'prop-types';

export function Quotes({
    quote, 
    speaker, 
    onUpdate = () => {}
}) {
    return (
        <Wrapper>
            <Quote>"{quote}"</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}