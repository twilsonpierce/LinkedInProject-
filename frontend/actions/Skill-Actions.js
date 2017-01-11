import $ from 'jquery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: currentSkill
})

const addSkillServer = (data, profileId)=>(dispatch)=>{
	console.log(profileId, 'Did you get the profile ID TO ADD?')
	$.ajax({
		url: '/api/endorsements/' + profileId,
		type:'POST',
		data:data
	})
	.done(data =>{
		dispatch(addSkill(data))
	})
	return Promise.resolve();
}

export default {addSkillServer};

//export const removeSkill =(id) =>{
// 	return {
// 		type:'REMOVE_SKILL',
// 		id
// 	}
// }

// const getSkill = currentSkill=>({
// 		type: 'DISPLAY_SKILL',
// 		data: currentSkill
// })

// const getSkillServer = (data, profileId)=>(dispatch)=>{
// 	console.log(profileId, 'Did you get profile ID TO GET??')
// 	$.ajax({
// 		url:'/api/endorsements/' + profileId
// 		type:
// 		data:data
// 	})
// }


