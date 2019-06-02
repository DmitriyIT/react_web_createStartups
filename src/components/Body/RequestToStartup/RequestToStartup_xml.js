import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RequestToStartup.scss';

function CreateStartup_xml({  err,
										happyResult,
										refForm,
										submitForm,
										title,
										fields_input,
										button_text,
										textareaChange,
										selectValue,
										jobList,
										onSelectChange }) {
	var fields = fields_input.map(e => [
		<div className="CreateStartup__titleField">{e.text}</div>,
		<textarea className="CreateStartup__field" name={e.name} value={e.value} onChange={textareaChange} />
	]);
	return (
		<div className="CreateStartup">
			<div className="CreateStartup__title">{title}</div>
			{ happyResult ? <div className="CreateStartup_happyResult">{happyResult}</div> : ''}
			{ err ? <div className="CreateStartup_err">{err}</div> : ''}
			<form onSubmit={submitForm} id="createStartup">
				{fields}
				<div className="CreateStartup__titleField">Выберите позицию на которую хотите подать заявку</div>
				<select onChange={onSelectChange} value={selectValue} >
					{jobList.map(e => e.isFound ? '' : <option value={e.possition}> {e.possition} </option>)}
				</select>
			</form>
			<input type="submit" form="createStartup" className="CreateStartup__button" value={button_text} />
			<Link to="/">
				<div className="CreateStartup__button"> Назад </div>
			</Link>
		</div>
	)
}

export default CreateStartup_xml;