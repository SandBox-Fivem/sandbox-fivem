import React from 'react';
import { Error } from '../components';
export default () => {
	return <Error code={404} message={"Invalid Permissions"} />;
};
