import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {ids} = useParams();
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [ids]);
    return (
        <div>
            <button onClick={() => navigate(-1)}>prev</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
            <button onClick={() => navigate(-1)}>prev</button>
        </div>
    );
};

export {
    Characters
};