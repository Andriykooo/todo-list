import { RootState } from '../store/index'; // eslint-disable-line
import { TypedUseSelectorHook, useSelector } from 'react-redux'; // eslint-disable-line

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
