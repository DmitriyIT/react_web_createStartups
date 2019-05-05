import React, { Component } from 'react';
// import './Profile.scss';

import Profile_show_xml from './Profile_show_xml.js';
import Profile_edit_xml from './Profile_edit_xml.js';
import RegAuth from '../RegAuth';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuth: false,
			showEdit: false,
			notifications: ['нет новых уведомлений'],
			user_info: {},
			fileImg: null,
			err: ''
		};
	}
	
	componentDidMount() {
		this.getInfoProfile();
		this.getNotifications();
	}
 	
 	getInfoProfile() {
 		fetch('/getInfoProfile')
			.then(res => res.json())
			.then(data => {
				if (data.isAuth) {
					this.setState({
						isAuth: true,
						user_info: data.user_info
					});
				}
			})
			.catch(err => console.log(err));
 	}
 	getNotifications() {
	 	fetch('/getNotifications')
			.then(res => res.json())
			.then(data => {
				if (data.notifications) {
					this.setState({
						notifications: data.notifications
					});
				}
			})
			.catch(err => console.log(err));	
 	}
 	
   showDownloadImage(files) {
   	var change_img_src = (result) => {
   		var newUserInfo = this.state.user_info;
	 		newUserInfo.img_src = result;
	  		this.setState({
	  			user_info: newUserInfo
	  		});
	 	}
	    // FileReader support
	    if (FileReader && files && files.length) {
	        var fr = new FileReader();
	        fr.onload = function () {
	        		change_img_src(fr.result)
	            // document.getElementById(outImage).src = fr.result;
	        }
	        fr.readAsDataURL(files[0]);
	    }
	    // Not supported
	    else {
	        // fallback -- perhaps submit the input to an iframe and temporarily store
	        // them on the server until the user's session ends.
	    }  	
   }

	inputFileHandler = (e) => {
		console.log(e.target.files[0]);
		// var newUserInfo = this.state.user_info;
		// newUserInfo.img_src = e.target.files[0].name;
		this.showDownloadImage(e.target.files);
		this.setState({fileImg: e.target.files[0]});
	}
	sendImgToServ(file) {
		var formData = new FormData();
		formData.append('userImg', file, 'user1.jpg')
		
		fetch("/sendUserImg", {
		    method: "POST",
		    body: formData
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data)
		})
		.catch(res => console.log('catch' + res));
	}

	textareaChange = (e) => {
		var newUser_info = this.state.user_info;
		if (e.target.name != 'email') 
			newUser_info[e.target.name] = e.target.value;
		this.setState({user_info: newUser_info});
	}
	submitForm = (e) => {
		e.preventDefault();
		if (this.state.fileImg) 
			this.sendImgToServ(this.state.fileImg);
		
		var data = this.state.user_info;
		delete(data.img_src);
		fetch("/changeUserData", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((data) => {
			// console.log(data)
		})
		.catch(res => console.log('catch' + res));
		this.changeEdit();
	}

	changeEdit = (e) => {
		this.getInfoProfile();
		this.setState((prevState, props) => ({showEdit: !prevState.showEdit}))
	}
	refInputFile = (e) => {this._refInputFile = e};
	buttonInputFileClick = (e) => {this._refInputFile.click()}

	render() {
		return this.state.isAuth ? 
			this.state.showEdit ?
				<Profile_edit_xml 
					{...this.state.user_info}
					goBack={this.changeEdit}
					err=''
					textareaChange={this.textareaChange}
					submitForm={this.submitForm}
					buttonInputFileClick={this.buttonInputFileClick}
					refInputFile={this.refInputFile}
					inputFileHandler={this.inputFileHandler} />
				: <Profile_show_xml 
					{...this.state.user_info}
					clickEdit={this.changeEdit}
					notifications={this.state.notifications} />
			: <RegAuth />;
	}
}

export default Profile;