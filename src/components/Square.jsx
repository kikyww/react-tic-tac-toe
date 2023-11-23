import {React, useState} from 'react'


const Square = ({ value, onSquareClick }) =>{
	return(
		<button className="w-12 h-12 border border-slate-950 text-2xl font-bold" onClick={onSquareClick}>{value}</button>
	)
}

export default Square