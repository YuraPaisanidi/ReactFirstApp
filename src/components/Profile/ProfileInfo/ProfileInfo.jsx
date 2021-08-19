import React from 'react';
import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div className={s.content}>
			<div>
				<img src="https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg&ga=GA1.2.1420717220.1625875200" alt="" />
			</div>
			<div>
				ava + description
			</div>

		</div>
	);
}

export default ProfileInfo;
